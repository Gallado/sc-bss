
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Select, message, Modal} from 'antd';
const { Option } = Select;
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

import PageTitle from '@/components/PageTitle';
import SCTable from '@/components/Table';

export default class IaasOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      selectRow:{},
      tableConfig:{
        isShowSelect:false,
        multipleSelectionType:'checkbox',
        isShowPagination:true
      },
      tableData:[],
      totalSize:0,
      currentPage:1,

    }
  }
  componentDidMount() {
    this.query();
  }

  columns = [
    {
      title: '订单号',
      dataIndex: 'orderId',
      key: 'orderId',
      ellipsis: true,
    },
    {
      title: '租户账号',
      dataIndex: 'tenantId',
      key: 'tenantId',
      ellipsis: true,
    },
    {
      title: '机构名称',
      dataIndex: 'organName',
      key: 'organName',
      ellipsis: true,
    },
    {
      title: '产品',
      dataIndex: 'productName',
      key: 'productName',
      ellipsis: true,
    },
    {
      title: '产品所属场景云',
      dataIndex: 'scType',
      key: 'scType',
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      ellipsis: true,
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
    },
    {
      title: '订单类型',
      dataIndex: 'orderType',
      key: 'orderType',
      ellipsis: true,
    },
    {
      title: '应付金额',
      dataIndex: 'payMoney',
      key: 'payMoney',
      ellipsis: true,
    },
    {
      title: '收费类型',
      dataIndex: 'chargeType',
      key: 'chargeType',
      ellipsis: true,
    },

  ];

  query = (pageNum,pageSize) =>{

    this.setState({isLoading:true});
    let that = this;
    let params =  {
      index:pageNum == undefined ? 1 :pageNum,
      rows:pageSize == undefined ? 10 :pageSize,
    };
    setTimeout(()=>{
      let data = [{
        "orderId":"111",
        "tenantId":"abc",
        "organName":"A公司",
        "productName":"云服务器 ECS",
        "scType":"混合云",
        "createTime":"2019-08-01 20:46:25",
        "status":"成功",
        "orderType":"新购",
        "payMoney":"59.80",
        "chargeType":"包年包月",
      }];
      that.setState({isLoading:false,tableData:data,totalSize:22,currentPage:params.index});
    },3000)

  };

  changePageFn = (pageNum,pageSize) =>{
    console.log(pageNum,pageSize);
    this.query(pageNum,pageSize);
  };

  selectedRowFn = (row) =>{
    console.log(row);
    this.setState({selectRow:row})
  };



  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 },
    };
    return (
      <div className={styles['iaas-content']}>
        <PageTitle title="IaaS订单" />
        <div className={'search-content'}>
          <Form {...layout} name="search-content" className={'searchForm-content'}>
            <div className={'searchForm-item'}>
              <Form.Item name="roleName" label="策略名称">
                <Input />
              </Form.Item>
            </div>
            <div className={'searchForm-item'}>
              <Form.Item name="status" label="策略类型">
                <Select placeholder="Select a option and change input text above" allowClear>
                  <Option value="success">系统策略</Option>
                  <Option value="stop">自定义策略</Option>
                </Select>
              </Form.Item>
            </div>
            <div className={'searchForm-operate'}>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" >查询</Button>
                <Button type="primary" htmlType="submit">重置</Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        <div className={'table-content'}>
          <div className={'table-operateBtn-content'}>
            <Button icon={<SearchOutlined />}>创建角色</Button>
            <Button icon={<SearchOutlined />}>批量删除</Button>
          </div>
          <div className={'table-layout'}>
            <SCTable
              isLoading={this.state.tisLoading}
              columns={this.columns}
              dataSource={this.state.tableData}
              tableConfig={this.state.tableConfig}
              totalSize={this.state.totalSize}
              current={this.state.currentPage}
              changePage={this.changePageFn}
              selectedRow={this.selectedRowFn}/>
          </div>
        </div>
      </div>
    );
  }
}

