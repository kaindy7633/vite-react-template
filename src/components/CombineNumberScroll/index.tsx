/*
 * @Description: 组合数字滚动组件 支持多位整数，小数，负数
 * @Author: mengjiajun
 * @Date: 2023-12-12 10:49:15
 * @LastEditors: mengjiajun
 * @LastEditTime: 2023-12-12 11:11:57
 * @FilePath: \visualization-data-webui\src\components\CombineNumberScroll\index.tsx
 */
import { Fragment, useEffect, useRef, useState } from 'react';
import SingleNumberScroll from '../SingleNumberScroll';
import './index.less';

type CombineNumberScrollProps = {
  // 总数
  total: number;
  // 字号
  fontSize: number;
  // 字重
  fontWeight: number;
  // 字体
  fontFamily: string;
  // 延迟时间的基数
  delayBase: number;
  // 持续时间
  duration: number;
  // 宽度相对于字号大小的倍数
  widthScale: number;
  // 是否开启千分位
  thousandth: boolean;
  // 点击事件开关
  clickEvent: boolean;
};

const CombineNumberScroll: React.FC<Partial<CombineNumberScrollProps>> = ({
  total = 0,
  fontSize = 50,
  delayBase,
  duration = 2000,
  thousandth = false,
  widthScale,
  fontWeight = 400,
  clickEvent = false,
  fontFamily = 'auto',
}) => {
  // 生成滚动组件
  const [numbers, setNumbers] = useState<JSX.Element[]>();
  const [clickRefresh, setClickRefresh] = useState<boolean>(false);
  const clickTimer = useRef<boolean>(false);

  function initialize() {
    // 调用两次reverse的目的是:防止12和129中的1、2是一个组件 没有变化

    // 拆分小数
    const strArr = total!.toString().split('.');
    let flag = '';
    let left = '';
    let right = '';
    if (strArr.length === 2) {
      left = strArr[0];
      right = strArr[1];
    } else {
      left = strArr[0];
    }
    if (Number(left) < 0) {
      flag = '-';
      left = Math.abs(Number(left)).toString();
    }

    const left_el = left!
      .toString()
      .split('')
      .reverse()
      .map((_item, _index, _array) => {
        // 当开启千分位选项时，渲染逗号
        if (thousandth && _index > 0 && _index % 3 === 0) {
          return (
            <Fragment key={`l-${_index}`}>
              <SingleNumberScroll
                total={~~_item}
                // 倍率应该从1开始 故+1
                delay={_index + 1}
                delayBase={delayBase}
                duration={duration}
                fontSize={fontSize}
                fontWeight={fontWeight}
                widthScale={widthScale}
                clickRefresh={clickRefresh}
                setClickRefresh={setClickRefresh}
              />
              <div
                key={`l-d-${_index}`}
                style={{
                  fontSize: fontSize,
                  color: 'white',
                  fontFamily: fontFamily,
                }}
              >
                ,
              </div>
            </Fragment>
          );
        } else {
          return (
            <SingleNumberScroll
              total={~~_item}
              // 倍率应该从1开始 故+1
              delay={_index + 1}
              delayBase={delayBase}
              duration={duration}
              fontSize={fontSize}
              fontWeight={fontWeight}
              key={`l-${_index}`}
              widthScale={widthScale}
              clickRefresh={clickRefresh}
              setClickRefresh={setClickRefresh}
            />
          );
        }
      });

    if (flag) {
      left_el.push(
        <div
          key={`l-flag`}
          style={{
            fontSize: fontSize,
            color: 'white',
            fontFamily: fontFamily,
          }}
        >
          {flag}
        </div>
      );
    }

    const right_el = right!
      .toString()
      .split('')
      .reverse()
      .map((_item, _index, _array) => {
        return (
          <Fragment key={`r-${_index}`}>
            <SingleNumberScroll
              total={~~_item}
              // 倍率应该从1开始 故+1
              delay={_index + 1}
              delayBase={delayBase}
              duration={duration}
              fontSize={fontSize}
              fontWeight={fontWeight}
              widthScale={widthScale}
              clickRefresh={clickRefresh}
              setClickRefresh={setClickRefresh}
            />
          </Fragment>
        );
      });
    if (right_el.length) {
      right_el.push(
        <div
          key={'p'}
          style={{
            fontSize: fontSize,
            color: 'white',
            fontFamily: fontFamily,
          }}
        >
          .
        </div>
      );
    }
    setNumbers([...left_el.reverse(), ...right_el.reverse()]);
  }

  // total变化时，重新渲染组件
  useEffect(() => {
    initialize();
  }, [total]);

  // 点击时刷新一下DOM状态
  useEffect(() => {
    initialize();
  }, [clickRefresh]);

  return (
    <div
      className="CombinativeDiv"
      onClick={() => {
        // 节流
        if (clickEvent) {
          if (clickTimer.current === false) {
            setClickRefresh(true);
            clickTimer.current = true;
            setTimeout(() => {
              clickTimer.current = false;
            }, 5000);
          }
        }
      }}
    >
      {numbers}
    </div>
  );
};

export default CombineNumberScroll;
