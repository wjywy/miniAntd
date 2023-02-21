import classNames from 'classnames';
import React, { FC } from 'react';

interface IconProps {
  name?: string;
  onClick?: React.MouseEventHandler<HTMLElement> | void;
  size?: number | string;
}

const Icon: FC<IconProps> = (props) => {
  const { name, size } = props;
  const styleObj = { fontSize: size };
  const handleClick = (e: any) => {
    if (props.onClick) props.onClick(e);
  };

  const classes = classNames('iconfont', { [`icon-${name}`]: name });

  return <i onClick={handleClick} className={classes} style={styleObj}></i>;
};
Icon.defaultProps = {
  size: 30,
};
export default Icon;
