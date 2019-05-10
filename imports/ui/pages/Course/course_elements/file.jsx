import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

export default class File extends Component { 

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
    Meteor.call('elements.text', element._id, this.state.text)
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        {this.props.element ?
          this.props.element.text=="" ?
          <form onSubmit={(event)=> this.handleSubmit(event, this.props.element)}>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
            <input type="submit" value="Add" />
          </form>
          :
          <a href={this.props.element.text}>
          {this.props.element.text}
          </a>

          :null
        }
      </div>
    );
  }
}