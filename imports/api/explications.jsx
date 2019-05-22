import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Elements } from './elements'
import { Courses } from './courses';
import { Notifications } from './notification';
 
export const Explications = new Mongo.Collection('explications');

if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish explications that are public or belong to the current user
  Meteor.publish('explications', function explicationsPublication() {
    return Explications.find({});
  });
}
 
Meteor.methods({

  'explications.insert'(elementId, elementkind, senderId, senderName, question) {

    // Make sure the user is logged in before inserting a explication
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Explications.insert({
      elementId,
      elementkind,
      senderId,
      senderName,
      question,
      response: ""
    });

    let notification = "Added a new question in"+ +" course"
    let type = "explications"
    Meteor.call('notifications.insert', senderName, notification, type)

  },

  'explications.response'(explicationId, response) {
    check(explicationId, String);
    check(response, String);

    const explication = Explications.findOne(explicationId)
    const element = Elements.findOne(explication.elementId)
    const course = Courses.findOne(element.courseId)

    if (course.owner !== this.userId) {
      // If the course is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    
    Explications.update(explicationId, { $set: { response: response } });

    let notification =  " answered your question"
    let type = "explications"
    Meteor.call('notifications.insert', course.username, notification, type)
  },

  'explications.remove'(explicationId) {
    check(explicationId, String);

    const explication = Explications.findOne(explicationId)
    const element = Elements.findOne(explication.elementId)
    const course = Courses.findOne(element.courseId)
    
    if (explication.senderId !== this.userId || course.owner !== this.userId) {
      // make sure only the sender or the course owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    let notification =  " removed explanation of " + explication.senderName
    let type = "explications"
    Meteor.call('notifications.insert', course.username, notification, type)

    explications.remove(explicationId);
  },

});