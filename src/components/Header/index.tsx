/*import React from 'react';
import styles from './index.module.scss';

export default ({ title }) => <h5 className={styles.title}>{title}</h5>;*/

import React, {Component} from 'react';
import { Link,history } from 'ice';
import {Menu,Dropdown,message} from 'antd';
import { CaretDownOutlined,PoweroffOutlined,BarChartOutlined,DollarOutlined,UserOutlined,MessageOutlined,
  LaptopOutlined,AuditOutlined,TeamOutlined} from '@ant-design/icons';
import styles from './index.module.scss';
import Store from "@/store/store";


export default class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNav:'',
      navigationList:[]

    }
  }
  componentDidMount() {
    this.setState({currentNav:this.props.currentNav})
    this.queyNav();

  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentNav != this.props.currentNav) {
      this.setState({currentNav:nextProps.currentNav});
    }
  }
  queyNav = () =>{
    let data = [
      {
        "icon":"",
        "key":"summary",
        "name":"概览"
      }, {
        "icon":"",
        "key":"freeManage",
        "name":"费用管理"
      },{
        "icon":"",
        "key":"tenantManage",
        "name":"租户管理"
      },{
        "icon":"",
        "key":"productManage",
        "name":"产品管理"
      },{
        "icon":"",
        "key":"orderManage",
        "name":"工单管理"
      },{
        "icon":"",
        "key":"messageManage",
        "name":"消息管理"
      },{
        "icon":"",
        "key":"adminCenter",
        "name":"管理员中心"
      }
    ];
    this.setState({navigationList:data});

  };
  loginOut = () =>{
      let params =  {
          userName:Store.getState().loginInfo?.userName,
          userType:Store.getState().loginInfo?.userType,
      };


    Store.dispatch({
      type: 'ACTIVED_NAVMENU',
      activedNavMenu:{
        'nav':undefined,
        'menu':undefined,
      },
    });

      history.push({pathname: "/login"})
      /*this.$axios.post('/iam/user/logout',params, {emulateJSON: true})
          .then(function (response) {
              if(response.data.code == 200){
                  Store.dispatch({
                      type: 'LOGIN_OUT',
                      loginInfo:{},
                  });
                  history.push({pathname: "/login"})
              }else{
                  message.error(response.data.message);

              }
          }).catch(function (error) {
      });*/
  };
  activedNavChange = (item) =>{
    Store.dispatch({
      type: 'ACTIVED_NAVMENU',
      activedNavMenu:{
        'nav':item.key,
        'menu':undefined
      },
    });
    setTimeout(()=>{
      this.props.navChangeFn(item);
    },100)

  };


  render() {
    return (
      <div className={styles['headerLayout-content']}>
        <div className={styles['platform-info']}>
          <div className={styles['platform-logo']}></div>
          <div className={styles['platform-Name']}>场景云运营中台</div>
        </div>
        <div className={styles['header-nav']}>
          <ul>
            {
              this.state.navigationList.map((item,index) => {
                return (
                  <li className={item.key == this.state.currentNav ? styles['activedNav-li']:''} onClick={()=>this.activedNavChange(item)}>
                    <div className={styles['nav-icon']}>
                      <BarChartOutlined/>
                    </div>
                    <div className={styles['nav-name']}>{item.name}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className={styles['loginOut-content']} onClick={()=>this.loginOut()}>
          <PoweroffOutlined />
          <div className={styles['login-out']}>退出登录</div>
        </div>
      </div>
    );
  }
}

