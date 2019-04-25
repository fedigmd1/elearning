import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import fs from 'fs'

export const Files = new Mongo.Collection('files');

if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish explications that are public or belong to the current user
  Meteor.publish('files', function filesPublication() {
    return Files.find({});
  });
}
 
Meteor.methods({


'files.upload'(fileInfo, fileData)  {

console.log("aaaaaaa");

  console.log("received file " + fileInfo.name + " data: " + fileData);
  fs.writeFile(fileInfo.name, fileData);
}

})