import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Courses } from '../../../api/courses'
import { Elements } from '../../../api/elements'

import Animate from './course_animation/animate'

class donnerCours extends Component {

  constructor(props) {
    super(props);
  }
  
  

  render() {
    return (   
      <div>   
        <center>
          {this.props.course ?
            <h1>
              {this.props.course.text}
            </h1>
            : ( <div><h1>Sorry, this course does not exist!</h1></div> )
          }
        </center>
        <br/>
        {this.props.course && this.props.currentUser ? this.props.course.owner == this.props.currentUser._id ?
        (<Animate id={this.props.match.params.id} elements={this.props.elements} />)
        :<Attend elements={this.props.elements} />
        :null } 
      </div>
    )
  }   
}
export default withTracker((props) => {
  Meteor.subscribe('courses');
  Meteor.subscribe('elements');

  return {
    currentUser: Meteor.user(),
    elements: Elements.find({ courseId: props.match.params.id }).fetch(),
    course: Courses.findOne({ "_id": props.match.params.id }),
  };
}) (donnerCours);
