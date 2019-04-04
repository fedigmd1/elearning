import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'

class profil extends Component {
 
  render () {
    console.log(this.props.match.params.id);
    return (
      <div>
        {this.props.match.params.id ? this.props.user ? (
            <div>
            <h1>user</h1>
            {this.props.user.username}
            {this.props.user.emails.address}
            
            {console.log(this.props.user.emails)}
            
            </div>
          ): <div>
              <h1>Sorry! This User does not exist !</h1>
            </div>
          : this.props.currentUser ? (
            <div>
            <h1>currentUser</h1>
            {this.props.currentUser.username}
            {this.props.currentUser._id}
            </div>
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
  /* 
   if (user !== undefined){
    console.log(user)
    console.log(currentUser)
  }
  */
  return {
    currentUser,
    user,
  };
}) (profil);