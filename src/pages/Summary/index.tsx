
import React, {Component} from 'react';
import { history } from 'ice';
import {Button, Form, Input, Checkbox, message, Modal} from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

import HighCharts from 'highcharts';
import HighchartsData from 'highcharts/modules/data'
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsVariablePie from 'highcharts/modules/variable-pie'



export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg:'',
    }
  }
  componentDidMount() {
    this.getBaseInfo1();
    this.getBaseInfo2();
  }

  getBaseInfo1 = () =>{
    this.drawLine();
  };
  getBaseInfo2 = () =>{
    this.drawChart2();
  };



   drawChart2 = () =>{
    let chart = HighCharts.chart('chartTwo', {
      chart: {
        type: 'column'
      },
      title: {
        text: '全球各大城市人口排行'
      },
      subtitle: {
        text: '数据截止 2017-03，来源: <a href="https://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45  // 设置轴标签旋转角度
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '人口 (百万)'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '人口总量: <b>{point.y:.1f} 百万</b>'
      },
      series: [{
        name: '总人口',
        data: [
          ['上海', 24.25],
          ['卡拉奇', 23.50],
          ['北京', 21.51],
          ['德里', 16.78],
          ['拉各斯', 16.06],
          ['天津', 15.20],
          ['伊斯坦布尔', 14.16],
          ['东京', 13.51],
          ['广州', 13.08],
          ['孟买', 12.44],
          ['莫斯科', 12.19]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // :.1f 为保留 1 位小数
          y: 10
        }
      }]
    });
  };

   drawLine = () =>{
    let chart = HighCharts.chart('chartOne', {
      title: {
        text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
      },
      subtitle: {
        text: '数据来源：thesolarfoundation.com'
      },
      yAxis: {
        title: {
          text: '就业人数'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },
      series: [{
        name: '安装，实施人员',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: '工人',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: '销售',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: '项目开发',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: '其他',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    });
  };





  render() {
    return (
      <div className={styles['summary-content']}>
        <div className={styles['summary-left']}>
          <div className={styles['revenue-overview']}>
            <div className={styles['revenue-title']}>营收概览</div>
            <div className={styles['revenue-info']}>
              <div className={styles['info-number']}>
                <ul>
                  <li>
                    <div className={styles['info-name']}>累计交易金额（百万元）</div>
                    <div className={styles['number-info']}>153.27</div>
                  </li>
                  <li>
                    <div className={styles['info-name']}>累计订单数（单）</div>
                    <div className={styles['number-info']}>132875</div>
                  </li>
                  <li>
                    <div className={styles['info-name']}>累计客户数（个）</div>
                    <div className={styles['number-info']}>110245</div>
                  </li>
                </ul>
              </div>
              <div className={styles['info-charts']}>
                <ul>
                  <li>
                    <div id="chartOne" style={{width: '100%', height: '100%'}}></div>
                  </li>
                  <li>
                    <div id="chartTwo" style={{width: '100%', height: '100%'}}></div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className={styles['sales-content']}>
            <ul>
              <li>
                <div className={styles['sales-title']}>方案销售额排名</div>
                <div className={styles['sales-info']}>
                  <div className={styles['info-name']}>臻选场景方案（万元）</div>
                  <div className={styles['info-list']}></div>
                </div>
              </li>
              <li>
                <div className={styles['sales-title']}>应用销售额排名</div>
                <div className={styles['sales-info']}>
                  <div className={styles['info-name']}>特色场景应用（万元）</div>
                  <div className={styles['info-list']}></div>
                </div>
              </li>
              <li>
                <div className={styles['sales-title']}>方案销售额排名</div>
                <div className={styles['sales-info']}>
                  <div className={styles['info-name']}>专属场景应用（万元）</div>
                  <div className={styles['info-list']}></div>
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div className={styles['summary-right']}>
          <div className={styles['right-item']}>
            <div className={styles['item-title']}>我的事项</div>
            <div className={styles['item-info']}>
              <ul>
                <li>
                  <div className={styles['info-title']}>待处理工单</div>
                  <div className={styles['info-text']}>7</div>
                </li>
                <li>
                  <div className={styles['info-title']}>处理中工单</div>
                  <div className={styles['info-text']}>7</div>
                </li>
                <li>
                  <div className={styles['info-title']}>已完成工单</div>
                  <div className={styles['info-text']}>7</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['right-item']}>
            <div className={styles['item-title']}>云业务销售情况</div>
            <div className={styles['item-info']}>
              <ul>
                <li>
                  <div className={styles['info-title']}>昨日交易总额（万元）</div>
                  <div className={styles['info-text']}>57.02</div>
                </li>
                <li>
                  <div className={styles['info-title']}>昨日订单数（单）</div>
                  <div className={styles['info-text']}>1080</div>
                </li>
                <li>
                  <div className={styles['info-title']}>昨日新增客户数（个）</div>
                  <div className={styles['info-text']}>10</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['right-item']}>
            <div className={styles['item-title']}>本月销售进度</div>
            <div className={styles['item-info']}>
              <ul>
                <li>
                  <div className={styles['info-title']}>本月销售额（万元）</div>
                  <div className={styles['info-text']}>57.02</div>
                  <div className={styles['growth-rate']}>
                    同比 <div className={styles['rate-info']} style={{color:'red'}}><CaretUpOutlined style={{padding:'0 5px'}} />35%</div>
                  </div>
                </li>
                <li>
                  <div className={styles['info-title']}>本月订单数（单）</div>
                  <div className={styles['info-text']}>1080</div>
                  <div className={styles['growth-rate']}>
                    同比 <div className={styles['rate-info']} style={{color:'green'}}><CaretUpOutlined style={{padding:'0 5px'}} />15%</div>
                  </div>
                </li>
                <li>
                  <div className={styles['info-title']}>本月新增客户数（个）</div>
                  <div className={styles['info-text']}>10</div>
                  <div className={styles['growth-rate']}>
                    同比 <div className={styles['rate-info']} style={{color:'green'}}><CaretUpOutlined style={{padding:'0 5px'}} />15%</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

