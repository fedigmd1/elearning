import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';     

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('Users', function () {
    return Meteor.users.find({}, {fields: {username: 1, _id: 1, emails: 1 ,profile:1 } });  
  });
  Meteor.users.allow({ remove: function() {
    return true;
  }});
  

}

Meteor.users.remove({ _id: this._id }, function(error, result) {
    if (error) {
        //console.log("Error removing user: ", error);
    } else {
        //console.log("Number of users removed: " + result);
    }
});


Meteor.methods({

  'users.insert'(user) {
    
    Accounts.createUser(user); 
  },
});
