import React from 'react';
import { ICON_FONT_SCRIPTURL } from '@/constants';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFontComponent = createFromIconfontCN({
  scriptUrl: ICON_FONT_SCRIPTURL,
});

type TIconFontProps = {
  type: string;
  size?: string | number;
  color?: string;
};

const IconFont: React.FC<TIconFontProps> = ({ type, size = 14, color }) => (
  <IconFontComponent
    type={type}
    style={{ fontSize: `${size}px`, color }}
    className="cursor-pointer"
  />
);

export default IconFont;
