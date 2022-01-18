
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal,Table} from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import styles from '../../index.module.scss';



export default class Platform extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  platform_columns = [
    {
      title: '平台名称',
      dataIndex: 'platformName',
      render: text => <a>{text}</a>,
    },
    {
      title: '平台ID',
      dataIndex: 'platformId',
    },
    {
      title: '服务商',
      dataIndex: 'serviceOragen',
    },
    {
      title: '发布平台',
      dataIndex: 'publishPlatform',
    },
    {
      title: '平台描述',
      dataIndex: 'desc',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '变更时间',
      dataIndex: 'changeTime',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => (
        <div>
          <a
            style={{color: "#6B80DF",marginRight:'10px'}}
            onClick={this.putOn.bind(this, record)}>编辑</a>
          <a
            style={{color: "#6B80DF",marginRight:'10px'}}
            onClick={this.putOn.bind(this, record)}>上架</a>
          <a
            style={{color: "#6B80DF"}}
            onClick={this.putOff.bind(this, record)}>下架</a>
        </div>
      ),
    },
  ];

  tableData = [
    {
      platformName: '服务概览',
      platformId: '1001',
      serviceOragen: '联通云',
      publishPlatform: '上海市场景云',
      desc:'智慧城市',
      status:'已上架',
      changeTime:'2022-01-01 00:00:00'
    },
    {
      platformName: '服务编排',
      platformId: '1002',
      serviceOragen: '联通云',
      publishPlatform: '上海市场景云',
      desc:'智慧城市',
      status:'已上架',
      changeTime:'2022-01-01 00:00:00'
    },
    {
      platformName: '应用分发',
      platformId: '1003',
      serviceOragen: '联通云',
      publishPlatform: '上海市场景云',
      desc:'智慧城市',
      status:'已上架',
      changeTime:'2022-01-01 00:00:00'
    },
  ];

  putOn = ()=>{

  }

  putOff = ()=>{

  }

  batchPutOn = ()=>{

  }

  batchPutOff = ()=>{

  }

  refresh = ()=>{

  }

  render() {
    return (
      <div className={styles['applicaton-content']}>
        <div className={styles.fun_btn}>
          <Button onClick={this.refresh}><SyncOutlined /></Button>
          <Button onClick={this.batchPutOn}>上架</Button>
          <Button onClick={this.batchPutOff}>下架</Button>
        </div>
        <Table
          columns={this.platform_columns}
          dataSource={this.tableData}
          bordered
        />
      </div>
    );
  }

  componentDidMount() {
  }

}

