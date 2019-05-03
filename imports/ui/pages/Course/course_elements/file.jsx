import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class File extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      image: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.image);
  }


  render(){
    
    return (
      <div className="">
      <form
        className="form col-md-12 center-block"
        onSubmit={this.handleSubmit}>
        <input type="file"
          className="form-control input-lg"
          onChange={(e) => this.setState({ image: e.target.files[0] })}
          placeholder="image"/>

        <div className="">
          <input type="submit"
            className="btn btn-lg btn-primary"
            value="Add" />
        </div>

      </form>
      </div>

    );
  }
}