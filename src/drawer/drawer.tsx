import React from 'react';
interface DrawerProps {
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  open: boolean;
  pushState: Placement; // 抽屉滑动方向
  title?: React.ReactNode;
  children?: React.ReactNode;
}
export type Placement = 'left' | 'right' | 'top' | 'bottom';
const Drawer = (props: DrawerProps) => {
  const { onClose, open, pushState, children, title } = props;
  type styleReturn = {
    width: string; // 宽度
    height: string; //高度
    bottom?: string;
    top?: string;
    right?: string;
    left?: string;
  };

  console.log('open', open);
  if (open !== true) {
    document.body.style.overflow = 'auto';
    console.log('hahahhah');
  }
  const chooseStyle = (pushState: Placement): styleReturn => {
    let width, height;
    if (pushState === 'bottom' || pushState === 'top') {
      width = '100vw';
      height = '30vh';
      if (pushState === 'bottom') {
        let bottom = '0px';
        return { width, height, bottom };
      } else {
        let top = '0px';
        return { width, height, top };
      }
    } else {
      width = '30vw';
      height = '100vh';
      if (pushState === 'left') {
        let left = '0px';
        return { width, height, left };
      } else {
        let right = '0px';
        return { width, height, right };
      }
    }
  };

  function renderHeader() {
    console.log('wuwuwu');
    document.body.style.overflow = 'hidden';
    if (!title) {
      return null;
    }

    return (
      <>
        <div className="drawer_title">{title}</div>
        <div className="drawer_divide"></div>
      </>
    );
  }

  function renderChildren() {
    if (!children) {
      return null;
    }

    return <div className="drawer_children">{children}</div>;
  }
  return (
    <>
      {open && (
        <div className="totalMark" onClick={onClose}>
          <div className="mark" style={chooseStyle(pushState)}>
            {renderHeader()}
            {renderChildren()}
          </div>
        </div>
      )}
    </>
  );
};
Drawer.defaultProps = {};
export default Drawer;
