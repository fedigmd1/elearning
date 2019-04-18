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

  'reclamations.insert'(senderId, message) {

    // Make sure the user is logged in before inserting a explication
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Reclamations.insert({
      senderId,
      message,
      reponse: ""
    });
  },

  'reclamations.response'(reclamationId, response) {
    check(reclamationId, String);
    check(response, String);

    if (! this.userId) {
    // Make sure the user is logged in before inserting a explication
      throw new Meteor.Error('not-authorized');
    }
    
    Reclamations.update(reclamationId, { $set: { response: response } });
  },

  'reclamations.remove'(explicationId) {
    check(explicationId, String);
    
    if (! this.userId) {
    // Make sure the user is logged in before inserting a explication
      throw new Meteor.Error('not-authorized');
    }
    Reclamations.remove(explicationId);
  },

});