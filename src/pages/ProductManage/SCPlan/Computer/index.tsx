import React, {Component} from 'react';
import {history} from 'ice';
import {Button, Form, Input, Checkbox, message, Modal, Tabs} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';
import DistributionCloud from './component/DistributionCloud'

const {TabPane} = Tabs;


export default class Computer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activedTabsKey: 1
    }
  }

  tabPaneChange = (key) => {
    this.setState({
      activedTabsKey: key
    })
  };

  render() {
    return (
      <div className={styles['compute-content']}>
        <PageTitle title="臻选场景管理/大计算"/>
        <div className={styles.main_content}>
          <Tabs defaultActiveKey={this.state.activedTabsKey} type="card" onChange={this.tabPaneChange}>
            <TabPane tab="分布式云" key="1">
              <DistributionCloud></DistributionCloud>
            </TabPane>
            <TabPane tab="混合云" key="2">
              Content of card tab 2
            </TabPane>
            <TabPane tab="自主可控云" key="3">
              Content of card tab 3
            </TabPane>
            <TabPane tab="绿色低碳云" key="4">
              Content of card tab 4
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }

  componentDidMount() {

  }

}

