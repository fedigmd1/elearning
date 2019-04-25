import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Text extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(event.target.value);
    
    let text = this.state.text
    console.log('11111');    
    console.log(text);
    console.log('22222');
  }

  render(){
    
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <textarea rows="10" cols="80"
          // onChange={(e) => this.setState({ text: e.target.value })}
          />
          <br/>
          <input type="textarea">
            <nom>demande</nom>
          </input>

          <input type="submit"/>
        </form>
      </div>

    );
  }
}