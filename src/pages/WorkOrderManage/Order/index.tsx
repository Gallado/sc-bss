
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Select, message, Modal} from 'antd';
const { Option } = Select;
import { UserOutlined, LockOutlined,SearchOutlined } from '@ant-design/icons';
import PageTitle from '@/components/PageTitle';
import SCTable from '@/components/Table';
import styles from './index.module.scss';
import { FormInstance } from 'antd/es/form';



export default class Order extends Component {
  formRef = React.createRef<FormInstance>();

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
      title: '工单编号',
      dataIndex: 'orderId',
      key: 'orderId',
      ellipsis: true,
    },
    {
      title: '工单标题',
      dataIndex: 'orderName',
      key: 'orderName',
      ellipsis: true,
    },
    {
      title: '工单类型',
      dataIndex: 'orderType',
      key: 'orderType',
      ellipsis: true,
    },
    {
      title: '产品类型',
      dataIndex: 'prdType',
      key: 'prdType',
      ellipsis: true,
    },
    {
      title: '提交时间',
      dataIndex: 'createTime',
      key: 'createTime',
      ellipsis: true,
    },
    {
      title: '工单状态',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
    },
    {
      title: '工单处理人',
      dataIndex: 'appUser',
      key: 'appUser',
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
        "orderId":"JSFW1233",
        "orderName":"无法远程连接ECS实例",
        "orderType":"技术服务",
        "prdType":"云服务器 ECS",
        "createTime":"2021-08-01 20:46:25",
        "status":"待处理",
        "appUser":"XXXX",
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

  reset = () =>{
    this.formRef.current!.resetFields();
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
      <div className={styles['order-content']}>
        <PageTitle title="全部工单" />
        <div className={styles['order-info']}>
          <div className={styles['order-num']}>
            <div>工单总数</div>
            <div>10</div>
          </div>
          <div className={styles['order-type']}>
            <div className={styles['order-item']}>
              <label>产品发布</label>
              <div className={styles['order-show']}>
                <p>2</p>
                <div>0%</div>
              </div>
            </div>
            <div className={styles['order-item']}>
              <label>技术服务</label>
              <div className={styles['order-show']}>
                <p>2</p>
                <div>0%</div>
              </div>

            </div>

          </div>
        </div>

        <div className={'search-content'}>
          <Form {...layout} ref={this.formRef} name="search-content" className={'searchForm-content'}>
            <div className={'searchForm-item'}>
              <Form.Item name="organ" label="组织机构">
                <Input />
              </Form.Item>
            </div>
            <div className={'searchForm-item'}>
              <Form.Item name="orderType" label="工单类型">
                <Select placeholder="请选择工单类型" allowClear>
                  <Option value="success">产品发布</Option>
                  <Option value="stop">技术服务</Option>
                </Select>
              </Form.Item>
            </div>
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

