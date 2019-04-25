import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class File extends Component { 

  constructor(props) {
    super(props);
  }

  render(){
    
    return (
      <div className="">
        <input type="file"/>
      </div>

    );
  }
}