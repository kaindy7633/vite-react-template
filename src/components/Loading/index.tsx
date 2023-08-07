import React from 'react';
import './index.less';

const Loading: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-nowrap justify-center items-center overflow-hidden">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;