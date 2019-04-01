import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import TrackerReact from 'meteor/ultimatejs:tracker-react'; 

import { Courses } from '../../api/courses';


// Course component - represents a single todo item

export default class Course extends TrackerReact(Component) {
  
  toggleChecked() {
    // Set the checked property to the opposite of its current value
     Meteor.call('courses.setChecked', this.props.course._id, !this.props.course.checked);
  }
 
  deleteThisCourse() {
    Meteor.call('courses.remove', this.props.course._id);
  }

  togglePrivate() {
    Meteor.call('courses.setPrivate', this.props.course._id, ! this.props.course.private);
  }

  render() {
    // Give courses a different className when they are checked off,
    // so that we can style them nicely in CSS
    const courseClassName = classnames({
      checked: this.props.course.checked,
      private: this.props.course.private,
    }); 
    


    return (
      <div className={courseClassName}>
        <button className="delete" onClick={this.deleteThisCourse.bind(this)}>
          &times;
        </button>
 
        <input
          type="checkbox"
          readOnly
          checked={!!this.props.course.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
            { this.props.course.private ? 'Private' : 'Public' }
          </button>
        ) : ''}

        <span className="text">
          <strong>{this.props.course.username}</strong>: {this.props.course.text}
        </span>
      </div>
    );
  }
}
