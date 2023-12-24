/*
 * @Description: 数字滚动组件 仅支持一位整数
 * @Author: mengjiajun
 * @Date: 2023-12-12 10:36:50
 * @LastEditors: mengjiajun
 * @LastEditTime: 2023-12-12 10:48:04
 * @FilePath: \visualization-data-webui\src\components\SingleNumberScroll\index.tsx
 */
import { useEffect, useRef, useState } from 'react';
import './index.less';

type NumberScrollProps = {
  // 个位数
  total: number;
  // 字号
  fontSize: number;
  // 字重
  fontWeight: number;
  // 延迟时间的倍率
  delay: number;
  // 延迟时间的基数
  delayBase: number;
  // 持续时间
  duration: number;
  // 宽度相对于字号大小的倍数
  widthScale: number;
  // 刷新事件提示
  clickRefresh: boolean;
  // 设置刷新事件提示
  setClickRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const SingleNumberScroll: React.FC<Partial<NumberScrollProps>> = ({
  total = 0,
  fontSize = 50,
  fontWeight = 400,
  delay = 1,
  delayBase = 0.15,
  duration = 600,
  widthScale = 0.6,
  clickRefresh,
  setClickRefresh,
}) => {
  // 指向上下滑动的ul
  const scrollUlRef = useRef<HTMLUListElement>(null);
  const intervalHandler: any = useRef();
  const [isRefresh, setIsRefresh] = useState<boolean>(true);

  const refresh = () => {
    if (clickRefresh) {
      setClickRefresh!(false);
    }
    setIsRefresh(true);
    scrollUlRef.current!.style.transition = '';
    scrollUlRef.current!.style.transform = `translateY(0px)`;
    setTimeout(() => {
      setIsRefresh(false);
    }, 0);
  };

  const initialize = () => {
    if (scrollUlRef.current) {
      // 打开过渡 进行滚动显示 目标是第二组0-9中的数字 确保滚动反向一致
      scrollUlRef.current.style.transition = `all ${duration / 1000}s ease-out`;
      scrollUlRef.current.style.transitionDelay = delay * delayBase + 's';
      scrollUlRef.current.style.transform = `translateY(-${
        (total + 10) * fontSize
      }px)`;

      // 当duration过渡时间结束以后 进行无缝播放 将过渡取消、数字立即归位至第一组0-9中
      intervalHandler.current = setTimeout(() => {
        if (scrollUlRef.current?.style) {
          scrollUlRef.current.style.transition = '';
          scrollUlRef.current.style.transform = `translateY(-${
            total * fontSize
          }px)`;
          intervalHandler.current = 0;
        }
      }, duration + 400 + delay * delayBase * 1000);
    }
  };

  useEffect(() => {
    if (scrollUlRef.current?.style && isRefresh) {
      refresh();
    }
  }, []);

  useEffect(() => {
    clearTimeout(intervalHandler.current);
    if (!isRefresh) {
      if (total < 0 || total > 9) {
        throw Error('个位数错误');
      }
      if (scrollUlRef.current) {
        initialize();
      }
    }
  }, [total, isRefresh]);

  useEffect(() => {
    if (clickRefresh) {
      refresh();
    }
  }, [clickRefresh]);

  return (
    <span
      className="topDiv"
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        height: fontSize,
        width: fontSize * widthScale,
        lineHeight: '100%',
      }}
    >
      <ul className="scrollUl" ref={scrollUlRef}>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>

        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
    </span>
  );
};

export default SingleNumberScroll;
