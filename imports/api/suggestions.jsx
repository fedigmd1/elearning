import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Notifications } from './notification';

export const Suggestions = new Mongo.Collection('suggestions');

if (Meteor.isServer) {
  // This code only runs on the server
   Meteor.publish('suggestions', function suggestionsPublication() {
    return Suggestions.find({})
  });
}
 
Meteor.methods({
  
  'suggestions.insert'(id, demande) {
    check(id, String);
    check(demande, String);

    // Make sure the user is logged in before inserting a suggestions
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    
    Suggestions.insert({
      demande,
      owner: id,
      username: Meteor.users.findOne(id).username,
      createdAt: new Date(),
    });

    let notification =  " added a new suggestion"
    let type = "suggestionsadd"
    Meteor.call('notifications.insert', Meteor.users.findOne(this.userId).username, notification, type)

  },
  
  'suggestions.remove'(suggestionsId) {
    check(suggestionsId, String);

    const suggestions = Suggestions.findOne(suggestionsId);
    
    if (suggestions.owner !== this.userId) {
      // make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    let notification =  " remove his suggestion"
    let type = "suggestionsdel"
    Meteor.call('notifications.insert', Meteor.users.findOne(this.userId).username, notification, type)
    
    Suggestions.remove(suggestionsId);
  },
  

});