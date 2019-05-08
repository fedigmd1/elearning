import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Reclamations } from '../../../api/reclamations';
import {withTracker} from 'meteor/react-meteor-data'
import { Icon } from 'antd'

class Reclamation extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: ""
    }
  }
  reclamation (event, id) {
    event.preventDefault();
    console.log(this.state.message);
    Meteor.call('reclamation.insert', id, this.state.message)
    this.setState({ message: "" })
  }
  render(){
    return (
      <div className="form-group">
      { this.props.currentUser ? 
        <center>
          <form onSubmit={(e) => this.reclamation(e, this.props.currentUser._id)}>
            <input
              type="text"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              placeholder="Add Reclamation"
              />
            <br/>
            <Icon type="check-circle" onClick={(e) => this.reclamation(e, this.props.currentUser._id)} style={{ fontSize: '30px', color: '#222' }}/>
          </form>
        </center>
        :null 
      }
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
}) (Reclamation); 