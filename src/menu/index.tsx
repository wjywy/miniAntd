import type { MenuRef as RcMenuRef } from 'rc-menu';
import { ItemGroup } from 'rc-menu';
import * as React from 'react';
import { forwardRef, useRef } from 'react';
import type { MenuProps } from './menu';
import InternalMenu from './menu';
import type { MenuTheme } from './MenuContext';
import Item, { type MenuItemProps } from './MenuItem';
import SubMenu, { type SubMenuProps } from './SubMenu';

export type { MenuItemGroupProps } from 'rc-menu';
export type { MenuTheme, SubMenuProps, MenuItemProps, MenuProps };

export type MenuRef = {
  menu: RcMenuRef | null;
  focus: (options?: FocusOptions) => void;
};

type CompoundedComponent = React.ForwardRefExoticComponent<
  MenuProps & React.RefAttributes<MenuRef>
> & {
  Item: typeof Item;
  SubMenu: typeof SubMenu;
  ItemGroup: typeof ItemGroup;
};

const Menu = forwardRef<MenuRef, MenuProps>((props) => {
  const menuRef = useRef<RcMenuRef>(null);
  return <InternalMenu ref={menuRef} {...props} />;
}) as CompoundedComponent;

Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;

if (process.env.NODE_ENV !== 'production') {
  Menu.displayName = 'Menu';
}

export default Menu;
