import React from 'react';

import { Layout as AntdLayout, LayoutProps } from 'antd';
import { DefaultFooter } from './footer';
import { DefaultHeader } from './header';

const { Header, Footer, Sider, Content } = AntdLayout;

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <AntdLayout className="layout">
        <Header className="layout-header">
          <DefaultHeader />
        </Header>
        <Content className="layout-content">{children}</Content>
        <Footer className="layout-footer">
          <DefaultFooter />
        </Footer>
      </AntdLayout>
    </React.Fragment>
  );
};

export { Layout };
