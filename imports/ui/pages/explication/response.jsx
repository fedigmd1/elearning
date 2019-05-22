import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Explications } from '../../../api/explications';
import { Modal, Button } from 'antd';

class Responseform extends Component {
   constructor(props) {
    super(props)
    this.explication = this.explication.bind(this)
    this.state = {
      response: '',
      clicked: false,
      id: "",
      visible: true,
    }
  }

  explication = (event, id) => {
    event.preventDefault();
    console.log(id)
    Meteor.call('explications.response', id, this.state.response )
    this.setState({ response: "" })
  }

  click = (id) => {
    if (this.state.clicked == false)
    {this.setState({clicked: true })}
    else if (this.state.clicked= true )
    {this.setState({clicked: false })}

    this.setState({ id: id })
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render(){
    return (
      <div className="form-group">
      <Modal
          visible={this.state.visible}
          title="Questions list"
          onCancel={this.handleCancel}
          footer={[
            <center>
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>
            </center>
          ]}
        >
        <center>
        {this.props.explications? this.props.explications.map((e,i) => {
          return (
          <div key={i}>
            <form>
              <div onClick={() => this.click(e._id)}><strong>{e.senderName}:</strong>{e.question}</div>
              {this.state.id == e._id && this.state.clicked== true ?
                <div>
                  <input
                  type="text"
                  onChange={(e) => this.setState({ response: e.target.value })}
                  value={this.state.response}
                  placeholder={e.response}
                  />
                  <button onClick={(event) => this.explication(event, e._id)}>Response</button>
                </div>
              :null}

            </form>
          </div>
          )
        })
          :null 
        }
        </center>
        </Modal>
      </div>
    )
  }
}

export default withTracker((props) => {
  Meteor.subscribe('explications');

  return {
    explications: Explications.find({ elementId: props.element._id }).fetch(),
  };
}) (Responseform);
