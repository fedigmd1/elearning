import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'

import image from '../../../../client/assets/images/react.png'
import author from '../../../../client/assets/images/author.jpg'


import {Courses} from '../../../api/courses.jsx'
import Course from '../../containers/Course.jsx'
import Cour from './course_details'

import backgroun from '../../../../client/assets/images/courses_background.jpg'
import Photo from './course_elements/xphotocourse';


class Cours extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  sortCourses(event) {
    let x=event.target.value;
    //console.log(x); 
    this.setState({text: x })
  }
  
  renderCourses() {
    let filteredCourses = this.props.courses;

    if (this.state.text=="text") {
      filteredCourses = filteredCourses.sort((a,b)=>{
       return a.text.localeCompare(b.text)
      })
    }
    else if (this.state.text=="createdAt"){
      filteredCourses = filteredCourses.sort((a,b)=>{
        return b.createdAt-a.createdAt
      });
    }
  }

  render(){

    return (
      <div className="super_container">
        <Header/>
        <div className="home">
          <div className="home_background_container prlx_parent">
            <div
              className="home_background prlx"
              style={{ backgroundImage: `url(${backgroun})` }}
            />
          </div>
          <div className="home_content text_content">
            <h1>Courses</h1>
          </div>
        </div>
        <div className="popular page_section">
          <div className="page_content">
            <center>  
              <h1>Sort by</h1>
              <select onChange={e=> {this.sortCourses(e)}}>
                <option value="text">Nom</option>
                <option value="createdAt">Date de creation</option>
              </select>
            </center>
            <div className="" >
              {this.renderCourses()}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
              </div>
            </div>
            <div className="row course_boxes">
              {this.props.courses ? this.props.courses.map((course, i) => {
                return (
                  <div key={i} className="col-lg-4 course_box">
                    <div className="card">
                      <center>
                        <img
                          className="card-img-top"
                          style={{ width: 250, height: 250 }}
                          src={course.image}
                          alt="photo du cours"
                        />  
                      </center>
                      <div className="card-body text-center">
                        <div className="card-title">
                          <Link to={`/Courses/${course._id}`}><span>{course.text}</span></Link>   
                        </div>
                        <div className="card-text">
                          {course.description}
                        </div>
                      </div>
                      <div className="price_box d-flex flex-row align-items-center">
                        <Photo course ={course}/>
                        <div className="course_author_name">
                          <Link to={`/profil/${course.owner}`}><span> {course.username}</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            : null }
            </div>
          </div>
        </div>

        <Footer/>


      </div>

    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('courses');
  return {
    courses: Courses.find({}).fetch(),
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),

  };
}) (Cours); 