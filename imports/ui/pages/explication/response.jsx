import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Explications } from '../../../api/explications';

class Responseform extends Component {
   constructor(props) {
    super(props)
    this.state = {
      response: ""
    }
  }

  explication = (id) => {
    console.log(id)
    console.log(this.state.question)
    Meteor.call('explications.response', id, this.state.response )

    this.setState({ response: "" })
  }

  render(){
    return (
      <div className="form-group">
        <center>
        {this.props.explications? this.props.explications.map((e,i) => {
          return (
          <div key={i}>
            <form>
              <strong>{e.senderName}:</strong>{e.question}
              <br/>
              <input
                type="text"
                onChange={(e) => this.setState({ response: e.target.value })}
                value={this.state.response}
                placeholder={e.response}
              />
              <button onClick={() => this.explication(e._id)}>Response</button>
            </form>
          </div>
          )
        })
          :null 
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
}) (Responseform);
