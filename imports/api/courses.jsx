import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Courses = new Mongo.Collection('courses');

if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish courses that are public or belong to the current user
  Meteor.publish('courses', function coursesPublication() {
    return Courses.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}
 
Meteor.methods({
  'courses.insert'(text, description, contenu ) {
    check(text, String);
    check(description, String);
    check(contenu, Object);


    // Make sure the user is logged in before inserting a course
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Courses.insert({
      text,
      description,
      contenu,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'courses.remove'(courseId) {
    check(courseId, String);

    const course = Courses.findOne(courseId);
    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Courses.remove(courseId);
  },
  'courses.setChecked'(courseId, setChecked) {
    check(courseId, String);
    check(setChecked, Boolean);

    const course = Courses.findOne(courseId);
    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Courses.update(courseId, { $set: { checked: setChecked } });
  },

  'courses.setPrivate'(courseId, setToPrivate) {
    check(courseId, String);
    check(setToPrivate, Boolean);
 
    const course = Courses.findOne(courseId);
 
    // Make sure only the course owner can make a course private
    if (course.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Courses.update(courseId, { $set: { private: setToPrivate } });
  },




});