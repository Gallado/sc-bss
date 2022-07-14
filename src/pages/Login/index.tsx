/*import React from 'react';
import styles from './index.module.scss';

export default ({ title }) => <h5 className={styles.title}>{title}</h5>;*/

import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import Store from "@/store/store";

import md5 from 'js-md5';
//import TipsModal from "@/components/TipsModal";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        errorMsg:'',
    }
  }
  componentDidMount() {
      console.log('登录名：'+Store.getState().userInfo?.userName);
  }
  onFinish = (values: any) => {
    let that = this;
    let params =  {
        userName:values.username,
        password:md5(values.password),
    };
    Store.dispatch({
      type: 'ACTIVED_NAVMENU',
      activedNavMenu:{
        'nav':'summary',
        'menu':undefined,
      },
    });
    history.push({pathname: "/summary"});
    /*this.$axios.post('/api/user/login',params, {emulateJSON: true})
      .then(function (response) {
        if(response.data.code == 200){
            Store.dispatch({
                type: 'LOGIN_INFO',
                loginInfo:response.data.data,
            });
            history.push({pathname: "/summary"});
        }else{
            that.setState({'errorMsg':response.data.message});

        }
      }).catch(function (error) {

    });*/
  };

 onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
 onValuesChange = (props,changedValues,allValues) =>{
    this.setState({errorMsg:''});
  };


  render() {
    return (
      <div className={styles['login-content']}>
          <div className={styles['login-form-content']}>
            <div className={styles['logo-content']}>
              <div className={styles['form-logo']}></div>
              <div className={styles['plat-name']}>联通场景云管理后台</div>
            </div>
            <Form className={styles['login-form']}
              name="basic"
              onValuesChange={this.onValuesChange}
              size="large"
              initialValues={{ remember: true,username:Store.getState().userInfo?.userName }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <div className={styles['login-name']}>用户登录 / USER LOGIN</div>
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input  prefix={<UserOutlined />} allowClear placeholder={"请输入用户名"} className={styles['login-input']} />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password  prefix={<LockOutlined />} allowClear placeholder={"请输入密码"}  className={styles['login-input']} />
              </Form.Item>

              <Form.Item style={{position:'relative'}}>
                <div className={styles['error-message']}>{this.state.errorMsg}</div>
                <Button className={styles['login-btn']} htmlType="submit">登 录</Button>
              </Form.Item>
             {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{color:'#666666'}}>记住用户名</Checkbox>
              </Form.Item>*/}
            </Form>
          </div>

      </div>
    );
  }
}

