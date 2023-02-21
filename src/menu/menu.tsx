import classNames from 'classnames';
import type { MenuProps as RcMenuProps, MenuRef as RcMenuRef } from 'rc-menu';
import RcMenu from 'rc-menu';
import * as React from 'react';
import { cloneElement, forwardRef } from 'react';
import type { ItemType } from './hooks/useItems';
import useItems from './hooks/useItems';
import type { MenuContextProps, MenuTheme } from './MenuContext';
import MenuContext from './MenuContext';

export interface MenuProps extends Omit<RcMenuProps, 'items'> {
  theme?: MenuTheme;
  inlineIndent?: number;
  items?: ItemType[];
}

type InternalMenuProps = MenuProps & {
  siderCollapsed?: boolean;
  collapsedWidth?: string | number;
};

const InternalMenu = forwardRef<RcMenuRef, InternalMenuProps>((props, ref) => {
  const {
    className,
    theme = 'light',
    expandIcon,
    inlineCollapsed,
    siderCollapsed,
    items,
    children,
    rootClassName,
    mode,
    selectable,
    onClick,
    ...restProps
  } = props;

  const passedProps = restProps;

  const mergedChildren = useItems(items) || children;

  const mergedMode = mode;

  const mergedSelectable = selectable;

  const mergedInlineCollapsed = React.useMemo(() => {
    if (siderCollapsed !== undefined) {
      return siderCollapsed;
    }
    return inlineCollapsed;
  }, [inlineCollapsed, siderCollapsed]);

  const prefixCls = 'cheesi-menu';
  const menuClassName = classNames(`${prefixCls}-${theme}`, className);

  let mergedExpandIcon: MenuProps[`expandIcon`];
  if (typeof expandIcon === 'function' || !expandIcon) {
    mergedExpandIcon = expandIcon;
  } else {
    const beClone: any = expandIcon;
    mergedExpandIcon = cloneElement(beClone, {
      className: classNames(
        `${prefixCls}-submenu-expand-icon`,
        beClone?.props?.className,
      ),
    });
  }

  const contextValue = React.useMemo<MenuContextProps>(
    () => ({
      prefixCls,
      inlineCollapsed: mergedInlineCollapsed || false,
      firstLevel: true,
      theme,
      mode: mergedMode,
    }),
    [prefixCls, mergedInlineCollapsed, theme],
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <RcMenu
        overflowedIndicatorPopupClassName={`${prefixCls}-${theme}`}
        mode={mergedMode}
        selectable={mergedSelectable}
        onClick={onClick}
        {...passedProps}
        inlineCollapsed={mergedInlineCollapsed}
        className={menuClassName}
        prefixCls={prefixCls}
        direction="ltr"
        expandIcon={mergedExpandIcon}
        ref={ref}
        rootClassName={rootClassName}
      >
        <>{mergedChildren}</>
      </RcMenu>
    </MenuContext.Provider>
  );
});

export default InternalMenu;
