import React, {Component} from 'react';
import {history} from 'ice';
import {Button, Form, Input, Checkbox, message, Modal, Tabs} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import SmartCity from './component/SmartCity'
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';
const {TabPane} = Tabs;


export default class FeaturedScenarios extends Component {
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
      <div className={styles['featuredScenarios-content']}>
        <PageTitle title="特色场景管理"/>
        <div className={styles.main_content}>
          <Tabs defaultActiveKey={this.state.activedTabsKey} type="card" onChange={this.tabPaneChange}>
            <TabPane tab="智慧城市" key="1">
              <SmartCity></SmartCity>
            </TabPane>
            <TabPane tab="数字政府" key="2">
              Content of card tab 2
            </TabPane>
            <TabPane tab="工业互联网" key="3">
              Content of card tab 3
            </TabPane>
            <TabPane tab="医疗健康" key="4">
              Content of card tab 4
            </TabPane>
            <TabPane tab="生态环境" key="5">
              Content of card tab 4
            </TabPane>
            <TabPane tab="文化旅游" key="6">
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

