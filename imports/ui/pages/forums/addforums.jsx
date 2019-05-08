import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Forums } from '../../../api/forums';
import { Icon } from 'antd'


export default class Addforums extends Component {
  constructor(props){
    super(props)
    this.state = {
      question: "",
    }
    this.addforum = this.addforum.bind(this);
  }

  addforum (event) {
    event.preventDefault();
    console.log(this.state.question);

    if (this.state.question != '') {
      Meteor.call('forums.insert', this.state.question)
      this.setState({ question: "" })
    }
    else
    alert("taper quelque chose")
  }

  render() {
    return (
      <div>
        <center>
          <div className="form-group">   
            <form onSubmit={this.addforum}>
              <input
                type="text"
                value={this.state.question}
                onChange={(e) => this.setState({ question: e.target.value })}
                placeholder="Any problem ? "
                />
              <br/>
              <Icon type="check-circle" onClick={this.addforum} style={{ fontSize: '30px', color: '#222' }}/>
            </form>
          </div>
        </center>
      </div>
    ) 
  }
}