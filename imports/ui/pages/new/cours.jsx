import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import Header from './header'
import Footer from './footer'

import image from '../../../../client/assets/images/react.png'
import author from '../../../../client/assets/images/author.jpg'


import {Courses} from '../../../api/courses.jsx'
import Course from '../../containers/Course.jsx'

//import backgroun from '../../../../client/assets/images/courses_background.jpg'


export class Cours extends Component { 

  constructor(props) {
    super(props);
 
    this.state = {
      text: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
      console.log(text);
      Meteor.call('courses.insert', text); 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  sortCourses(event) {
    let x=event.target.value;
    //console.log(x); 
    this.setState({text: x })
  }
  
  renderCourses() {
    let filteredCourses = this.props.courses;
    //console.log(this.state.text)
    if (this.state.text=="text") {
      filteredCourses = filteredCourses.sort((a,b)=>{
       return a.text.localeCompare(b.text)
      })
    }
    else if (this.state.text=="createdAt")
    {
      filteredCourses = filteredCourses.sort((a,b)=>{
        return b.createdAt-a.createdAt
      });
    }

    if (this.state.hideCompleted) {
      filteredCourses = filteredCourses.filter(course => !course.checked);
    }

    return (
      filteredCourses.map((course) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = course.owner === currentUserId;
 
      return (
        <Course
          key={course._id}
          course={course}
          showPrivateButton={showPrivateButton}
        />
      );
    })

    )
  }

  render(){
    
    return (
      <div className="super_container">
      

       {/* <Header/>   */}


          <div className="">
            <h1>Courses </h1>
            <label className="hide-completed">
              <input
                type="checkbox"
                readOnly
                checked={this.state.hideCompleted}
                onClick={this.toggleHideCompleted.bind(this)}
              />
              Hide Completed Courses
            </label>

          
            <select onChange={e=> {this.sortCourses(e)}}>
              <option value="text">Nom</option>
              <option value="createdAt">Date de creation</option>
            </select>


            { this.props.currentUser ?
              <form className="new-course" onSubmit={this.handleSubmit.bind(this)} >
                <input
                  type="text"
                  ref="textInput"
                  placeholder="Type to add new courses"
                />
              </form> : ''
            }          
          </div>

          <div className="" >
            {this.renderCourses()}
          </div>


        <div className="home">
          <div className="home_background_container prlx_parent">
            <div
              className="home_background prlx"
              style={{ backgroundImage: "url(images/courses_background.jpg)" }}
            />
          </div>

          <div className="home_content">
              <h1>Courses</h1>
          </div>
        </div>
          
        <div className="popular page_section">
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
                      <img
                        className="card-img-top"
                        src={image}
                        alt="https://unsplash.com/@kimberlyfarmer"
                      />  
                      

                      <div className="card-body text-center">
                        <div className="card-title">
                          <a href="/Course_details">{course.text}</a>                          
                        </div>
                        <div className="card-text">
                          {course._id}
                        </div>
                      </div>
                      <div className="price_box d-flex flex-row align-items-center">
                        <div className="course_author_image">
                          <img
                            src={author}
                            alt="https://unsplash.com/@mehdizadeh"
                          />
                        </div>
                        <div className="course_author_name">
                           <span> {course.username}</span>
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
    incompleteCount: Courses.find({ checked: { $ne: true } }).count(),
        currentUser: Meteor.user(),

  };
}) (Cours); 