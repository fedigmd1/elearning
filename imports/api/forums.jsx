import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Notifications } from './notification';

export const Forums = new Mongo.Collection('forums');

if (Meteor.isServer) {
  // This code only runs on the server
   Meteor.publish('forums', function forumsPublication() {
    return Forums.find({})
  });
}
 
Meteor.methods({
  'forums.insert'(question) {
    check(question, String);

    // Make sure the user is logged in before inserting a Forums
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    
    Forums.insert({
      question,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });

    let notification =  " added a new question in the Forums"
    let type = "forums"
    Meteor.call('notifications.insert', Meteor.users.findOne(this.userId).username, notification, type)

  },
  
  'forums.remove'(forumsId) {
    check(forumsId, String);

    const forums = Forums.findOne(forumsId);
    
    if (forums.owner !== this.userId) {
      // make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    let notification =  " added a new question in the Forums"
    let type = "forums"
    Meteor.call('notifications.insert', Meteor.users.findOne(this.userId).username, notification, type)
    
    Forums.remove(forumsId);
  },
  

});