
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal,Tabs} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import OrderOverview from './component/OrderOverview';
import AccountOverview from './component/AccountOverview';
import styles from './index.module.scss';

const {TabPane} = Tabs;


export default class FreeSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curActivityKey:1
    }
  }
  componentDidMount() {
  }

  tabsChange = (key)=>{
    this.setState({
      curActivityKey:key
    })
  }

  render() {
    return (
      <div className={styles['freeSummary-content']}>
        <Tabs defaultActiveKey="1" onChange={this.tabsChange} className={styles.freeSummary_tabs_content}>
          <TabPane tab="订单总览" key="1">
            {this.state.curActivityKey == '1' ?
              <OrderOverview onRef={this.onRef.bind(this)}></OrderOverview>:<div></div>}
          </TabPane>
          <TabPane tab="账单总览" key="2">
            {this.state.curActivityKey == '2' ?
            <AccountOverview onRef={this.onRef.bind(this)}></AccountOverview>:<div></div>}
          </TabPane>
        </Tabs>
      </div>
    );
  }

  onRef(name, ref) {
    switch (name) {
      case 'OrderOverview':
        this.OrderOverview = ref;
        break;
      case 'AccountOverview':
        this.AccountOverview = ref;
        break;
      default:
        break
    }
  }

}

