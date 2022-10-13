import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { ICON_FONT_URL } from '../../constants/global_constants';
import classNames from 'classnames';

type TIconFontProps = {
  type: string;
  className?: string;
};

const IconFontInstance = createFromIconfontCN({
  scriptUrl: ICON_FONT_URL,
});

const IconFont: React.FC<TIconFontProps> = ({ type, className }) => {
  return <IconFontInstance type={type} className={classNames('text-lg', className)} />;
};

export default IconFont;
