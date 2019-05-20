import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import {Courses} from '../../../api/courses.jsx'

class Cours extends Component { 


  deleteThisCourse(id) {

    Meteor.call('courses.remove', id);
  }




  render() {
    return (
      <div>
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/>
        <div className="row course_boxes">
          {this.props.courses ? this.props.courses.map((course, i) => {
            return (
              <div key={i} className="col-lg-4 course_box">
              {this.props.currentUser ? this.props.currentUser._id == course.owner ?
                <button className="delete btn btn-danger" onClick={()=> this.deleteThisCourse(course._id)}>
                  &times;
                </button>
                :null
                :null
              }
                <div className="card">
                  <center>
                    <img
                      className="card-img-top"
                      style={{ width: 150, height: 150 }}
                      src={course.image}
                      alt=""
                    /> 
                  </center>
                <div className="card-body text-center" key={i} >
                  <div className="card-title">
                    <Link to={`/Courses/${course._id}`}><span>{course.text}</span></Link>   
                  </div>
                  <br/>
                </div>
              </div>
            </div> 
            )
          }) :null}
        </div>
        <br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}
export default withTracker((props) => {
  Meteor.subscribe('courses'); 
  Meteor.subscribe('Users');
  let currentUser= Meteor.user()
  let user= Meteor.users.findOne({"_id": props.match.params.id })
  let a;
  if ((user !== undefined) && (user !== null ) ) {
    a = user.username
    }
    return {
      currentUser,
      user,
      courses: Courses.find({"username": a }).fetch(),
    };
}) (Cours);