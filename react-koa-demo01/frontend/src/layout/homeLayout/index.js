import React from 'react';
import { Layout } from 'antd';
import { MyHeader, MyContent, MyFooter } from './components'

const HomeLayout = (props) => {
  return (
    <Layout>
      <MyHeader  />
      <MyContent {...props} />
      <MyFooter />
    </Layout>
  );
}

export default HomeLayout;
