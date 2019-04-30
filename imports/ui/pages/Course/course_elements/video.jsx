import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'

export default class Video extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      url: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({url: event.target.value})
  }

  handleSubmit = (event,element) => {
    event.preventDefault()
    console.log(this.state.url) 
    console.log(element);
    Meteor.call('elements.video', element._id, this.state.url)
    this.setState({url: ''})
  }
  render() {
    return (
      <div>
        {this.props.element ?
          this.props.element.url=="" ?
          <form onSubmit={(event)=> this.handleSubmit(event, this.props.element)}>
            <textarea rows="1" cols="50" value={this.state.url} onChange={this.handleChange} />
            <input type="submit" value="Add" />
          </form>
          :
          <ReactPlayer url={this.props.element.url} />
          :null
        }
      </div>
    );
  }
}