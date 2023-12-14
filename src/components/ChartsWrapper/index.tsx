/*
 * @Description:
 * @Author: mengjiajun
 * @Date: 2023-12-13 10:50:57
 * @LastEditors: mengjiajun
 * @LastEditTime: 2023-12-14 09:34:38
 * @FilePath: \visualization-data-webui\src\components\ChartsWrapper\index.tsx
 */
import { useEffect, useLayoutEffect, useRef } from 'react';
import type { EChartsType } from 'echarts';
import useEcharts, { ECOption } from '@/hooks/useEcharts';

type TChartsWrapperProps = {
  option: ECOption;
  height?: string | number;
  width?: string | number;
};

// 定义图表组件的引用类型
export interface MyChartRef {
  instance(): EChartsType | undefined;
}

const ChartsWrapper: React.FC<TChartsWrapperProps> = ({
  option,
  height = '100%',
  width = '100%',
}) => {
  const [echarts] = useEcharts();

  const cRef = useRef<HTMLDivElement>(null);

  const cInstance = useRef<EChartsType>();

  const initChart = () => {
    try {
      if (cRef.current) {
        // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
        cInstance.current = echarts.getInstanceByDom(
          cRef.current
        ) as unknown as EChartsType | undefined;

        if (!cInstance.current) {
          cInstance.current = echarts.init(cRef.current, undefined, {
            //   renderer: 'svg',
          }) as unknown as EChartsType;
        }

        // 设置配置项
        if (option) cInstance.current?.setOption(option);
      }
    } catch (error) {
      console.log(error, 'initChart');

      cInstance.current?.dispose();
    }
  };

  // 初始化注册组件，监听 cRef 和 option 变化
  useEffect(() => {
    initChart();
  }, [cRef, option]);

  // 监听窗口大小变化重绘
  useEffect(() => {
    window.addEventListener('resize', resize, false);
    return () => {
      window.removeEventListener('resize', resize, false);
    };
  }, [option]);

  // 监听高度变化
  useLayoutEffect(() => {
    resize();
  }, [width, height]);

  // 重新适配大小并开启过渡动画
  const resize = () => {
    cInstance.current?.resize({
      animation: { duration: 300 },
    });
  };

  return <div ref={cRef} style={{ height, width }}></div>;
};

export default ChartsWrapper;
