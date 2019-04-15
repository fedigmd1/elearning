import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Elements = new Mongo.Collection('elements');

if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish elements that are public or belong to the current user
  Meteor.publish('elements', function elementsPublication() {
    return Elements.find({})
  });

  /* Meteor.publish('courses', function coursesPublication() {
    return Courses.find({ owner: this.userId });
  }); */
}
 
Meteor.methods({

  'elements.insert'(name, contents, postion, length, width, courseId) {
    check(name, String);
    //check(description, String);
    //check(courseId, String);
    const course = Courses.findOne(courseId);


    // Make sure the user is logged in before inserting a element
    if ( (!this.userId) || (course.owner !== this.userId) ){
      throw new Meteor.Error('not-authorized');
    }
 
    Elements.insert({
      name,
      contents,
      postion,
      length,
      width,
      courseId,
      createdAt: new Date(),
    });
  },

  'elements.remove'(elementId,courseId) {
    
    check(elementId, String);
    check(courseId, String);
    
    //const element = Elements.findOne(elementId);
    const course = Courses.findOne(courseId);

    if (course.owner !== this.userId) {
      // If the element is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Elements.remove(elementId);
  },
  'elements.position'(elementId,courseId, x,y,z) {
    check(elementId, String);
    check(courseId, String);

    const course = Courses.findOne(courseId);

    if (course.owner !== this.userId) {
      // If the element is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Elements.update(elementId, { $set: { position1: x, position2: y, position3: z } });
  },

  'elements.contents'(elementId, courseId, contents) {
    check(elementId, String);
    check(courseId, String);
    check(contents, String);

    const course = Courses.findOne(courseId);

    if (course.owner !== this.userId) {
      // If the element is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Elements.update(elementId, { $set: { contents: contents } });
  },


  'elements.coordonnees'(elementId, courseId, length, width) {
    check(elementId, String);
    check(courseId, String);
    //check(setToPrivate, Boolean);
 
    const course = Courses.findOne(courseId);
 
    // Make sure only the element owner can make a element private
    if (course.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Elements.update(elementId, { $set: { length: length, width: width } });
  },



});