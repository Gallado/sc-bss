
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Table, DatePicker,Tabs} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';
import style from "../index.module.scss";

const {RangePicker} = DatePicker;
const {TabPane} = Tabs;

export default class BookKeeping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curActiveKey:"1"
    }
  }

  account_overview_columns = [
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

  account_detail_columns = [
    {
      title: '账单日期',
      dataIndex: 'accountTime',
      render: text => <a>{text}</a>,
    },{
      title: '订单号',
      dataIndex: 'orderNum',
    },
    {
      title: '用户账号',
      dataIndex: 'userAccount',
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
      title: '产品名称',
      dataIndex: 'productName',
    },
    {
      title: '所属资源层',
      dataIndex: 'resourceOwn',
    },
    {
      title: '所属场景云',
      dataIndex: 'scenarioOwn',
    },
    {
      title: '产品明细',
      dataIndex: 'productDetail',
    },
    {
      title: '金额',
      dataIndex: 'money',
    }
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

  accountDetailData = [
    {
      accountTime: '2021-02-01',
      orderNum:'204180545940064',
      userAccount:'abc',
      tenantAccount: '123qwe',
      tenantName: '某集团',
      productName:'云服务器 ECS',
      resourceOwn:'IaaS',
      scenarioOwn:'混合云',
      productDetail:'通用型2核 8G\（包月）',
      money:'￥264.41',
    },{
      accountTime: '2021-02-01',
      orderNum:'204180545940064',
      userAccount:'abc',
      tenantAccount: '123qwe',
      tenantName: '某集团',
      productName:'云服务器 ECS',
      resourceOwn:'IaaS',
      scenarioOwn:'混合云',
      productDetail:'通用型2核 8G\（包月）',
      money:'￥264.41',
    },
  ]

  detail = (item)=>{
    //this.tabChange('2')
    this.setState({
      curActiveKey:'2'
    })
  };

  tabChange = (key)=>{
    this.setState({
      curActiveKey:key
    })
  };


  render() {
    return (
      <div className={styles['bookKeeping-content']}>
        <PageTitle title="账单"/>
        <Tabs onChange={this.tabChange} activeKey={this.state.curActiveKey}>
          <TabPane tab="账单总览" key="1">
            <section className={style.search_bar}>
              <div className={style.search_bar_item}>
                <span>账期：</span>
                <RangePicker picker="month"/>
              </div>
              <div>
                <span>租户账号：</span>
                <input />
              </div>
              <Button className={style.operBtn}>搜索</Button>
              <Button className={style.operBtn}>导出</Button>
            </section>
            <Table
              columns={this.account_overview_columns}
              dataSource={this.tableData}
              bordered
            />
          </TabPane>
          <TabPane tab="账单详情" key="2">
            <section className={style.search_bar}>
              <div className={style.search_bar_item}>
                <span>订单号：</span>
                <input placeholder={"请输入订单号"}/>
              </div>
              <div className={style.search_bar_item}>
                <span>租户账号：</span>
                <input placeholder={"请输入租户账号"}/>
              </div>
              <div>
                <span>账期：</span>
                <RangePicker picker="month"/>
              </div>
              <Button className={style.operBtn}>搜索</Button>
              <Button className={style.operBtn}>导出</Button>
            </section>
            <Table
              columns={this.account_detail_columns}
              dataSource={this.accountDetailData}
              bordered
            />
          </TabPane>
        </Tabs>

      </div>
    );
  }

  componentDidMount() {

  }
}

