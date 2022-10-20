import React from 'react';
import { Skeleton } from 'antd';

const MessageContent: React.FC = () => {
  return (
    <div className="w-[300px]">
      <Skeleton active />
    </div>
  );
};

export default MessageContent;
