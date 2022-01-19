
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal,Radio,Tabs} from 'antd';
import { UserOutlined, LockOutlined,LeftOutlined } from '@ant-design/icons';
import PageTitle from '@/components/PageTitle';
import BaseInfo from './BaseInfo'
import styles from '../../index.module.scss'

const {TabPane} = Tabs;

export default class ApplicationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition:'baseInfo'
    }
  }

  changeTabPosition = (e)=>{
    this.setState({ tabPosition: e });
  }

  goBack = ()=>{
    this.props.history.push({
      pathname: '/computer',
    })
  }

  render() {
    const params = this.props.location.state.params; //参数
    const { tabPosition } = this.state;
    return (
      <div className={styles.detailInfo}>
        <div className={styles.detail_title}>
          <LeftOutlined onClick={this.goBack} className={styles.backBtn}/>{params.appicationName}应用详情
        </div>
        <div className={styles.detail_content}>
          {/*<Radio.Group value={tabPosition} onChange={this.changeTabPosition}>
            <Radio.Button value="baseInfo">基本信息</Radio.Button>
            <Radio.Button value="question">常见问题</Radio.Button>
            <Radio.Button value="appUpload">应用上传</Radio.Button>
            <Radio.Button value="productProtocol">产品协议</Radio.Button>
            <Radio.Button value="accountingStrategy">计费策略</Radio.Button>
            <Radio.Button value="logTab">日志</Radio.Button>
          </Radio.Group>*/}


          <Tabs activeKey={tabPosition} onChange={this.changeTabPosition} className={styles.tabs_content}>
            <TabPane tab="基本信息" key="baseInfo">
              <BaseInfo curLine={params}></BaseInfo>
            </TabPane>
            <TabPane tab="常见问题" key="question">
              Content of Tab 2
            </TabPane>
            <TabPane tab="应用上传" key="appUpload">
              Content of Tab 3
            </TabPane>
            <TabPane tab="产品协议" key="productProtocol">
              Content of Tab 4
            </TabPane>
            <TabPane tab="计费策略" key="logTab">
              Content of Tab 5
            </TabPane>
          </Tabs>
        </div>

      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.status)
  }
}

