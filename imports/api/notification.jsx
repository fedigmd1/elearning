import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Notifications = new Mongo.Collection('notifications');

if (Meteor.isServer) {
  // This code only runs on the server
   Meteor.publish('notifications', function notificationsPublication() {
    return Notifications.find({})
  });
}
 
Meteor.methods({
  'notifications.insert'(username, text, type) {

    // Make sure the user is logged in before inserting a notifications
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    
    Notifications.insert({
      username,
      text,
      view: false ,
      type,
      checked: false,
      createdAt: new Date(),
    });
  },
  

  'notifications.setview'(notificationId) {
    check(notificationId, String);

    // Make sure only the course owner can make a course private
    if (course.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Notifications.update(notificationId, { $set: { view: true } });
  },

  'notifications.remove'(notificationsId) {
    check(notificationsId, String);

    const notifications = Notifications.findOne(notificationsId);
    
    // if (notifications.owner !== this.userId) {
    //   // make sure only the owner can delete it
    //   throw new Meteor.Error('not-authorized');
    // }
    Notifications.remove(notificationsId);
  },

});