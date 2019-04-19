import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Icon } from 'antd'

export default class NewQuestion extends Component {
   constructor(props) {
    super(props)
    this.state = {
      question: ""
    }
  }

  explication (event) {
    event.preventDefault();
    console.log(this.state.question);
    Meteor.call('explications.insert',this.props.element._id,
      this.props.element.kind, this.props.currentUser._id,
      this.props.currentUser.username, this.state.question)

    this.setState({ question: "" })
  }
  render(){
    return (
      <div className="form-group">
        <center>
          <form>
            <input
              type="text"
              value={this.state.question}
              onChange={(e) => this.setState({ question: e.target.value })}
              placeholder="Question"
            />
            <br/>
            <Icon type="check-circle" onClick={this.explication.bind(this)} style={{ fontSize: '30px', color: '#222' }}/>
          </form>
        </center>
      </div>
    )
  }
}

