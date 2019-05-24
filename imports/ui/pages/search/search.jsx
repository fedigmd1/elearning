import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import {Courses} from '../../../api/courses.jsx'
import Photo from '../../pages/Course/course_elements/xphotocourse';

class Search extends Component {

  render () {
    return (
      <div> 
        {this.props.courses ? this.props.courses.map((course , i) => {
          return (
            <div key={i} className="col-lg-4 course_box" >
              <div className="card" style={{ background: 'rgb(54, 52, 52)'}}>
                <center>
                  <img
                    className="card-img-top"
                    style={{ width: 250, height: 250 }}
                    src={course.image}
                    alt="photo du cours"
                  />  
                </center>
                <div className="card-body text-center ">
                  <div className="card-title">
                    <Link to={`/Courses/${course._id}`}><span>{course.text}</span></Link>   
                  </div>
                  <br/>
                  <div className="card-text">
                    {course.description}
                  </div>
                </div>
                <div className="price_box d-flex flex-row align-items-center" style={{ background: 'rgb(51, 45, 40)'}} >
                  <Photo course ={course}/>
                  <div className="course_author_name">
                    <Link to={`/profil/${course.owner}`}><span> {course.username}</span></Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        : null
        }
        <br/><br/><br/>
      </div>
    );
  }
}

export default withTracker((props) => {
  Meteor.subscribe('courses')
  let search= props.search.charAt(0).toUpperCase() + props.search.slice(1);
  return {
    courses: Courses.find({ text: { $regex: `^${search}` }} ).fetch(),
  };
}) (Search);