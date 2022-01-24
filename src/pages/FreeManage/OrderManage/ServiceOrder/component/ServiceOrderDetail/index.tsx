
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal} from 'antd';
import { LeftOutlined, LockOutlined } from '@ant-design/icons';
import styles from '../../index.module.scss';



export default class ServiceOrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }

  goBack = ()=>{
    this.props.history.push({
      pathname: '/serviceOrder',
    })
  };




  render() {
    const params = this.props.location.state.params; //参数
    return (
      <div className={styles['iaas-detail-content']}>
        <div className={styles.detail_title}>
          <LeftOutlined onClick={this.goBack} className={styles.backBtn}/>
          服务订单/订单详情
        </div>
        <section className={styles.iaas_detail_main_content}>
          <ul>
            <li>
              <span>主账号：</span>
              <span>{params.tenantName}</span>
            </li>
            <li>
              <span>子账号：</span>
              <span>{params.userAccount}</span>
            </li>
            <li>
              <span>产品所属场景云：</span>
              <span>{params.scType}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>订单状态：</span>
              <span>{params.status}</span>
            </li>
            <li>
              <span>订单类型：</span>
              <span>{params.orderType}</span>
            </li>
            <li>
              <span>创建时间：</span>
              <span>{params.createTime}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>资源开通状态：</span>
              <span>{}</span>
            </li>
          </ul>
        </section>
        <section>
          <p>订单信息</p>
          <div className={styles.iaas_detail_second_content}>
            <ul>
              <li>订单号</li>
              <li>产品名称</li>
              <li>产品详情</li>
              <li>起止时间</li>
              <li>数量</li>
              <li>金额</li>
            </ul>
            <ul>
              <li>111</li>
              <li>22</li>
              <li>33</li>
              <li>44</li>
              <li>55</li>
              <li>5t</li>
            </ul>
          </div>
        </section>

      </div>
    );
  }
}

