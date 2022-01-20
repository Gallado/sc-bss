
import React, {Component} from 'react';
import { history } from 'ice';
import {Button,Table,Tooltip} from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import styles from '../../index.module.scss';
import style from "@/pages/ProductManage/index.module.scss";



export default class SmartCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      selectedRows:[]
    }
  }

  //查看详情页面
  goDetail = (text,record) =>{
    history.push({
      pathname: '/applicationDetail',
      state: {
        params: record
      }
    })
  };

  application_columns = [
    {
      title: '应用名称',
      dataIndex: 'appicationName',
      render: (text,row) => {
        return (
          <Tooltip title={row.appicationName}>
            <a onClick={ () => this.goDetail(text,row) }>
              <p>{row.appicationName}</p>
            </a>
          </Tooltip>
        )
      },
    },
    {
      title: '应用ID',
      dataIndex: 'appicationId',
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
      title: '所属场景',
      dataIndex: 'ownScenarios',
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
      key: 1,
      appicationName: '云监控',
      appicationId: '1001',
      serviceOragen: '联通云',
      publishPlatform: '上海市场景云',
      ownScenarios:'混合云',
      status:'已上架',
      changeTime:'2022-01-01 00:00:00'
    },
    {
      key: 2,
      appicationName: '智慧应急应用平台',
      appicationId: '1000',
      serviceOragen: '联通云',
      publishPlatform: '上海市场景云',
      ownScenarios:'智能视频云',
      status:'已上架',
      changeTime:'2022-01-01 00:00:00'
    },
    {
      key: 3,
      appicationName: '联通数字乡村',
      appicationId: '1003',
      serviceOragen: '联通云',
      publishPlatform: '上海工业互联网',
      ownScenarios:'自主可控云',
      status:'已下架',
      changeTime:'2022-01-01 00:00:00',
    },
    {
      key: 4,
      appicationName: '智慧消防可视化大屏',
      appicationId: '1004',
      serviceOragen: '联通云',
      publishPlatform: '上海工业互联网',
      ownScenarios:'自主可控云',
      status:'已下架',
      changeTime:'2022-01-01 00:00:00',
    },
    {
      key: 5,
      appicationName: '智慧消防可视化大屏',
      appicationId: '1005',
      serviceOragen: '联通云',
      publishPlatform: '上海工业互联网',
      ownScenarios:'自主可控云',
      status:'已下架',
      changeTime:'2022-01-01 00:00:00',
    },
    {
      key: 6,
      appicationName: '智慧消防可视化大屏',
      appicationId: '1006',
      serviceOragen: '联通云',
      publishPlatform: '上海工业互联网',
      ownScenarios:'自主可控云',
      status:'已下架',
      changeTime:'2022-01-01 00:00:00',
    },
    {
      key: 7,
      appicationName: '智慧消防可视化大屏',
      appicationId: '1007',
      serviceOragen: '联通云',
      publishPlatform: '上海工业互联网',
      ownScenarios:'自主可控云',
      status:'已下架',
      changeTime:'2022-01-01 00:00:00',
    },{
      key: 8,
      appicationName: '智慧消防可视化大屏',
      appicationId: '1008',
      serviceOragen: '联通云',
      publishPlatform: '上海工业互联网',
      ownScenarios:'自主可控云',
      status:'已下架',
      changeTime:'2022-01-01 00:00:00',
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

  onSelectChange = (selectedRowKeys,selectedRows)=> {
    console.log('selectedRowKeys changed: ', selectedRowKeys,selectedRows);
    this.setState({ selectedRowKeys });
  };


  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div className={styles['smartCity-content']}>
        <div className={styles.fun_btn}>
          <Button onClick={this.refresh}><SyncOutlined /></Button>
          <Button onClick={this.batchPutOn} className={style.operBtn}>上架</Button>
          <Button onClick={this.batchPutOff} className={style.operBtn}>下架</Button>
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={this.application_columns}
            dataSource={this.tableData}
            scroll={{ y: 240 }}
            bordered
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
  }

}

