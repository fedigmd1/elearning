import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Reclamations = new Mongo.Collection('reclamations');

if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish reclamations that are public or belong to the current user
  Meteor.publish('reclamations', function reclamationsPublication() {
    return Reclamations.find({});
  });
}
 
Meteor.methods({

  'reclamation.insert'(senderId, message) {

    // Make sure the user is logged in before inserting a reclamation
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Reclamations.insert({
      senderId,
      sendername: Meteor.users.findOne(senderId).username,
      message,
      response: "",
    });
  },

  'reclamation.response'(reclamationId, response) {
    check(reclamationId, String);
    check(response, String);

    if (! this.userId) {
    // Make sure the user is logged in before inserting a reclamation
      throw new Meteor.Error('not-authorized');
    }
    
    Reclamations.update(reclamationId, { $set: { response: response } });
  },

  'reclamation.remove'(reclamationId) {
    check(reclamationId, String);
    
    if (! this.userId) {
    // Make sure the user is logged in before inserting a reclamation
      throw new Meteor.Error('not-authorized');
    }
    Reclamations.remove(reclamationId);
  },

});