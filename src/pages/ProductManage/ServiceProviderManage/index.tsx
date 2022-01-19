
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal, Table, Tooltip} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AddServiceProvider from './component/AddServiceProvider'
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';



export default class ServiceProviderManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      selectedRows:[]
    }
  }

  service_provider_columns = [
    {
      title: '服务商名称',
      dataIndex: 'serviceName',
      render: (text,row) => {
        return (
          <Tooltip title={row.serviceName}>
            <a onClick={ () => this.goDetail(text,row) }>
              <p>{row.serviceName}</p>
            </a>
          </Tooltip>
        )
      },
    },
    {
      title: '服务商账号',
      dataIndex: 'serviceAccount',
    },
    {
      title: '联系人姓名',
      dataIndex: 'username',
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '发布应用数量',
      dataIndex: 'appNum',
    },
    {
      title: '收入（万元）',
      dataIndex: 'income',
    },
    {
      title: '合作时长',
      dataIndex: 'cooperateTime',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => (
        <div>
          <a
            style={{color: "#6B80DF",marginRight:'10px'}}
            onClick={this.edit.bind(this, record)}>修改</a>
          <a
            style={{color: "#6B80DF"}}
            onClick={this.callOff.bind(this, record)}>停用</a>
          <a
            style={{color: "#6B80DF"}}
            onClick={this.quotaManage.bind(this, record)}>配额管理</a>
        </div>
      ),
    },
  ];

  tableData = [{
    serviceName:'XXX公司',
    serviceAccount:'10010',
    username:'测试',
    phone:'16678985678',
    email:'changjy@163.com',
    appNum:'100',
    income:'1000',
    cooperateTime:'100天',
    status:'启用',
  },{
    serviceName:'XXX公司',
    serviceAccount:'10010',
    username:'测试',
    phone:'16678985678',
    email:'changjy@163.com',
    appNum:'100',
    income:'1000',
    cooperateTime:'100天',
    status:'启用',
  },{
    serviceName:'XXX公司',
    serviceAccount:'10010',
    username:'测试',
    phone:'16678985678',
    email:'changjy@163.com',
    appNum:'100',
    income:'1000',
    cooperateTime:'100天',
    status:'启用',
  },{
    serviceName:'XXX公司',
    serviceAccount:'10010',
    username:'测试',
    phone:'16678985678',
    email:'changjy@163.com',
    appNum:'100',
    income:'1000',
    cooperateTime:'100天',
    status:'启用',
  },{
    serviceName:'XXX公司',
    serviceAccount:'10010',
    username:'测试',
    phone:'16678985678',
    email:'changjy@163.com',
    appNum:'100',
    income:'1000',
    cooperateTime:'100天',
    status:'启用',
  }];

  edit = ()=>{

  };

  callOff = ()=>{

  };

  quotaManage = ()=>{

  };

  goDetail = ()=>{

  };


  onSelectChange = (selectedRowKeys,selectedRows)=> {
    console.log('selectedRowKeys changed: ', selectedRowKeys,selectedRows);
    this.setState({ selectedRowKeys });
  };

  addServiceProviderAccount = ()=>{
    console.log('测试')
    Modal.info({
      title: (<span className="modalTitle">新增服务商账号</span>),
      centered: true,
      closable: true,
      width: 500,
      icon: '',
      className: "addForm",
      content: <AddServiceProvider cancelFn={this.cancelFn}
                                  submitFn={this.submitFn}></AddServiceProvider>,
    })
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className={styles['serviceProviderManage-content']}>
        <PageTitle title="特色场景管理"/>
        <div>
          <Button className={styles.operBtn} onClick={this.addServiceProviderAccount}>新增服务商账号</Button>
          <Table
            rowSelection={rowSelection}
            columns={this.service_provider_columns}
            dataSource={this.tableData}
            scroll={{ y: 700 }}
            bordered
          />
        </div>
      </div>
    );
  }

  componentDidMount(){

  }
}

