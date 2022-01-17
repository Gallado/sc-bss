
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, Tabs,message, Modal} from 'antd';
const { TabPane } = Tabs;
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

import PageTitle from '@/components/PageTitle';
import AllMessage from "@/pages/MessageManage/InnerMessage/modal/AllMessage";



export default class InnerMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activedTabsKey:'all',
    }
  }
  componentDidMount() {
  }

  tabPaneChange = (key) =>{
    console.log('当前tabs为：'+key);
  }



  render() {
    return (
      <div className={styles['innerMessage-content']}>
        <PageTitle title="站内消息" />

        <Tabs defaultActiveKey={this.state.activedTabsKey} type="card" onChange={this.tabPaneChange}>
          <TabPane tab="全部消息" key="all">
            <AllMessage></AllMessage>
          </TabPane>
          <TabPane tab="站内信" key="message">
            Content of card tab 2
          </TabPane>
          <TabPane tab="新闻" key="news">
            Content of card tab 3
          </TabPane>
          <TabPane tab="广告" key="adv">
            Content of card tab 4
          </TabPane>
        </Tabs>


      </div>
    );
  }
}

