import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import {Link } from 'react-router-dom'


class profil extends Component {
 
  render () {
    console.log(this.props.match.params.id);
    return (
      <div>
        <center>
          {this.props.match.params.id ? (this.props.currentUser) && (this.props.currentUser._id==this.props.match.params.id)?
            <div>
              <h1>currentUser</h1>
              {this.props.currentUser.username}
              {this.props.currentUser._id}
            </div>
              : this.props.user ? (
              <div>
              <h1>user</h1>
              {this.props.user.username}              
              {console.log(this.props.user.emails)}             
              </div>
            ):
                <h1>Sorry! This User does not exist !</h1>
            : this.props.currentUser ? (
              <div>
              <h1>currentUser</h1>
              {this.props.currentUser.username}
              {this.props.currentUser._id}
              </div>
            ) : null 
            }
            <Link to='/Courses'>Courses</Link>
        </center>
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