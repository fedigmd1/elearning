import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Notifications } from './notification';

 
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

    let notification =  " Added a new reclamation"
    let type = "reclamationsadd"
    Meteor.call('notifications.insert', Meteor.users.findOne(senderId).username, notification, type)

  },

  'reclamation.response'(reclamationId, response) {
    check(reclamationId, String);
    check(response, String);

    if (! this.userId) {
    // Make sure the user is logged in before inserting a reclamation
      throw new Meteor.Error('not-authorized');
    }

    Reclamations.update(reclamationId, { $set: { response: response } });
    const reclamation = Reclamations.findOne(reclamationId)
    
    let notification =  " We answered your reclamation"
    let type = "reclamationsres"
    Meteor.call('notifications.insert', reclamation.sendername, notification, type)


  },

  'reclamation.remove'(reclamationId) {
    check(reclamationId, String);
    
    if (! this.userId) {
    // Make sure the user is logged in before inserting a reclamation
      throw new Meteor.Error('not-authorized');
    }
    
    const reclamation = Reclamations.findOne(reclamationId)
    Reclamations.remove(reclamationId);


    let notification =  " delete his reclamation"
    let type = "reclamationsdeladmin"
    Meteor.call('notifications.insert', reclamation.sendername, notification, type)
  },

  'reclamation.remove2'(reclamationId) {
    check(reclamationId, String);
    
    if (! this.userId) {
    // Make sure the user is logged in before inserting a reclamation
      throw new Meteor.Error('not-authorized');
    }
    
    const reclamation = Reclamations.findOne(reclamationId)
    Reclamations.remove(reclamationId);


    let notification =  " We delete your reclamation"
    let type = "reclamationsdeluser"
    Meteor.call('notifications.insert', reclamation.sendername, notification, type)
  },

});