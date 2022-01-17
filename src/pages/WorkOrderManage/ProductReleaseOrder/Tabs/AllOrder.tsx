
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal, Select} from 'antd';
const { Option } = Select;
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

import SCTable from '@/components/Table';


export default class AllOrder extends Component {
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
      title: '租户名称/ID',
      dataIndex: 'tenantName',
      key: 'tenantName',
      ellipsis: true,
    },
    {
      title: '组织机构',
      dataIndex: 'organName',
      key: 'organName',
      ellipsis: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
      ellipsis: true,
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <div>
          <a onClick={()=>this.approve(record)}>审批</a>


        </div>
      ),
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
        "tenantName":"测试租户",
        "tenantId":"2275687700232037392",
        "organName":"XX公司/XX部门/XX小组",
        "name":"张三",
        "phone":"15611118086",
        "email":"43224288@qq.com",
        "status":"正常",
        "remark":"成功",
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
  approve = (record) =>{


  }



  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 },
    };
    return (
      <div className={styles['allOrder-content']}>
        <div className={'search-content'}>
          <Form {...layout} ref={this.formRef} name="search-content" className={'searchForm-content'}>
            <div className={'searchForm-item'}>
              <Form.Item name="orderStatus" label="工单状态">
                <Select placeholder="请选择工单状态" allowClear>
                  <Option value="unDo">待处理</Option>
                  <Option value="done">已完成</Option>
                </Select>
              </Form.Item>
            </div>
            <div className={'searchForm-item'}>
              <Form.Item name="prdType" label="产品类型">
                <Select placeholder="请选择产品类型" allowClear>
                  <Option value="success">产品发布</Option>
                  <Option value="stop">技术服务</Option>
                </Select>
              </Form.Item>
            </div>
            <div className={'searchForm-operate'}>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" >查询</Button>
                <Button type="primary" onClick={()=>this.reset()}>重置</Button>
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

