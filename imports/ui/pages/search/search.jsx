import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import {Courses} from '../../../api/courses.jsx'


class Search extends Component {


  render () {
    return (
      <div>
        {this.props.courses ? this.props.courses.map((course , i) => {
          return (
            <div key={i} >
              <img
                style={{ width: 250, height: 250 }}
                src={course.image}
                alt="photo du cours"
              />
              <Link to={`/Courses/${course._id}`}><span>{course.text}</span></Link>
              <p>{course.description}</p>
            </div>
          )
        })
        :
        <h1>Sorry this course does not exist !</h1>}
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