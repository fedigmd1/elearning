import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { Modal, Button } from 'antd';


export default class Example extends Component {
  constructor(props){
    super(props);
  this.state = {
    loading: false,
    visible: false,
  };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={this.state.visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>hhhhhhh</p>
        </Modal>
      </div>
    );
  }
}



