import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

import image from '../../../../client/assets/images/react.png'
import author from '../../../../client/assets/images/author.jpg'


import {Courses} from '../../../api/courses.jsx'


class Cours extends Component { 

render() {

  return (
    <div>
      { this.props.currentUser ? (
        <div>
        {this.props.currentUser.username}
        <h1>hhh</h1>
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
export default withTracker((props) => {
  Meteor.subscribe('courses');
   
  {props.currentUser ? console.log(props.currentUser) : console.log("False")}  
   let currentUser= Meteor.user();

  return {
    //courses: Courses.find({}).fetch(),
    currentUser,
    courses: Courses.find({"username": props.currentUser.username }).fetch(),

  };

}) (Cours); 