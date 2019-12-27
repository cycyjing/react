import React from "react";
import { Layout } from "antd";
import MyContent from "./components/content";
import MyFooter from "./components/footer";

const UserLayout = props => {
  return (
    <Layout>
      <MyContent {...props} />
      <MyFooter />
    </Layout>
  );
};
export default UserLayout;
