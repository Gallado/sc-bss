
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input,Select, Tabs, message, Modal} from 'antd';
const { TabPane } = Tabs;
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';
import AllOrder from './Tabs/AllOrder';



export default class ProductReleaseOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activedTabsKey:'all'
    }
  }
  componentDidMount() {
  }
  tabPaneChange = (key) =>{
    console.log('当前tabs为：'+key);

  };



  render() {
    return (
      <div className={styles['productReleaseOrder-content']}>
        <PageTitle title="产品发布工单" />

        <Tabs defaultActiveKey={this.state.activedTabsKey} type="card" onChange={this.tabPaneChange}>
          <TabPane tab="全部工单" key="all">
            <AllOrder></AllOrder>
          </TabPane>
          <TabPane tab="待处理工单" key="unDo">
            Content of card tab 2
          </TabPane>
          <TabPane tab="已完成工单" key="done">
            Content of card tab 3
          </TabPane>
        </Tabs>


      </div>
    );
  }
}

