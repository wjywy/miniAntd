import classNames from 'classnames';
import React, { FC, useRef } from 'react';
//todo less变量
//TODO 大小,是否禁用
//todo 文字内容
export type SwitchSize = 'lg' | 'md' | 'sm';

interface BaseSwitchProps {
  onChange?: (checked: boolean) => void;
  // onChange?: React.MouseEventHandler<HTMLElement>;
  size?: SwitchSize;
  disabled?: boolean;
  className?: string;
  checkedChildren?: React.ReactNode;
  uncheckedChildren?: React.ReactNode;
}

export type SwitchProps = Partial<BaseSwitchProps>;

const Switch: FC<SwitchProps> = ({
  onChange,
  size,
  // disabled,
  className,
  // checkedChildren,
  // uncheckedChildren,
}) => {
  const classes = classNames('switch-box', className, {
    [`l-switch-${size}`]: size,
  });
  const uid = Math.random().toString();
  const swRef = useRef(null);
  const click = (e: any) => {
    //todo 事件类型对象总是报错
    // console.log(e.target.checked);

    if (onChange !== undefined) {
      // if (onChange !== undefined&&e.target!==null) {
      // console.log(swRef.current.checked);
      onChange(e.target.checked);
    }
  };
  return (
    <div className={classes}>
      <input
        id={uid}
        type="checkbox"
        className="switch"
        ref={swRef}
        onClick={(e) => click(e)}
      />
      <label htmlFor={uid}>{}</label>
    </div>
  );
};

Switch.defaultProps = {
  disabled: false,
  size: 'md',
};

export default Switch;
