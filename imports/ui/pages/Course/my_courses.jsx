import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
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
          ):null
        }
        <div className="row course_boxes">
          {this.props.courses ? this.props.courses.map((course, i) => {
            return (
              <div key={i} className="col-lg-4 course_box">
                <div className="card">
                  <img
                    className="card-img-top"
                    src=""
                    alt=""
                  />  
                <div className="card-body text-center" key={i} >
                  <div className="card-title">
                    <Link to={`/Courses/${course._id}`}><span>{course.text}</span></Link>   
                  </div>
                  <div className="card-text">
                    <br/>
                    {course.description}
                  </div>
                </div>
              </div>
            </div> 
            )
          }) :null}
        </div>
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