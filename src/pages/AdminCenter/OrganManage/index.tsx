
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Select, message, Modal} from 'antd';
const { Option } = Select;
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import PageTitle from '@/components/PageTitle';
import CMPTableTree from '@/components/TableTree';
import { FormInstance } from 'antd/es/form';
import AddOrgan from "@/pages/AdminCenter/OrganManage/modal/AddOrgan";



export default class OrganManage extends Component {
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
  };
  columns = [
    {
      title: '组织机构',
      dataIndex: 'organName',
      key: 'organName',
    },
    {
      title: '操作人',
      dataIndex: 'operater',
      key: 'operater',
    },
    {
      title: '关联人员（人）',
      dataIndex: 'relationer',
      key: 'relationer',
    },
    {
      title: '联系人',
      dataIndex: 'contactPerson',
      key: 'contactPerson',
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '电子邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },{
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <div className={'tablecolum-Action'}>
          <ul>
            <li>编辑</li>
            <li>停用</li>
            <li>新增</li>
            <li>删除</li>
          </ul>
        </div>
      ),
    }
  ];
  query = (pageNum,pageSize) =>{

    this.setState({isLoading:true});
    let that = this;
    let params =  {
      index:pageNum == undefined ? 1 :pageNum,
      rows:pageSize == undefined ? 10 :pageSize,
    };
    setTimeout(()=>{
      let data = [
        {
          key: 1,
          organName: 'XX公司总部',
          operater: 'Lucy',
          relationer: '123',
          contactPerson:'阿场',
          phone:"16602918112",
          email:"43224288@qq.com",
          status:"1",
          createTime:'2021-08-05 10:20:54',
          children:[{
            key: 1-1,
            organName: '运营部',
            operater: 'Lily',
            relationer: '100',
            contactPerson: '阿里',
            phone: "16602918112",
            email: "442619111@qq.com",
            status: "1",
            createTime: '2021-08-05 10:20:54',
            children:[{
              key: 1-1-1,
              organName: '运营部一组',
              operater: 'Luck',
              relationer: '23',
              contactPerson: '阿云',
              phone: "16602918112",
              email: "442619111@qq.com",
              status: "2",
              createTime: '2021-08-05 10:20:54',
            }]
          }]
        },
        {
          key: 2,
          organName: '云数据公司总部',
          operater: 'Lucy11',
          relationer: '222',
          contactPerson:'阿杜',
          phone:"16602918112",
          email:"43224288@qq.com",
          status:"1",
          createTime:'2021-08-05 10:20:54',
        }
      ];
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

  submitFn = (value) =>{
    console.log(value);
    message.success('操作成功！');
    this.modal.destroy();
  };
  cancelFn = () =>{
    message.error('操作失败！');
    this.modal.destroy();
  };

  addOrgan = () =>{
    this.modal = Modal.info({
      title:"新建机构",
      closable:true,
      okText:"确定",
      cancelText:"取消",
      centered:true,
      width:600,
      //icon:"none",
      content:<AddOrgan submitFn={this.submitFn} cancelFn={this.cancelFn}></AddOrgan>,
      onOk:()=>{
      },
      onCancel:()=>{
      }
    })

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
      <div className={styles['organManage-content']}>
        <PageTitle title="组织架构管理" />

        <div className={'table-content'}>
          <div className={'table-operateBtn-content'}>
            <Button icon={<PlusOutlined />} onClick={()=>this.addOrgan()}>新建机构</Button>
          </div>
          <div className={'table-layout'}>
            <CMPTableTree
              isLoading={this.state.isLoading}
              columns={this.columns}
              dataSource={this.state.tableData}
              tableConfig={this.state.tableConfig}
              changePage={this.changePageFn} selectedRow={this.selectedRowFn}/>
          </div>
        </div>


      </div>
    );
  }
}

