import React, {Component} from 'react';
import {Button, Form, Input, Checkbox, message, Modal, Tabs} from 'antd';
import styles from '../../index.module.scss';
import {BarcodeOutlined, SplitCellsOutlined, ReconciliationOutlined, QrcodeOutlined} from '@ant-design/icons';
import Application from '../Application';
import Platform from '../Platform';
import Equipment from '../Equipment'

const {TabPane} = Tabs;
export default class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activedSubTabsKey: 'application'
    }
  }

  subTabPaneChange = (key) => {
    this.setState({
      activedSubTabsKey: key
    })
  };

  render() {
    return (
      <div className={styles['distribute-content']}>
        <div>
          <p>概览</p>
          <div className={styles.overview}>
            <section>
              <div className={styles.icon_content}><SplitCellsOutlined/></div>
              <p>应用</p>
              <p>已上架/总数 <span className={styles.overview_num}>20/50</span></p>
            </section>
            <section>
              <div className={styles.icon_content}><BarcodeOutlined/></div>
              <p>平台</p>
              <p>已上架/总数 <span className={styles.overview_num}>20/50</span></p>
            </section>
            <section>
              <div className={styles.icon_content}><ReconciliationOutlined/></div>
              <p>资源</p>
              <p>已上架/总数 <span className={styles.overview_num}>20/50</span></p>
            </section>
            <section>
              <div className={styles.icon_content}><QrcodeOutlined/></div>
              <p>设施</p>
              <p>已上架/总数 <span className={styles.overview_num}>20/50</span></p>
            </section>
          </div>
        </div>
        <div className={styles.table_content}>
          <Tabs defaultActiveKey={this.state.activedSubTabsKey} type="card" onChange={this.subTabPaneChange}>
            <TabPane tab="应用" key="application">
              <Application></Application>
            </TabPane>
            <TabPane tab="平台" key="platform">
              <Platform></Platform>
            </TabPane>
            <TabPane tab="设施" key="equipment">
              <Equipment></Equipment>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }

  componentDidMount() {
  }
}

