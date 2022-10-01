import React from 'react';
import { Layout, Nav } from '@douyinfe/semi-ui';
import {
  IconHistogram,
  IconHome,
  IconLive,
  IconSetting,
} from '@douyinfe/semi-icons';
import './App.scss';

export default () => {
  const { Sider, Content } = Layout;
  return (
    <Layout className="layout">
      <Layout>
        <Sider className="sider">
          <Nav
            className="nav"
            defaultSelectedKeys={['Home']}
            items={[
              {
                itemKey: 'Home',
                text: '首页',
                icon: <IconHome size="large" />,
              },
              {
                itemKey: 'Histogram',
                text: '基础数据',
                icon: <IconHistogram size="large" />,
              },
              {
                itemKey: 'Live',
                text: '测试功能',
                icon: <IconLive size="large" />,
              },
              {
                itemKey: 'Setting',
                text: '设置',
                icon: <IconSetting size="large" />,
              },
            ]}
            footer={{ collapseButton: true }}
          />
        </Sider>
        <Content className="content">
          <div className="wrapper"></div>
        </Content>
      </Layout>
    </Layout>
  );
};
