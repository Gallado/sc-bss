
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';



export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg:'',
    }
  }
  componentDidMount() {
  }



  render() {
    return (
      <div className={styles['summary-content']}>
        <div className={styles['one-summary']}>
            <div className={styles['revenue-overview']}>
              <div className={styles['revenue-title']}>
                <div className={styles['title-name']}>营收概览</div>
                <span>2021.12.25  20:50:30</span>
              </div>
              <div className={styles['revenue-info']}>
                <ul>
                  <li>
                    <div className={styles['item-name']}>累计销售情况</div>
                    <div className={styles['item-info']}>
                      <ul>
                        <li>
                          <div className={styles['item-label']}>累计销售额（百万元）</div>
                          <div className={styles['item-info']}>153.27</div>
                        </li>
                        <li>
                          <div>累计订单数（个）</div>
                          <div>32,857</div>
                        </li>
                        <li>
                          <div>累计用户数（个）</div>
                          <div>110,245</div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles['item-name']}>近半年销售趋势（百万元）</div>
                    <div className={styles['item-info']}>
                      1111
                    </div>
                  </li>
                  <li>
                    <div className={styles['item-name']}>客户销售额TOP5（百万元）</div>
                    <div className={styles['item-info']}>
                      <ul>
                        <li>
                          <div>联通数字科技有限公司</div>
                          <div>1111</div>
                        </li>
                        <li>
                          <div>上海工业互联网</div>
                          <div>2222</div>
                        </li>
                        <li>
                          <div>联通数字科技有限公司</div>
                          <div>1111</div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          <div className={styles['one-right']}>
            <div className={styles['one-item']}>
              <div className={styles['item-title']}>
                <div>云业务销售情况</div>
              </div>
              <div className={styles['item-info']}>
                <ul>
                  <li>
                    <div className={styles['item-name']}>昨日交易总额</div>
                    <div className={styles['item-num']}>57万元</div>
                  </li>
                  <li>
                    <div className={styles['item-name']}>昨日订单数</div>
                    <div className={styles['item-num']}>26单</div>
                  </li>
                  <li>
                    <div className={styles['item-name']}>昨日新增客户数</div>
                    <div className={styles['item-num']}>10个</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles['one-item']}>
              <div className={styles['item-title']}>
                <div>我的事项</div>
              </div>
              <div className={styles['item-info']}>
                <ul>
                  <li>
                    <div className={styles['item-name']}>待处理工单 </div>
                    <div className={styles['item-num']}>7</div>
                  </li>
                  <li>
                    <div className={styles['item-name']}>处理中工单</div>
                    <div className={styles['item-num']}>15</div>
                  </li>
                  <li>
                    <div className={styles['item-name']}>已完成工单 </div>
                    <div className={styles['item-num']}>105</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
        <div className={styles['two-summary']}>
          <div className={styles['two-left']}>
            <div className={styles['mid-content']}>
              <div className={styles['mid-left']}>
                <div className={styles['sales-item']}>
                  <div className={styles['sales-title']}>销售额排行（万元）</div>
                  <div className={styles['sales-info']}>
                    <div className={styles['info-name']}>
                      <div>臻选场景方案</div>
                    </div>
                    <div className={styles['info-charts']}>
                      <ul>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['mid-right']}>
                <div className={styles['sales-title']}>销售额 TOP 5 （万元）</div>
                <div>
                  <div className={styles['sales-info']}>
                    <div className={styles['info-name']}>
                      <div>臻选场景方案</div>
                    </div>
                    <div className={styles['info-charts']}>
                      <ul>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                        <li>
                          <div className={styles['info-num']}><p>大计算-分布式云</p>5340.1</div>
                          <div className={styles['info-process']}></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


              </div>

            </div>
            <div className={styles['resource-overview']}>
              <div className={styles['resource-title']}>全场景资源概览</div>
              <div className={styles['resource-charts']}></div>

            </div>
          </div>
          <div className={styles['two-right']}>

          </div>

        </div>


      </div>
    );
  }
}

