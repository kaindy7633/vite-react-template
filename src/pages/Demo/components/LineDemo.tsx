/*
 * @Description: 基础折线图
 * @Author: mengjiajun
 * @Date: 2023-12-13 13:51:59
 * @LastEditors: mengjiajun
 * @LastEditTime: 2023-12-14 09:35:50
 * @FilePath: \visualization-data-webui\src\pages\Demo\components\LineDemo.tsx
 */
import { useState } from 'react';
import ChartsWrapper from '@/components/ChartsWrapper';
import { ECOption } from '@/hooks/useEcharts';

const LineDemo: React.FC = () => {
  const [option, setOption] = useState<ECOption>({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
    title: {
      text: '基础折线图',
    },
  });

  return (
    <div className="w-full h-full" id="lineDemoId">
      <ChartsWrapper option={option} key="lineDemo" />
    </div>
  );
};

export default LineDemo;
