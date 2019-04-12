import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Elements = new Mongo.Collection('elements');

if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish courses that are public or belong to the current user
  Meteor.publish('elements', function elementsPublication() {
    return Elements.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}
 
Meteor.methods({
  'elements.insert'(text, description, idCourse ) {
    check(text, String);
    check(description, String);
    check(idCourse, String);


    // Make sure the user is logged in before inserting a course
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Elements.insert({
      name,
      description,
      idCourse: this.userId,
      createdAt: new Date(),
    });
  },
  'elements.remove'(courseId) {
    check(courseId, String);

    const course = Courses.findOne(courseId);
    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Courses.remove(courseId);
  },
  'elements.setChecked'(courseId, setChecked) {
    check(courseId, String);
    check(setChecked, Boolean);

    const course = Courses.findOne(courseId);
    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Courses.update(courseId, { $set: { checked: setChecked } });
  },

  'elements.setPrivate'(courseId, setToPrivate) {
    check(courseId, String);
    check(setToPrivate, Boolean);
 
    const course = Courses.findOne(courseId);
 
    // Make sure only the course owner can make a course private
    if (course.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Courses.update(courseId, { $set: { private: setToPrivate } });
  },


  'elements.setElements'(courseId, setElement) {
    check(courseId, String);
    check(setElement, Object);

    const course = Courses.findOne(courseId);
    if (course.owner !== this.userId) {
      // If the course is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Courses.update(courseId, { $push: { elements: setElement } });
  },




});