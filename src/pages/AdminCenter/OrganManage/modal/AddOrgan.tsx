
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal,Radio} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';




export default class AddOrgan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }

  onFinish =(values: any) =>{
    console.log(values);
    this.props.submitFn(200);
  };
  onFinishFailed = (errorInfo: any) =>{
    console.log('Failed:', errorInfo);
  };

  cancel = () =>{
    this.props.cancelFn();
  };



  render() {
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 },
    };
    return (
      <div className={styles['addOrgan-modal']}>
        <Form
          name="basic"
          {...layout}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >

          <div className={styles['base-info']}>基本信息</div>
          <Form.Item
            label="机构名称"
            name="organName"
            rules={[{ required: true, message: '机构名称不能为空！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="联系人"
            name="contactPerson"
            rules={[{ required: true, message: '联系人不能为空！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="手机号码"
            name="phone"
            rules={[{ required: true, message: '手机号码不能为空！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="电子邮箱"
            name="email"
            rules={[{ required: true, message: '电子邮箱不能为空！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="备注"
            name="remark"
          >
            <Input.TextArea />
          </Form.Item>




          <Form.Item {...tailLayout} className = {'modalBtn-operate'}>
            <Button type="primary" htmlType="submit" style={{marginRight:15}}>确定</Button>
            <Button htmlType="button" onClick={()=>this.cancel()}>取消</Button>
          </Form.Item>
        </Form>


      </div>
    );
  }
}

