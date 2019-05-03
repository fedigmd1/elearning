import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Courses } from './courses';
import { Explications } from './explications';
 
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

  'elements.insert'(obj) {
    
    const course = Courses.findOne(obj.courseId);


    // Make sure the user is logged in before inserting a element
    if ( (!this.userId) || (course.owner !== this.userId) ){
      throw new Meteor.Error('not-authorized');
    }
 
    Elements.insert(obj);
  },

  'elements.remove'(elementId) {
    check(elementId, String);
    
    const element = Elements.findOne(elementId);
    const course = Courses.findOne(element.courseId);

    if (course.owner !== this.userId) {
      // If the element is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Elements.remove(elementId);
    Explications.remove({
      elementId: elementId
    });
  },
  'elements.position'(elementId, x,y,z) {
    check(elementId, String);

    const element = Elements.findOne(elementId);
    const course = Courses.findOne(element.courseId);

    if (course.owner !== this.userId) {
      // If the element is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Elements.update(elementId, { $set: { position1: x, position2: y, position3: z } });
  },

  'elements.text'(elementId, contents) {
    check(elementId, String);
    
    const element = Elements.findOne(elementId);
    const course = Courses.findOne(element.courseId);

    if (course.owner !== this.userId) {
      // If the element is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Elements.update(elementId, { $set: { text: contents } });
  },


  'elements.video'(elementId, contents) {
    check(elementId, String);
    
    const element = Elements.findOne(elementId);
    const course = Courses.findOne(element.courseId);

    if (course.owner !== this.userId) {
      // If the element is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Elements.update(elementId, { $set: { url: contents } });
  },

  'elements.image'(elementId, contents) {
    check(elementId, String);
    
    const element = Elements.findOne(elementId);
    const course = Courses.findOne(element.courseId);

    if (course.owner !== this.userId) {
      // If the element is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Elements.update(elementId, { $set: { src: contents } });
  },

  'elements.coordonnees'(elementId, length, width) {
    check(elementId, String);
    
    const element = Elements.findOne(elementId);    
    const course = Courses.findOne(element.courseId);
 
    // Make sure only the element owner can make a element private
    if (course.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Elements.update(elementId, { $set: { length: length, width: width } });
  },



});