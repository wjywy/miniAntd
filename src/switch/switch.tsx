import classNames from 'classnames';
import React, { FC, useRef, useState } from 'react';
export type SwitchSize = 'md' | 'sm';

interface BaseSwitchProps {
  onChange?: (checked: boolean) => void;
  // onChange?: React.MouseEventHandler<HTMLElement>;
  size?: SwitchSize;
  disabled?: boolean;
  className?: string;
  checkedColor?: string;
  // uncheckedChildren?: React.ReactNode;
}

export type SwitchProps = Partial<BaseSwitchProps>;

const Switch: FC<SwitchProps> = ({
  onChange,
  size,
  disabled,
  className,
  checkedColor,
  // uncheckedChildren,
}) => {
  const classes = classNames('switch', className, {
    [`l-switch-${size}`]: size,
  });

  const boxRef = useRef<HTMLDivElement>(null);
  const cirRef = useRef<HTMLDivElement>(null);
  const [res, setRes] = useState(false);
  const click = () => {
    //点击事件
    if (disabled) {
      return;
    }
    //改变样式
    setRes(!res);
    if (res) {
      //开关打开
      cirRef.current!.style.marginLeft = '30px'; //使用非空断言
      boxRef.current!.style.backgroundColor =
        checkedColor === undefined ? '#1890ff' : checkedColor; //未传入,使用默认的颜色
    } else {
      cirRef.current!.style.marginLeft = '0px';
      boxRef.current!.style.backgroundColor = '#ced4da';
    }
    if (onChange !== undefined) {
      onChange(res); //回传结果
    }
  };
  return (
    <div
      className={classes}
      onClick={click}
      ref={boxRef}
      style={
        disabled
          ? { cursor: 'not-allowed', opacity: 0.65, background: checkedColor } //禁用的话,设置透明度
          : { background: checkedColor }
      }
    >
      {/* {res ? (checkedChildren===null?null:<span>{checkedChildren}</span>):null} */}
      <div className="circle" ref={cirRef}></div>
      {/* {uncheckedChildren === null && !res ? null : (<span>{uncheckedChildren}</span> )} */}
    </div>
  );
};

Switch.defaultProps = {
  disabled: false,
  size: 'md',
  checkedColor: '#1890ff',
};

export default Switch;
