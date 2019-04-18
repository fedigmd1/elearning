import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Explications } from '../../../../api/explications';

class Questionform extends Component {
   constructor(props) {
    super(props)
    this.state = {
      question: ""
    }
  }
  question = () => {
    this.setState({text: id})
  }

  render(){
    return (
      <div className="modal">
        <center>
        {this.props.explications? this.props.explications.map((e,i) => {
          return (
          <div key={i}>
            <h4><stronger>{e.senderName}:</stronger>{e.question}</h4>
          </div>
          )
        })
          :<div>pas de questions</div>
        }
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


