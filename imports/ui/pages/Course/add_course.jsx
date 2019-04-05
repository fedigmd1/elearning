import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'

import {Courses} from '../../../api/courses'
import Course from '../../containers/Course'



class AddCourse extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      text: "",
      nom: "",
      description: ""
    };
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

  handleSubmit(event) {
  
    event.preventDefault();
 
    // Find the text field via the React ref
        console.log(this.state.nom);
        console.log(this.state.description);
       Meteor.call('courses.insert', this.state.nom, this.state.description );

    // Clear form
      this.setState({ nom: "" ,description: "" })
  }

  render () {
    return (
      <div>
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
              <form className="new-course" >
                <input
                  type="text"
                  value={this.state.nom}
                  onChange={(e) => this.setState({ nom: e.target.value })}
                  placeholder="Name"
                />
                <br/>
                <input
                  type="text"
                  value={this.state.description}
                  onChange={(e) => this.setState({ description: e.target.value })}
                  placeholder="Description"
                />
                <button onClick={this.handleSubmit.bind(this)}>Add Course</button>
              </form>
              
              : ''
            }          
        </div>

        <div className="" >
            {this.renderCourses()}
        </div>

      </div>
    )    
  }
}


export default withTracker(() => {
  Meteor.subscribe('courses');
  return {

    courses: Courses.find({}).fetch(),
    incompleteCount: Courses.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),

  };
}) (AddCourse); 