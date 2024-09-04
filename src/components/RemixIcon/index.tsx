// 对 RemixIcon 进行的封装
import React from 'react';

type TRemixIconProps = {
  icon: string;
  size?: number;
  color?: string;
};

const RemixIcon: React.FC<TRemixIconProps> = ({
  icon,
  size = 1.2,
  color = 'rgba(0, 0, 0, 0.65)',
}) => (
  <i
    className={icon}
    style={{ fontSize: `${size}rem`, paddingRight: '0.3rem', color }}
  />
);

export default RemixIcon;
