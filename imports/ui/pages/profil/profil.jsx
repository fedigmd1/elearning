import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import Header from '../header/header';
import Current from './currentprofile';
import User from './userprofile';

class profil extends Component {
 
  render () {
    return (
      <div>
        <Header/>
        <br/><br/><br/><br/><br/><br/>
        {this.props.match.params.id ? (this.props.currentUser)
        && (this.props.currentUser._id==this.props.match.params.id) ?
            <Current currentUser={this.props.currentUser}/>
            : this.props.user ?  (
            <User user={this.props.user} />
          ): <h1>Sorry! This User does not exist !</h1>
          : this.props.currentUser ? (
            <Current currentUser={this.props.currentUser}/>                      
          ) : null 
        }
      </div>
    )
  }
}

export default withTracker((props) => {
  Meteor.subscribe('Users');
  let user= Meteor.users.findOne({"_id": props.match.params.id })
  let currentUser= Meteor.user()
  
  return {
    currentUser,
    user,
  };
}) (profil);