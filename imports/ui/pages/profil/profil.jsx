import React, {Component}from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'


class profil extends Component {


  render () {
    return (
      <div>
        <h1>Test</h1>
        
        <h1>It Works!!</h1>
      </div>
    )
  }
}

export default withTracker(() => {
  let users= Meteor.users
  console.log(users);
  return {
    currentUser: Meteor.user(),
    users,
  };
}) (profil);