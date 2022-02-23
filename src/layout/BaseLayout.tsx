import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Routes from "../router";
const { Header } = Layout;
// console.log(Layout,'sss')

class BaseLayout extends React.Component<object, object> {
  render() {
    return (
      <div>
        <Layout>
          <Layout.Header className="main-header">
            <Header />
          </Layout.Header>
          <Layout className="main-content">
            {/* <Navside /> */}
            <Layout.Content>
              <Routes />
            </Layout.Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BaseLayout;
