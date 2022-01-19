import React, {Component} from 'react';
import {history} from 'ice';
import {Button, Form, Input, Checkbox, message, Modal, Tabs} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import EnterpriseApplication from './component/EnterpriseApplication'
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';
const {TabPane} = Tabs;


export default class SpecialScenarios extends Component {
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
      <div className={styles['specialScenarios-content']}>
        <PageTitle title="专属场景管理"/>
        <div className={styles.main_content}>
          <Tabs defaultActiveKey={this.state.activedTabsKey} type="card" onChange={this.tabPaneChange}>
            <TabPane tab="企业应用" key="1">
              <EnterpriseApplication></EnterpriseApplication>
            </TabPane>
            <TabPane tab="数字政府" key="2">
              Content of card tab 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }

  componentDidMount() {

  }

}

