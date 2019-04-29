import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Text extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event,element) => {
    event.preventDefault()
    console.log(this.state.text) 
    console.log(element);
    Meteor.call('elements.contents', element._id, this.state.text)
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        {this.props.element ?
          this.props.element.text=="" ?
          <form onSubmit={(event)=> this.handleSubmit(event, this.props.element)}>
            <textarea rows="8" cols="50" value={this.state.text} onChange={this.handleChange} />
            <input type="submit" value="Add" />
          </form>
          :
          <h4>{this.props.element.text}</h4>
          :null
        }
      </div>
    );
  }
}