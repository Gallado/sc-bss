
import React, {Component} from 'react';
import {Button, Form, Input, Checkbox, message, Modal,Table} from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import styles from '../../index.module.scss';
import style from '@/pages/ProductManage/index.module.scss'


export default class Equipment extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  equipment_columns = [
    {
      title: '设施名称',
      dataIndex: 'equitmentName',
      render: text => <a>{text}</a>,
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
      equitmentName: 'IDC',
      serviceOragen: '联通云',
      publishPlatform: '上海市场景云',
      status:'已上架',
      changeTime:'2022-01-01 00:00:00'
    },
    {
      equitmentName: '云联网',
      serviceOragen: '联通云',
      publishPlatform: '上海市场景云',
      status:'已上架',
      changeTime:'2022-01-01 00:00:00'
    },
    {
      equitmentName: '省内专线',
      serviceOragen: '联通云',
      publishPlatform: '上海市场景云',
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
          <Button onClick={this.batchPutOn} className={style.operBtn}>上架</Button>
          <Button onClick={this.batchPutOff} className={style.operBtn}>下架</Button>
        </div>
        <Table
          columns={this.equipment_columns}
          dataSource={this.tableData}
          bordered
        />
      </div>
    );
  }

  componentDidMount() {
  }

}

