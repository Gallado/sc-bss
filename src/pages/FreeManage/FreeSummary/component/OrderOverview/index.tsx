import React, {Component} from 'react';
import {history} from 'ice';
import {Button, DatePicker, Radio} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Highcharts from 'highcharts';
import styles from '../../index.module.scss';
import style from '../../../index.module.scss';
//import style from '@/global.scss';

const {RangePicker} = DatePicker;

export default class OrderOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'order',
      isContainerShow:'flex',
      isMycontainerShow:'none'
    }
  }

  draw = () => {
    var chart = Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: '订单走势'
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

  draw2 = () => {
    var chart2 = Highcharts.chart('mycontainer', {
      chart: {
        type: 'column'
      },
      title: {
        text: '订单额走势'
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
  }

  drawPaas = () => {
    var chart3 = Highcharts.chart('paasContainer', {
      chart: {
        type: 'column'
      },
      title: {
        text: '订单额走势'
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
  }

  changeTabPosition = (key) => {
    this.setState({
      tabPosition: key.target.value
    },()=>{
      if(this.state.tabPosition == 'order'){
        this.setState({
          isContainerShow:'flex',
          isMycontainerShow:'none'
        })
      }else if(this.state.tabPosition == 'orderMount'){
        this.setState({
          isContainerShow:'none',
          isMycontainerShow:'flex'
        })
      }
    })
  };


  render() {
    return (
      <div className={styles['freeSummary-content']}>
        <section>
          <RangePicker picker="month"/>
          <Button className={style.operBtn}>查询</Button>
        </section>
        <section className={styles.order_amount}>
          <div className={styles.order_amount_num}>
            <p>IaaS订单额</p>
            <p>￥2300.00</p>
          </div>
          <div className={styles.order_charts}>
            <div className={styles.order_charts_tabs}>
              <Radio.Group value={this.state.tabPosition} onChange={this.changeTabPosition}>
                <Radio.Button value="order">订单走势</Radio.Button>
                <Radio.Button value="orderMount">订单额走势</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <div id="container" className={styles.order_amount_chart} style={{display:this.state.isContainerShow}}></div>
              <div id="mycontainer" className={styles.order_amount_chart} style={{display:this.state.isMycontainerShow}}></div>
            </div>
            {/*<div >
              {
                this.state.tabPosition == 'order' ?
                  <div id="mycontainer" className={styles.order_amount_chart}></div> :
                  (this.state.tabPosition == 'orderMount' ?
                      <div id="container" className={styles.order_amount_chart}></div> :
                      <div></div>
                  )
              }
            </div>*/}
          </div>
        </section>

        <section className={styles.order_amount}>
          <div className={styles.order_amount_num}>
            <p>PaaS订单额</p>
            <p>￥2300.00</p>
          </div>
          <div className={styles.order_charts}>
            <div className={styles.order_charts_tabs}>
              <Radio.Group value={this.state.tabPosition} onChange={this.changeTabPosition}>
                <Radio.Button value="order">订单走势</Radio.Button>
                <Radio.Button value="orderMount">订单额走势</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <div id="paasContainer" className={styles.order_amount_chart}></div>
              {/*<div id="mycontainer" className={styles.order_amount_chart} style={{display:this.state.isMycontainerShow}}></div>*/}
            </div>
          </div>
        </section>

        <section className={styles.order_amount}>
          <div className={styles.order_amount_num}>
            <p>SaaS订单额</p>
            <p>￥2300.00</p>
          </div>
          <div id="paasContainer" className={styles.order_amount_chart}></div>
        </section>

      </div>
    );
  }

  componentDidMount() {
    this.draw();
    this.draw2();
    this.drawPaas();
    this.props.onRef('OrderOverview', this)
  }
}

