import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'


class Photo extends Component { 

  constructor(props) {
    super(props);
  }

  render(){
    
    return (
      <div className="course_author_image">
      {this.props.user ?
        <img
          style={{ width: 100, height: 100 }}
          src={this.props.user.profile.avatar}
          alt=""
        />
        : null
      }
      </div>

    );
  }
}

export default withTracker((props) => {
  Meteor.subscribe('Users');
  return {
    user: Meteor.users.findOne({"_id": props.course.owner })
  };
}) (Photo);