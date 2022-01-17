
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';



export default class BookKeeping extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }



  render() {
    return (
      <div className={styles['bookKeeping-content']}>
        <div>bookKeeping content</div>


      </div>
    );
  }
}

