import React, {Component} from 'react';
import {history} from 'ice';
import {Button, Form, Input, Checkbox, message, Modal} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styles from '../../../index.module.scss';
import image1 from '../../../img/1.jpg';
import PageTitle from '@/components/PageTitle';


export default class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }


  render() {
    return (
      <div className={styles['baseInfo-content']}>
        <div>
          <section>
            <div className={styles.base_info}>
              <span>基本信息</span>
              <p>备注：基本信息用于门户首页中的产品介绍页及帮助文档的展示</p>
            </div>
            <div className={styles.base_info}>
              <span>应用名称</span>
              <p>{this.props.curLine.appicationName}</p>
            </div>
            <div className={styles.base_info}>
              <span>应用类型</span>
              <p>xxx</p>
            </div>
            <div className={styles.base_info}>
              <span>发布平台</span>
              <p>{this.props.curLine.publishPlatform}</p>
            </div>
            <div className={styles.base_info}>
              <span>公司名称</span>
              <p>xxx</p>
            </div>
            <div className={styles.base_info}>
              <span>联系人</span>
              <p>xxx</p>
            </div>
            <div className={styles.base_info}>
              <span>应用简介</span>
              <p>xxxxx</p>
            </div>
          </section>
          <section className={styles.show_image}>
            <span>展示图&icon</span>
            <div>
              <img src={image1} alt=""/>
              <img src={image1} alt=""/>
            </div>
          </section>
          <section className={styles.show_image}>
            <span>应用优势</span>
            <div className={styles.show_apply_img}>
              <img src={image1} alt=""/>
              <img src={image1} alt=""/>
              <img src={image1} alt=""/>
              <img src={image1} alt=""/>
              <img src={image1} alt=""/>
              <img src={image1} alt=""/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

