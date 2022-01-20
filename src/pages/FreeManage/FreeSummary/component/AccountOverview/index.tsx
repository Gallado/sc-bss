import React, {Component} from 'react';
import {history} from 'ice';
import {Button, DatePicker, Radio} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Highcharts from 'highcharts';
import styles from '../../index.module.scss';
import style from '../../../index.module.scss';

const {RangePicker} = DatePicker;

export default class AccountOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  draw = () => {
    var chart = Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: '数据来源: WorldClimate.com'
      },
      xAxis: {
        categories: [
          '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: '降雨量 (mm)'
        }
      },
      tooltip: {
        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          borderWidth: 0
        }
      },
      series: [{
        name: '东京',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }, {
        name: '纽约',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
      }, {
        name: '伦敦',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
      }, {
        name: '柏林',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
      }]
    });

  };

  draw2 = ()=>{
    var chart = Highcharts.chart('container2', {
      chart: {
        spacing : [0, 0 , 40, 0]
      },
      title: {
        floating:true,
        text: '总费用 25.00 万元',
        style:{
          fontSize:'12px'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
        }
      },
      series: [{
        type: 'pie',
        innerSize: '80%',
        name: '市场份额',
        data: [
          ['IE',       26.8],
        ]
      }]
    }, function(c) { // 图表初始化完毕后的会掉函数
      // 环形图圆心
      var centerY = c.series[0].center[1],
        titleHeight = parseInt(c.title.styles.fontSize);
      // 动态设置标题位置
      c.setTitle({
        y:centerY + titleHeight/2
      });
    });
  }

  render() {
    return (
      <div className={styles['accountOverview-content']}>
        <section>
          <span>时间范围：</span>
          <RangePicker picker="month"/>
          <Button className={style.operBtn}>查询</Button>
        </section>
        <section>
          <p>账单趋势</p>
          <div id="container" className={styles.account_trend_chart}></div>
          <p>2021-01 ~ 2021-06 产品月均账单金额为 8.7万元</p>
        </section>
        <section className={styles.account_sumup}>
          <div id="container2" className={styles.account_sumup_chart}></div>
          <div className={styles.classify_account}>
            <ul>
              <li>
                <p className={styles.account_item}>
                  <div className={styles.placeholder}></div>
                  <div className={styles.account_item_content}>
                    <span style={{marginRight:'200px'}}>IaaS账单</span>
                    <span>5.00 万元</span>
                  </div>
                </p>
              </li>
              <li>
                <p className={styles.account_item}>
                  <div className={styles.placeholder}></div>
                  <div className={styles.account_item_content}>
                    <span style={{marginRight:'200px'}}>设施账单</span>
                    <span>5.00 万元</span>
                  </div>
                </p>
              </li>
              <li>
                <p className={styles.account_item}>
                  <div className={styles.placeholder}></div>
                  <div className={styles.account_item_content}>
                    <span style={{marginRight:'200px'}}>PaaS账单</span>
                    <span>5.00 万元</span>
                  </div>
                </p>
              </li>
              <li>
                <p className={styles.account_item}>
                  <div className={styles.placeholder}></div>
                  <div className={styles.account_item_content}>
                    <span style={{marginRight:'200px'}}>服务账单</span>
                    <span>5.00 万元</span>
                  </div>
                </p>
              </li>
              <li>
                <p className={styles.account_item}>
                  <div className={styles.placeholder}></div>
                  <div className={styles.account_item_content}>
                    <span style={{marginRight:'200px'}}>SaaS账单</span>
                    <span>5.00 万元</span>
                  </div>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
    this.draw();
    this.draw2();
    this.props.onRef('AccountOverview', this)
  }
}

