import classNames from 'classnames';
import type { MenuItemProps as RcMenuItemProps } from 'rc-menu';
import { Item } from 'rc-menu';
import toArray from 'rc-util/lib/Children/toArray';
import * as React from 'react';
import { cloneElement, isValidElement } from 'react';
import omit from '../utils/omit';
import type { MenuContextProps } from './MenuContext';
import MenuContext from './MenuContext';

export interface MenuItemProps extends Omit<RcMenuItemProps, 'title'> {
  icon?: React.ReactNode;
  danger?: boolean;
  title?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, children, icon, title, danger } = props;
  const {
    prefixCls,
    firstLevel,
    inlineCollapsed: isInlineCollapsed,
  } = React.useContext<MenuContextProps>(MenuContext);
  const renderItemChildren = (inlineCollapsed: boolean) => {
    const wrapNode = (
      <span className={`${prefixCls}-title-content`}>{children}</span>
    );
    if (!icon || (isValidElement(children) && children.type === 'span')) {
      if (
        children &&
        inlineCollapsed &&
        firstLevel &&
        typeof children === 'string'
      ) {
        return (
          <div className={`${prefixCls}-inline-collapsed-noicon`}>
            {children.charAt(0)}
          </div>
        );
      }
    }
    return wrapNode;
  };

  const childrenLength = toArray(children).length;

  let returnNode = (
    <>
      <Item
        {...omit(props, ['title', 'icon', 'danger'])}
        className={classNames(
          {
            [`${prefixCls}-item-danger`]: danger,
            [`${prefixCls}-item-only-child`]:
              (icon ? childrenLength + 1 : childrenLength) === 1,
          },
          className,
        )}
        title={typeof title === 'string' ? title : undefined}
      >
        <>
          {icon
            ? cloneElement(icon as React.ReactElement, {
                className: classNames(
                  isValidElement(icon) ? icon.props?.className : '',
                  `${prefixCls}-item-icon`,
                ),
              })
            : icon}
          {renderItemChildren(isInlineCollapsed)}
        </>
      </Item>
    </>
  );

  return returnNode;
};

export default MenuItem;
