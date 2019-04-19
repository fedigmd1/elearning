import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Explications } from '../../../../api/explications';
import NewQuestion from './newquestion';
import { Icon } from 'antd';


class Questionform extends Component {
   constructor(props) {
    super(props)
    this.state = {
      question: ""
    }
  }
  addquestion = () => {
    if (this.state.question == "")
    {this.setState({question: "exist" })}
    else if (this.state.question= "exist")
    {this.setState({question: "" })}
  }

  render(){
    return (
      <div className="">
        <center>
          {this.props.explications? this.props.explications.map((e,i) => {
            return (
              <div key={i}>
              <h4><strong>{e.senderName}:</strong>{e.question}</h4><h3>{e.response}</h3>
              </div>
              )
            })
        :null 
      }
        <Icon type="plus-circle" onClick={() => this.addquestion()} style={{ fontSize: '30px', color: '#000' }} />
          {this.state.question == "exist" ? <NewQuestion element={this.props.element} currentUser={this.props.currentUser}/> : null}
        </center>
      </div>
    )
  }
}

export default withTracker((props) => {
  Meteor.subscribe('explications');

  return {
    explications: Explications.find({ elementId: props.element._id }).fetch(),
  };
}) (Questionform);


