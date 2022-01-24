
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Select, message, Modal,DatePicker} from 'antd';
const { Option } = Select;
import { SearchOutlined } from '@ant-design/icons';
import styles from '../../index.module.scss';

import PageTitle from '@/components/PageTitle';
import SCTable from '@/components/Table';

const {RangePicker} = DatePicker;

export default class equipmentOrder extends Component {
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
      title: '用户账号',
      dataIndex: 'userAccount',
      key: 'userAccount',
      ellipsis: true,
    },
    {
      title: '租户账号',
      dataIndex: 'tenantId',
      key: 'tenantId',
      ellipsis: true,
    },
    {
      title: '租户名称',
      dataIndex: 'tenantName',
      key: 'tenantName',
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
      filters: [
        {
          text: '物联感知云',
          value: '物联感知云',
        },
        {
          text: '5G边缘云',
          value: '5G边缘云',
        },
      ],
      //filterSearch: true,
      filterMultiple:false,
      onFilter: (value, record) => record.scType.indexOf(value) === 0,
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
    {
      title: '订单详情',
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

  detail = (record)=>{
    history.push({
      pathname: '/IaasDetail',
      state: {
        params: record
      }
    })
  };

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
        "userAccount":"李xx",
        "tenantId":"abc",
        "tenantName":"A公司",
        "productName":"云服务器 ECS",
        "scType":"物联感知云",
        "createTime":"2019-08-01 20:46:25",
        "status":"成功",
        "orderType":"新购",
        "payMoney":"59.80",
        "chargeType":"包年包月",
      },{
        "orderId":"111",
        "userAccount":"李xx",
        "tenantId":"abc",
        "tenantName":"A公司",
        "productName":"云服务器 ECS",
        "scType":"物联感知云",
        "createTime":"2019-08-01 20:46:25",
        "status":"成功",
        "orderType":"新购",
        "payMoney":"59.80",
        "chargeType":"包年包月",
      },{
        "orderId":"111",
        "userAccount":"李xx",
        "tenantId":"abc",
        "tenantName":"A公司",
        "productName":"云服务器 ECS",
        "scType":"5G边缘云",
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

  productChange = (item)=>{
    console.log(item)
  };

  onFinish = (value)=>{
    console.log(value)
  }



  render() {
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 },
    };
    return (
      <div className={styles['iaas-content']}>
        <PageTitle title="设施订单" />
        <div className={'search-content'}>
          <Form {...layout} name="search-content" className={'searchForm-content'} onFinish={this.onFinish}>
            <div className={'searchForm-item'}>
              <Form.Item name="orderId" label="订单号">
                <Input placeholder={"请输入订单号"}/>
              </Form.Item>
            </div>
            <div className={'searchForm-item'}>
              <Form.Item name="tenantAccount" label="租户账号">
                <Input placeholder={"请输入租户账号"}/>
              </Form.Item>
            </div>
            <div className={'searchForm-item'}>
              <Form.Item name="productName" label="产品名称">
                <Select placeholder="请选择" onChange={this.productChange} allowClear>
                  <Option value="ecs">云服务器ECS</Option>
                  <Option value="bms">裸金属BMS</Option>
                </Select>
              </Form.Item>
            </div>
            <div className={'searchForm-item'}>
              <Form.Item name="orderTime" label="下单时间">
                <RangePicker picker="month"/>
              </Form.Item>
            </div>
            <div className={'searchForm-operate'}>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">搜索</Button>
                <Button type="primary" htmlType="submit">导出</Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        <div className={'table-content'}>
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

