/*import React from 'react';
import styles from './index.module.scss';

export default ({ title }) => <h5 className={styles.title}>{title}</h5>;*/

import React from 'react';
import styles from './index.module.scss';
import { Table } from 'antd';


export default function TableTreeCompontent(props)  {

  return (
    <div className={styles['tableTree-content']}>
      <Table className={styles['tableTree-compontent']}
             loading={props.isLoading}
             columns={props.columns}
             pagination={false}
             dataSource={props.dataSource}></Table>

    </div>
  );

}

