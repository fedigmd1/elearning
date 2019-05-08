import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Explications } from '../../../api/explications';

class Responseform extends Component {
   constructor(props) {
    super(props)
    this.explication = this.explication.bind(this)
    this.state = {
      response: "",
      clicked: false,
      id: "",
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

  render(){
    return (
      <div className="form-group">
        <center>
        {this.props.explications? this.props.explications.map((e,i) => {
          return (
          <div key={i}>
            <form>
              <div onClick={() => this.click(e._id)}><strong>{e.senderName}:</strong>{e.question}</div>
              <br/>
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
