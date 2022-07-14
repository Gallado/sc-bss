
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Select, message, Modal} from 'antd';
const { Option } = Select;
import { UserOutlined, LockOutlined,SearchOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';
import SCTable from '@/components/Table';
import DisabledTenant from "@/pages/TenantManage/Tenant/modal/Disabled";



export default class Tenant extends Component {
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
          {
            record.status == 1? <a onClick={()=>this.useOrDisabled(record)}></a>:<a  onClick={()=>this.useOrDisabled(record)}>禁用</a>
          }

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

    this.$axios.post('/api/user/login',params, {emulateJSON: true})
      .then(function (response) {
        if(response.data.code == 200){
          that.setState({isLoading:false,tableData:response.data.data,totalSize:22,currentPage:params.index});
        }else{
          that.setState({'errorMsg':response.data.message,isLoading:false});
        }
      }).catch(function (error) {
    });
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
  useOrDisabled = (record) =>{
    this.modal = Modal.info({
      title:"禁用",
      closable:true,
      okText:"确定",
      cancelText:"取消",
      centered:true,
      width:600,
      //icon:"none",
      content:<DisabledTenant submitFn={this.submitFn} cancelFn={this.cancelFn}></DisabledTenant>,
      onOk:()=>{
      },
      onCancel:()=>{
      }
    })
  };

  submitFn = (value) =>{
    console.log(value);
    message.success('操作成功！');
    this.modal.destroy();
  };
  cancelFn = () =>{
    message.error('操作失败！');
    this.modal.destroy();
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
      <div className={styles['tenant-content']}>
        <PageTitle title="租户列表" />
        <div className={'search-content'}>
          <Form {...layout} name="search-content" className={'searchForm-content'}>
            <div className={'searchForm-item'}>
              <Form.Item name="organ" label="组织机构">
                <Input />
              </Form.Item>
            </div>
            <div className={'searchForm-item'}>
              <Form.Item name="status" label="状态">
                <Select placeholder="Select a option and change input text above" allowClear>
                  <Option value="success">正常</Option>
                  <Option value="stop">停用</Option>
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
              isLoading={this.state.isLoading}
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

