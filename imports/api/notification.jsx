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
      owner: Meteor.users.findOne({username: username})._id ,
      text,
      view: false ,
      type,
      checked: false,
      createdAt: new Date(),
    });
  },

  'notifications.insert2'(text, type) {

    // Make sure the user is logged in before inserting a notifications
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    
    Notifications.insert({
      username: "We ",
      owner: "Admin" ,
      text,
      view: false ,
      type,
      checked: false,
      createdAt: new Date(),
    });
  },
  

  'notifications.setview'(notificationId) {
    check(notificationId, String);
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