import classNames from 'classnames';
import React,{ FC,useRef,useState } from 'react';
//todo less变量
//TODO 大小,是否禁用
//todo 文字内容
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
  const checkedForColor:string = checkedColor === undefined ? '#1890ff' : checkedColor;
  const click = () => {
    //点击事件
    if (disabled) {
      return;
    }
    //改变样式
    setRes(!res);
    // console.log(res);
    if (res) {
      //开关打开
      cirRef.current!.style.marginLeft = '30px'; //使用非空断言
      boxRef.current!.style.backgroundColor = checkedForColor;
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
          ? { cursor: 'not-allowed', opacity: 0.65, background: checkedColor } //禁用设置透明度
          : { background: checkedColor }
      }
    >
      {/* {res ? (checkedChildren===null?null:<span>{checkedChildren}</span>):null} */}
      <div className="circle" ref={cirRef}></div>
      {/* {uncheckedChildren === null && !res ? null : (
        <span>{uncheckedChildren}</span>
      )} */}
    </div>
  );
};

Switch.defaultProps = {
  disabled: false,
  size: 'md',
  checkedColor: '#1890ff',
};

export default Switch;
