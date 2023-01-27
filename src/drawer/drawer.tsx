import React from 'react';
interface DrawerProps {
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  open: boolean;
  pushState: Placement;
}
export type Placement = 'left' | 'right';
const Drawer = (props: DrawerProps) => {
  const { onClose, open, pushState } = props;
  return (
    <>
      {open && (
        <div className="totalMark" onClick={onClose}>
          <div
            className="mark"
            style={pushState === 'left' ? { left: 0 } : { right: 0 }}
          ></div>
        </div>
      )}
    </>
  );
};
export default Drawer;
