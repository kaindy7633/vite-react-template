import React from 'react';
import { Badge, Popover } from 'antd';
import IconFont from '@/components/IconFont';
import MessageContent from './MessageContent';

const NoticeMessage: React.FC = () => {
  return (
    <Popover
      placement="bottomRight"
      trigger="click"
      title="消息列表"
      content={<MessageContent />}
    >
      <Badge count={5} size="small" className="text-white hover:text-gray-200">
        <IconFont type="icon-notice-message" size={19} />
      </Badge>
    </Popover>
  );
};

export default NoticeMessage;
