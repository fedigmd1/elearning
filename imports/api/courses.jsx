import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Elements } from './elements'
 
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
  'courses.insert'(text, description, image) {
    check(text, String);
    check(description, String);


    // Make sure the user is logged in before inserting a course
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Courses.insert({
      text,
      description,
      image,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      tabrate: [],
      rating: 5,
    });
  },
  'courses.remove'(courseId) {
    check(courseId, String);

    const course = Courses.findOne(courseId);
    
    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    
    Courses.remove({
      _id: courseId
    });
    Elements.remove({
      courseId: courseId
    });
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

'courses.image'(courseId, image) {
    check(courseId, String);
    check(setChecked, Boolean);

    const course = Courses.findOne(courseId);
    if (course.owner !== this.userId) {
      // If the course is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Courses.update(courseId, { $set: { image: image } });
  },



  'courses.rating'(courseId, vote) {
    check(courseId, String);

    Courses.update(courseId, { $push: { tabrate: vote } })

    let average=0
    let tab = 0
    const course = Courses.findOne(courseId);

    for (let i = 0; i<course.tabrate.length ; i++){
      tab = tab + course.tabrate[i]
    }

    average = tab/course.tabrate.length
    Courses.update(courseId, { $set: { rating: average } })

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


  'courses.setElements'(courseId, setElement) {
    check(courseId, String);
    //check(setElement, Object);

    const course = Courses.findOne(courseId);
    if (course.owner !== this.userId) {
      // If the course is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Courses.update(courseId, { $push: { elements: setElement } });
  },




});