
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal, Select} from 'antd';
const { Option } = Select;
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

import SCTable from '@/components/Table';


export default class AllMessage extends Component {
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
      title: '标题内容',
      dataIndex: 'messageName',
      key: 'messageName',
      ellipsis: true,
    },
    {
      title: '消息类型',
      dataIndex: 'messageType',
      key: 'messageType',
      ellipsis: true,
    },
    {
      title: '发布人',
      dataIndex: 'publisher',
      key: 'publisher',
      ellipsis: true,
    },
    {
      title: '发布时间',
      dataIndex: 'publishTime',
      key: 'publishTime',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
    },

    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <div>
          <a onClick={()=>this.approve(record)}>立即发布</a>


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
        "messageName":"测试消息1",
        "messageType":"站内信",
        "publisher":"XXX",
        "publishTime":" 2021-09-05 13:00",
        "status":"未发布"
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
      <div className={styles['allMessage-content']}>
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

