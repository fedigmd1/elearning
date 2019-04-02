import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import {Courses} from '../../../api/courses'
import author from '../../../../client/assets/images/author.jpg'
import {Link } from 'react-router-dom'



class cours extends Component {

 constructor(props) {
    super(props);
  }
 
  render(){
    
    return (
      <div>
        <center><h1>Test</h1></center>
        {this.props.course ? (
          <div className="card-body text-center">
            <div className="card-title">
              <span>{this.props.course.text}</span>
            </div>
            <br/>
            <div className="card-text">
              {this.props.course._id}
            </div>
            <br/>
            <div>
              <span>{this.props.course.username}</span>
            </div>
          </div>
        ) :null }
          <Link to='/Courses'>Courses</Link>
      </div>
    );
  }
}
export default withTracker((props) => {
  Meteor.subscribe('courses');
  return {
    
    course: Courses.findOne({"_id": props.match.params.id })

  };
}) (cours); 