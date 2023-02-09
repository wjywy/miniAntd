import React from 'react';
import { Content,Footer,Header,Layout,Sider } from 'cheesi';

export default () => {
  const headerFooterStyle = {
    background: '#7dbcea',
    height: '64px',
    color: 'white',
    textAlign: 'center',
    lineHeight: '64px',
  };
  const contentStyle = {
    background: '#108ee9',
    height: '120px',
    color: 'white',
    textAlign: 'center',
    lineHeight: '120px',
  };
  const siderStyle = {
    background: '#3ba0e9',
    width: '120px',
    color: 'white',
    textAlign: 'center',
    lineHeight: '120px',
  };

  return (
    <>
      <Layout>
        <Header style={headerFooterStyle}>header</Header>
        <Content style={contentStyle}>content</Content>
        <Footer style={headerFooterStyle}>footer</Footer>
      </Layout>
      <br />
      <Layout>
        <Header style={headerFooterStyle}>header</Header>
        <Layout>
          <Sider style={siderStyle}>sider</Sider>
          <Content style={contentStyle}>content</Content>
        </Layout>
        <Footer style={headerFooterStyle}>footer</Footer>
      </Layout>
      <br />
      <Layout>
        <Header style={headerFooterStyle}>header</Header>
        <Layout>
          <Content style={contentStyle}>content</Content>
          <Sider style={siderStyle}>sider</Sider>
        </Layout>
        <Footer style={headerFooterStyle}>footer</Footer>
      </Layout>
      <br />
      <Layout>
        <Sider style={siderStyle}>sider</Sider>
        <Layout>
          <Header style={headerFooterStyle}>header</Header>
          <Content style={contentStyle}>content</Content>
          <Footer style={headerFooterStyle}>footer</Footer>
        </Layout>
      </Layout>
      <br />
      <span>实例</span>
      <Layout>
        <Header style={headerFooterStyle}>
          <ul className='layout-test'>
            <li>nav1</li>
            <li>nav2</li>
            <li>nav3</li>
            <li>nav4</li>
            <li>nav5</li>
          </ul>
        </Header>
        <Content style={contentStyle}>content</Content>
        <Footer style={headerFooterStyle}>footer</Footer>
      </Layout>
    </>
  );
}

