import React, { FC } from 'react';
interface BaseLayoutProps {
  children?: React.ReactNode;
  style?: any; //todo react中css样式对象定义
}

export type LayoutProps = Partial<BaseLayoutProps>;

//部分,都有公共的定义BaseLayoutProps,里面可能会有各种子组件;同时利用解构赋值,把其余属性赋予
const Header: FC<BaseLayoutProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
const Content: FC<BaseLayoutProps> = ({ children, ...props }) => {
  return (
    <div className="content" {...props}>
      {children}
    </div>
  );
};
const Sider: FC<BaseLayoutProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
const Footer: FC<BaseLayoutProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
//主体
const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  // debugger;
  // console.log(children);
  // let contents:any[]=children
  if (children !== undefined && children !== null&&children instanceof Array) {
    for (let i = 0; i < children.length; i++) {
      if ((children[i] as any).type.name === 'Sider') {
        //有侧边栏，则flex主轴方向水平
        return (
          <div className="Layout-row" {...props}>
            {children}
          </div>
        );
      }
    }
  }

  return (
    <div className="Layout-column" {...props}>
      {children}
    </div>
  ); //没有则竖直
};

Layout.defaultProps = {
  children: [],
};

export { Layout, Header, Sider, Content, Footer };
