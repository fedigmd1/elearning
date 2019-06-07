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

import backgroun from '../../../../client/assets/images/back.jpg'
import Photo from './course_elements/xphotocourse';
import { Popconfirm, message, Icon } from 'antd';



class Cours extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      id: "",
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

  deleteThisCourse(id) {
    this.setState({ id: id })
    
  }

  confirm(e) {
    if (this.state.id != ""){
      console.log("test test");
      Meteor.call('courses.remove2', this.state.id)
      message.success('Course has been deleted');
    }
  }


  render(){

    return (
      <div className="super_container" style={{ background: '#1a1a1a'}}>
        <Header/>
        <div className="home">
          <div className="home_background_container prlx_parent">
            <div
              className="home_background prlx"
              style={{ backgroundImage: `url(${backgroun})` }}
            />
          </div>
          <br/><br/><br/>
          <div className="home_content text_contente">
            <h1>Courses</h1>
          </div>
        </div>
        <div className="popular page_section">
          <div className="page_content">
            <center>  
              <h1 className="text_content" >Sort by</h1>
              <select onChange={e=> {this.sortCourses(e)}}>
                <option value="text">Name</option>
                <option value="createdAt">CreatedAt</option>
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
                    {this.props.currentUser ? this.props.currentUser.profile.type == "Admin" &&
                      <div>
                        <Popconfirm
                          title="Are you sure to delete this course?"
                          onConfirm={this.confirm.bind(this)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <button className="delete btn btn-danger" onClick={()=> this.deleteThisCourse(course._id)}>
                            <Icon type="close-circle" />
                          </button>
                        </Popconfirm>
                      </div>
                      :null
                    }
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
                        <br/>
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