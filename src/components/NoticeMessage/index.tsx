import React, { useRef } from 'react';
import { theme as AntdTheme, Badge, Popover } from 'antd';
import { useThemeStore } from '@/store';
import classnames from 'classnames';
import IconFont from '@/components/IconFont';
import MessageContent from './MessageContent';

const NoticeMessage: React.FC = () => {
  const { theme } = useThemeStore();

  const headerMessageRef = useRef(null);

  return (
    <Popover
      placement="bottomRight"
      trigger="click"
      title="消息列表"
      content={<MessageContent />}
    >
      <Badge ref={headerMessageRef} count={5} size="small" className="">
        <IconFont
          type="icon-notice-message"
          size={19}
          className={classnames(
            theme.algorithm === AntdTheme.defaultAlgorithm || !theme.algorithm
              ? ''
              : 'text-white'
          )}
        />
      </Badge>
    </Popover>
  );
};

export default NoticeMessage;
