import { createContext } from 'react';
import type { MenuProps } from 'rc-menu';

export type MenuTheme = 'light' | 'dark';

type DirectionType = 'ltr' | 'rtl' | undefined;

export interface MenuContextProps {
  prefixCls: string;
  inlineCollapsed: boolean;
  direction?: DirectionType;
  mode?: MenuProps['mode'];
  theme?: MenuTheme;
  firstLevel: boolean;
}

const MenuContext = createContext<MenuContextProps>({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false,
});

export default MenuContext;
