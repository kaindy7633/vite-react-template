import React from 'react';
import { ICON_FONT_SCRIPTURL } from '@/constants';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFontComponent = createFromIconfontCN({
  scriptUrl: ICON_FONT_SCRIPTURL,
});

type TIconFontProps = {
  type: string;
  size?: string | number;
};

const IconFont: React.FC<TIconFontProps> = ({ type, size = 14 }) => (
  <IconFontComponent
    type={type}
    style={{ fontSize: `${size}px` }}
    className="cursor-pointer"
  />
);

export default IconFont;
