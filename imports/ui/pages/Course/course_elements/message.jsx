import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Message extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit = (event,element) => {
    event.preventDefault()
    console.log(this.state.message) 
    console.log(element);
    Meteor.call('elements.text', element._id, this.state.message)
    this.setState({message: ''})
  }
  render() {
    return (
      <div>
        {this.props.element ?
          this.props.element.text=="" ?
          <form onSubmit={(event)=> this.handleSubmit(event, this.props.element)}>
            <textarea rows="8" cols="50" value={this.state.message} onChange={this.handleChange} />
            <input type="submit" value="Add" />
          </form>
          :
          <h4 style={{color: '#F01515'}} >{this.props.element.text} </h4>
          :null
        }
      </div>
    );
  }
}

