import classNames from 'classnames';
import { SubMenu as RcSubMenu, useFullPath } from 'rc-menu';
import * as React from 'react';
import { cloneElement, isValidElement } from 'react';
import type { MenuContextProps, MenuTheme } from './MenuContext';
import MenuContext from './MenuContext';

interface TitleEventEntity {
  key: string;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export interface SubMenuProps {
  className?: string;
  disabled?: boolean;
  level?: number;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  onTitleClick?: (e: TitleEventEntity) => void;
  onTitleMouseEnter?: (e: TitleEventEntity) => void;
  onTitleMouseLeave?: (e: TitleEventEntity) => void;
  popupOffset?: [number, number];
  popupClassName?: string;
  children?: React.ReactNode;
  theme?: MenuTheme;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { popupClassName, icon, title, theme: customTheme } = props;
  const context = React.useContext(MenuContext);
  const { prefixCls, inlineCollapsed, theme: contextTheme, mode } = context;

  const parentPath = useFullPath();

  let titleNode: React.ReactNode;

  if (!icon) {
    titleNode =
      inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? (
        <div className={`${prefixCls}-inline-collapsed-noicon`}>{title.charAt(0)}</div>
      ) : (
        <span className={`${prefixCls}-title-content`}>{title}</span>
      );
  } else {
    const titleIsSpan = isValidElement(title) && title.type === 'span';
    titleNode = (
      <>
        {cloneElement(icon as React.ReactElement, {
          className: classNames(
            isValidElement(icon) ? icon.props?.className : '',
            `${prefixCls}-item-icon`,
          ),
        })}
        {titleIsSpan ? title : <span className={`${prefixCls}-title-content`}>{title}</span>}
      </>
    );
  }

  const contextValue = React.useMemo<MenuContextProps>(
    () => ({ ...context, firstLevel: false }),
    [context],
  );

  const popupOffset = mode === 'horizontal' ? [0, 8] : [10, 0];

  return (
    <MenuContext.Provider value={contextValue}>
      <RcSubMenu
        popupOffset={popupOffset}
        {...props}
        title={titleNode}
        popupClassName={classNames(
          prefixCls,
          popupClassName,
          `${prefixCls}-${customTheme || contextTheme}`,
        )}
      />
    </MenuContext.Provider>
  );
};

export default SubMenu;
