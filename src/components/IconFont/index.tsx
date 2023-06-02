import React from 'react';
import { appIconFontScript } from '@/constants';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFontComponent = createFromIconfontCN({
  scriptUrl: appIconFontScript,
});

type TIconFontProps = {
  type: string;
  size?: string | number;
  color?: string;
  className?: string;
};

const IconFont: React.FC<TIconFontProps> = ({
  type,
  size,
  color,
  className,
}) => (
  <IconFontComponent
    type={type}
    style={{ fontSize: `${size}px`, color }}
    className={className}
  />
);

export default IconFont;
