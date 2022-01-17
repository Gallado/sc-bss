
import React, {Component} from 'react';
import {Modal,Button} from 'antd';

export default class TipsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible:false,

    }
  }
  componentDidMount() {
  }
  know = () =>{
      Modal.destroyAll();
  };
  render() {
    return (
      <div className={"tipsModal-content"}>
          <div className={"tips-info"}>{this.props.message} </div>
          <div className={'tips-know'}>
              <Button type="primary" onClick={this.know.bind(this,0)}>知道了</Button>
          </div>
      </div>
    );
  }
}

