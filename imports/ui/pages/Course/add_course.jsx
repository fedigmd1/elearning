import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'

import {Courses} from '../../../api/courses'
import Course from '../../containers/Course'



class AddCourse extends Component {

  constructor(props) {
    super(props);
    // this.details = this.details.bind(this);

 
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



  render () {
    return (
      <div>
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
    )    
  }
}


export default withTracker(() => {
  Meteor.subscribe('courses');
  return {
    
    currentUser: Meteor.user(),

  };
}) (AddCourse); 