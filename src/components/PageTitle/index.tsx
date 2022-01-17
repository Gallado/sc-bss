/*import React from 'react';
import styles from './index.module.scss';

export default ({ title }) => <h5 className={styles.title}>{title}</h5>;*/

import React, {Component} from 'react';
import {Button} from 'antd';
import styles from './index.module.scss';


export default class pageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {

  }


  render() {
    const { loadings } = this.state;
    return (
      <div className={styles['pageTitle-content']}>
          <div className={styles['title-name']}>{this.props.title}</div>
      </div>
    );
  }
}

