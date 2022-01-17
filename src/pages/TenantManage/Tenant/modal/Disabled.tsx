
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal,Radio} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';




export default class DisabledTenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }

  onFinish =(values: any) =>{
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
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 24 },
    };
    return (
      <div className={styles['disabledTenant-modal']}>
        <Form
          name="basic"
          {...layout}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >

          <div className={styles['disabled-tips']}>如果禁用该租户，则该租户无法使用此账号登录控制台，确定继续？</div>
          <Form.Item
            label="备注"
            name="remark"
            rules={[{ required: true, message: '备注不能为空！' }]}
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

