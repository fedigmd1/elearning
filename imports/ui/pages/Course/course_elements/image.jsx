import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Image extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      data: ""
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFile(e) {

    let file = e.target.files[0]
    this.setState({image: file})

  }
  handleUpload (e,element) {

    let photo = this.state.image
    let reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = function () {
    Meteor.call('elements.image', element._id, reader.result)
    console.log("file",reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  render(){
    
    return (
      <div className="">
      {this.props.element ?
          this.props.element.src =="" ?
      <form
        className="form col-md-12 center-block">
        <div className="">
          <input type="file"
            onChange={(e) => this.handleFile(e)}
            placeholder="image"/>
        </div>
        <br/>
        <button type="button" onClick={(e)=> this.handleUpload(e,this.props.element)}>Upload</button>
      </form>
      :<img
          style={{ width: 300, height: 300 }}
          src={this.props.element.src}
        />
      :null
      }
      </div>

    );
  }
}

