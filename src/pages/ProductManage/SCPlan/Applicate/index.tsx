
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';



export default class Computer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }



  render() {
    return (
      <div className={styles['applicate-content']}>
        <div>applicate-content</div>
      </div>
    );
  }
}

