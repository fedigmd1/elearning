import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Video extends Component { 

  constructor(props) {
    super(props);
  }

  render(){
    
    return (
      <div className="">
        <input type="file"/>
        <video width="400" controls>
          <source src="" type="video/mp4"/>
        </video>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>

    );
  }
}