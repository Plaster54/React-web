import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

function LayoutAdmin(props) {
  const { Content, Header } = Layout;
  const { routes } = props;
  return (
    <Layout>
      <h1>LayoutAdmin</h1>
      <Header>header</Header>
      <Content>
        <LoadRoutes routes={routes} />
      </Content>
    </Layout>
  );
}
export default LayoutAdmin;

function LoadRoutes({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
