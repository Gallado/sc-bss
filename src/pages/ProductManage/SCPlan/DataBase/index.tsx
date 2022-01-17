
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';



export default class DataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }



  render() {
    return (
      <div className={styles['dataBase-content']}>
        <div>dataBase-content</div>
      </div>
    );
  }
}

