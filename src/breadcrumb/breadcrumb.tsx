import React, { Fragment } from 'react';
// import Breadcrumb from '.';
import BreadcrumbItem from './breadcrumbitem';

// 路由
export interface Route {
  path: string; // 路径
  breadcrumbName: string; // 面包屑名字
  children?: React.ReactNode;
}

// 面包屑类型限制
export interface BreadcrumbProps {
  routes?: Route[]; // 多个route
  separator?: React.ReactNode;
  params?: any; // 路由的参数
  itemRender?: (
    route: Route,
    params: any,
    routes: Array<Route>,
    paths: Array<string>,
  ) => React.ReactNode; // 自定义链接函数
  children?: React.ReactNode;
}

export interface Option {
  keepEmpty?: boolean;
}

// 在面包屑上显示的是application,
// const breadcrumb: Record<string, string> = {
//     '/apps': 'application',
//     '/apps/1': 'appliction1',
//     '/apps/2': 'appliction2',
//     '/apps/3': 'appliction3',
//   };
const getBreadcrumbName = (route: Route, params: any) => {
  if (!route.breadcrumbName) {
    return null;
  }

  const paramsKeys = Object.keys(params).join('|'); // Object.keys返回一个由一个给定对象的自身可枚举属性组成的数组
  const name = route.breadcrumbName.replace(
    new RegExp(`:(${paramsKeys})`, 'g'),
    (replacement, key) => params[key] || replacement,
  );
  return name;
};

const defaultItemRender = (
  route: Route,
  params: any,
  routes: Array<Route>,
  path: Array<string>,
): React.ReactNode => {
  const isLastItem = routes.indexOf(route) === routes.length - 1;
  const name = getBreadcrumbName(route, params);
  return isLastItem ? (
    <span>{name}</span>
  ) : (
    <a href={`#/${path.join('/')}`}>{name}</a>
  );
};

const getPath = (path: string, params: any) => {
  let paths = (path || '').replace(/^\//, '');
  Object.keys(params).forEach((key) => {
    paths = path.replace(`:${key}`, params[key]);
  });
  return paths;
};

const addChildPath = (paths: string[], childPath: string, params: any) => {
  const originalPaths = [...paths];
  const path = getPath(childPath || '', params);
  if (path) {
    originalPaths.push(path);
  }
  return originalPaths;
};

const App: React.FC<BreadcrumbProps> & {
  Item: typeof BreadcrumbItem;
} = ({
  children,
  separator,
  params = {},
  itemRender = defaultItemRender, // 自定义链接函数， 和react-router配合使用
  routes,
  //   ...rest,
}) => {
  // const [isItem, setIsItem] = useState()
  let crumbs: React.ReactNode;
  if (routes && routes.length > 0) {
    const paths: string[] = [];
    crumbs = routes.map((route) => {
      const path = getPath(route.path, params);
      if (path) {
        paths.push(path);
      }

      if (Array.isArray(route.children) && route.children.length) {
        {
          const item = route.children.map((child) => ({
            key: child.path || child.breadcrumbName,
            label: itemRender(
              child,
              params,
              routes,
              addChildPath(paths, child.path, params),
            ),
          }));
          console.log(item); // 暂未修复， 只是为了提交
        }
      }
      return <div key={route.breadcrumbName}>{crumbs}</div>; // 暂未修复，暂时填入crumbs
    });
  }

  // if (Array.isArray(children)) {
  //   crumbs = children.map(() => {
  //     return (
  //       <>
  //         <div>hahah</div>
  //       </>
  //     );
  //   });
  // }

  const changeSeparator = (children: React.ReactNode) => {
    let newChild: React.ReactNode;
    // 为第一项和最后一项增添标识
    if (Array.isArray(children)) {
      let isItem: boolean = true;
      newChild = children.map((item, index) => {
        // 当出现的元素类型非breadcrumbItem
        if (
          item === null ||
          item === undefined ||
          item.type === undefined ||
          item.type._CHEESI_BREADCRUMB_ITEM === undefined
        ) {
          isItem = false;
          return null;
        }

        let newObj = { ...item.props };
        let obj = { ...item };
        obj.props = { ...newObj };
        if (index === 0 && item.type._CHEESI_BREADCRUMB_ITEM === true) {
          obj.props.count = 'first';
        } else if (index === children.length - 1) {
          obj.props.count = 'last';
        }
        return obj;
      });
      if (isItem !== true) {
        newChild = (
          <>
            <div>子元素只能使用BreadcrumbItem,请修改</div>
          </>
        );
      }
    }
    if (!separator) {
      return newChild;
    }

    let newChildren: React.ReactNode;
    if (Array.isArray(newChild)) {
      newChildren = newChild.map((item) => {
        if (item.props.separator) {
          return item;
        }
        // 不能直接赋值，要进行多次转换
        let newObj = { ...item.props };
        let obj = { ...item };
        newObj.separator = separator;
        obj.props = { ...newObj };
        return <Fragment key={item.props.children}>{obj}</Fragment>;
      });
      return newChildren;
    }
  };

  return (
    <>
      <div className="bread_flex">{changeSeparator(children)}</div>
    </>
  );
};
App.Item = BreadcrumbItem;
export default App;
