import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import Header from '../../pages/new/header'
import Footer from '../../pages/new/footer'





import {Courses} from '../../../api/courses.jsx'


class Cours extends Component { 

  render() {
    return (
      <div>
        { this.props.currentUser ? (
          <div>
            <center>
              <h1>Welcome <strong>{this.props.currentUser.username}</strong></h1>
            </center>
          </div>
        ):null}
        {this.props.courses ? this.props.courses.map ( (course, i ) => {
          return (
            <div key={i}>
              {course.text}
            </div>
          )
        }):null}
      </div>
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('courses');  
  let currentUser= Meteor.user();
  let a;
  if ((currentUser !== undefined) && (currentUser !== null ) ) {
    a = currentUser.username
    }
    return {
      currentUser,
      courses: Courses.find({"username": a }).fetch()
    };
}) (Cours); 