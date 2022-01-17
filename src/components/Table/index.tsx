
import React,{Component,useState}  from 'react';
import styles from './index.module.scss';
import { Table,Pagination } from 'antd';


export default class TableCompontent extends Component  {
    constructor(props){
        super(props);
        this.state = {
            initTableHeight:0,
        }
    }
    componentDidMount(){
        //this.computedTableHeight();
    }
    computedTableHeight = () =>{
        let tableHeight = document.getElementById('tableComponent').clientHeight-40;
        this.setState({initTableHeight:tableHeight});
    }


    onChangePage = (pageNumber,pageSize) =>{
        this.props.changePage(pageNumber,pageSize);
    };
    onSelectChange = (selectedRowKeys,selectedRows) => {
        this.props.selectedRow(selectedRows);
    };


    render() {
        const rowSelection = {
            onChange: this.onSelectChange,
        };
        function showTotal(total) {
            return `共 ${total} 条记录`;
        }
        return (
            <div className={styles['table-content']}>
                <Table
                    id='tableComponent'
                    className={styles['table-compontent']}
                    loading={this.props.isLoading}
                    columns={this.props.columns}
                    pagination={false}
                    rowSelection={this.props.tableConfig.isShowSelect?{
                        type: this.props.tableConfig.multipleSelectionType,
                        ...rowSelection,
                    }:null}
                    rowKey={(record, index) => index}
                    dataSource={this.props.dataSource}
                    //scroll={{ y: this.state.tableHeight }}
                ></Table>
                <Pagination style={{ display: this.props.tableConfig?.isShowPagination?'block':'none'}} className={this.props.tableConfig?.smallPanagement ?'small-pagination-content':styles['pagination-content']}
                            total={this.props.totalSize}
                            showSizeChanger={this.props.tableConfig?.notShowPageChange?false:true}
                            showQuickJumper = {this.props.tableConfig?.notShowQuickJump?undefined:true}
                            current={this.props.current}
                            onChange={this.onChangePage}
                            showTotal={this.props.tableConfig?.notShowTotal?undefined:showTotal}
                />
            </div>
        );
    }


}

