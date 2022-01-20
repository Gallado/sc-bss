
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal, Table} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';



export default class BookKeeping extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  account_columns = [
    {
      title: '账单日期',
      dataIndex: 'accountTime',
      render: text => <a>{text}</a>,
    },
    {
      title: '租户账号',
      dataIndex: 'tenantAccount',
    },
    {
      title: '租户名称',
      dataIndex: 'tenantName',
    },
    {
      title: '金额',
      dataIndex: 'money',
    },
    {
      title: '账单详情',
      dataIndex: 'detail',
      render: (text, record) => (
        <div>
          <a
            style={{color: "#6B80DF",marginRight:'10px'}}
            onClick={this.detail.bind(this, record)}>详情</a>
        </div>
      ),
    },
  ];

  tableData = [
    {
      accountTime: '2021-01',
      tenantAccount: '123qwe',
      tenantName: '某集团',
      money:'￥264.41',
    },
    {
      accountTime: '2021-02',
      tenantAccount: '123qwe',
      tenantName: '某集团',
      money:'￥264.41',
    },
    {
      accountTime: '2021-03',
      tenantAccount: '123qwe',
      tenantName: '某集团',
      money:'￥264.41',
    },
  ];

  detail = ()=>{

  };


  render() {
    return (
      <div className={styles['bookKeeping-content']}>
        <PageTitle title="账单"/>
        <div></div>
        <Table
          columns={this.account_columns}
          dataSource={this.tableData}
          bordered
        />
      </div>
    );
  }

  componentDidMount() {

  }
}

