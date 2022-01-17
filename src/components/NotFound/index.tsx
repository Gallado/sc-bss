import React, {Component} from 'react';
import styles from './index.module.scss';
import Store from "@/store/store";
import { history } from 'ice';

/**
 * 404 页面
 */
export default class ErrorBoundary extends Component{

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goHome = () =>{
    Store.dispatch({
      type: 'ACTIVED_NAVMENU',
      activedNavMenu:{
        'nav':'summary',
        'menu':undefined,
      },
    });
    history.push({pathname: "/summary"});
  };

  render() {
    return(
      <div className={styles['notFound-content']}>
        <i className={styles['notFound-icon']}></i>
        <div className={styles['notFound-tip']}>
          <label>页面走丢了，请联系管理员！</label>
          <p onClick={ () => this.goHome() }>尝试去<span className={styles['goHome']}>概览</span>看看</p>
        </div>
      </div>
    )
  }
}
