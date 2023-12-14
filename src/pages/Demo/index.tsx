/*
 * @Description: Demo
 * @Author: mengjiajun
 * @Date: 2023-12-13 10:12:22
 * @LastEditors: mengjiajun
 * @LastEditTime: 2023-12-14 09:32:17
 * @FilePath: \visualization-data-webui\src\pages\Demo\index.tsx
 */
import { useCallback, useState } from 'react';
import { Tabs } from 'antd';
import BarDemo from './components/BarDemo';
import LineDemo from './components/LineDemo';

const Demo: React.FC = () => {
  const [options, setOptions] = useState(['三列（两边宽度给最大最小值）']);
  const [curSelectKey, setCurSelectKey] = useState('1');

  const getSection = useCallback(() => {
    if (curSelectKey === '1') {
      return (
        <div className="w-full h-full flex">
          <div className="w-1/5 min-w-[300px] max-w-[500px] bg-red-300 h-full flex flex-col">
            <div className="h-1/3 border border-solid">
              <LineDemo />
            </div>
            <div className="h-1/3 border border-solid">
              <BarDemo />
            </div>
            <div className="flex-1"></div>
          </div>
          <div className=" flex-1 bg-yellow-300 h-full"></div>
          <div className="w-1/5 min-w-[300px] max-w-[500px] bg-green-300 h-full"></div>
        </div>
      );
    }
    return <></>;
  }, [curSelectKey]);

  return (
    <div className="w-full h-full flex flex-col">
      <header className="h-[60px] w-full">
        <Tabs
          style={{ height: '100%' }}
          items={options.map((_item, _index) => {
            const id = String(_index + 1);
            return {
              label: _item,
              key: id,
              children: '',
            };
          })}
          onChange={(e) => setCurSelectKey(e)}
        />
      </header>
      <section className="flex-1 w-full">{getSection()}</section>
    </div>
  );
};

export default Demo;
