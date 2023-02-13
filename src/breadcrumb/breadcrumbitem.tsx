import classNames from 'classnames';
import React, { Fragment } from 'react';

export interface BreadcrumbItemProps {
  href?: string; // 添加链接
  separator?: React.ReactNode; // 自定义分隔符
  children?: React.ReactNode;
  menu?: React.ReactNode; // 下拉菜单
  count?: string; // 判断是第一项还是最后一项的标志
}

// 为什么antd这里将href放在剩余参数中?
const BreadcrumbItem: React.FC<BreadcrumbItemProps> & {
  _CHEESI_BREADCRUMB_ITEM: boolean;
} = (props) => {
  const { separator = '/', children, href, menu, count } = props;

  const [hover, setHover] = React.useState(false);

  const classes = classNames('bread_drop', {
    bread_menu_none: !hover,
    bread_menu_display: hover, // 放置隐藏和消失的问题
  });

  // 给面包屑的第一项独特样式
  const firstClasses = classNames({
    bread_name_nohover: count === 'first',
    bread_name: count !== 'first',
  });

  //   下拉菜单
  const dropMenu = (menu: React.ReactNode) => {
    if (Array.isArray(menu)) {
      menu.sort((a, b) => {
        return a.key - b.key;
      }); // 按照key值排序

      const drop = (
        <div
          className={classes}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {menu.map((item, index) => {
            return (
              <Fragment key={`${item.key}${index}`}>
                <div className="bread_drop_item">{item.label}</div>
              </Fragment>
            );
          })}
        </div>
      );
      return drop;
    }
    return null;
  };

  const renderBreadcrumbNode = (breadcrumbItem: React.ReactNode) => {
    if (menu) {
      return dropMenu(breadcrumbItem);
    }
    return breadcrumbItem;
  };

  //   带href跳转的面包屑
  let link: React.ReactNode;
  if (href) {
    link = (
      <a href={href} className={firstClasses}>
        {children}
      </a>
    );
  } else {
    link = <span className={firstClasses}>{children}</span>;
  }

  if (children !== undefined && children !== null) {
    return (
      <>
        <div>
          <span
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {link}
          </span>
          {separator && count !== 'last' && (
            <>
              <span className="bread_sep">{separator}</span>
            </>
          )}
          {renderBreadcrumbNode(menu)}
        </div>
      </>
    );
  }
  return null;
};

// 判断子元素是否为breadcrumbItem的标识
BreadcrumbItem._CHEESI_BREADCRUMB_ITEM = true;

export default BreadcrumbItem;
