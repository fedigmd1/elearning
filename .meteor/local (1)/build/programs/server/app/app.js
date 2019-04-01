var require = meteorInstall({"imports":{"api":{"courses.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/api/courses.jsx                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.export({
  Courses: () => Courses
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 2);
const Courses = new Mongo.Collection('courses');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish courses that are public or belong to the current user
  Meteor.publish('courses', function coursesPublication() {
    return Courses.find({
      $or: [{
        private: {
          $ne: true
        }
      }, {
        owner: this.userId
      }]
    });
  });
}

Meteor.methods({
  'courses.insert'(text) {
    check(text, String); // Make sure the user is logged in before inserting a course

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Courses.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },

  'courses.remove'(courseId) {
    check(courseId, String);
    const course = Courses.findOne(courseId);

    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Courses.remove(courseId);
  },

  'courses.setChecked'(courseId, setChecked) {
    check(courseId, String);
    check(setChecked, Boolean);
    const course = Courses.findOne(courseId);

    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Courses.update(courseId, {
      $set: {
        checked: setChecked
      }
    });
  },

  'courses.setPrivate'(courseId, setToPrivate) {
    check(courseId, String);
    check(setToPrivate, Boolean);
    const course = Courses.findOne(courseId); // Make sure only the course owner can make a course private

    if (course.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Courses.update(courseId, {
      $set: {
        private: setToPrivate
      }
    });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// server/main.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.link("../imports/api/courses.jsx");
Meteor.startup(() => {// code to run on server at startup
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY291cnNlcy5qc3giLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkNvdXJzZXMiLCJNZXRlb3IiLCJsaW5rIiwidiIsIk1vbmdvIiwiY2hlY2siLCJDb2xsZWN0aW9uIiwiaXNTZXJ2ZXIiLCJwdWJsaXNoIiwiY291cnNlc1B1YmxpY2F0aW9uIiwiZmluZCIsIiRvciIsInByaXZhdGUiLCIkbmUiLCJvd25lciIsInVzZXJJZCIsIm1ldGhvZHMiLCJ0ZXh0IiwiU3RyaW5nIiwiRXJyb3IiLCJpbnNlcnQiLCJjcmVhdGVkQXQiLCJEYXRlIiwidXNlcm5hbWUiLCJ1c2VycyIsImZpbmRPbmUiLCJjb3Vyc2VJZCIsImNvdXJzZSIsInJlbW92ZSIsInNldENoZWNrZWQiLCJCb29sZWFuIiwidXBkYXRlIiwiJHNldCIsImNoZWNrZWQiLCJzZXRUb1ByaXZhdGUiLCJzdGFydHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxTQUFPLEVBQUMsTUFBSUE7QUFBYixDQUFkO0FBQXFDLElBQUlDLE1BQUo7QUFBV0gsTUFBTSxDQUFDSSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRCxRQUFNLENBQUNFLENBQUQsRUFBRztBQUFDRixVQUFNLEdBQUNFLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUMsS0FBSjtBQUFVTixNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNFLE9BQUssQ0FBQ0QsQ0FBRCxFQUFHO0FBQUNDLFNBQUssR0FBQ0QsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUFrRCxJQUFJRSxLQUFKO0FBQVVQLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0csT0FBSyxDQUFDRixDQUFELEVBQUc7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RG5CLFdBQU8sQ0FBQytCLE1BQVIsQ0FBZUwsUUFBZixFQUF5QjtBQUFFTSxVQUFJLEVBQUU7QUFBRXBCLGVBQU8sRUFBRXNCO0FBQVg7QUFBUixLQUF6QjtBQUNEOztBQXBEWSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDbkJBLElBQUlqQyxNQUFKO0FBQVdILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0QsUUFBTSxDQUFDRSxDQUFELEVBQUc7QUFBQ0YsVUFBTSxHQUFDRSxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFETCxNQUFNLENBQUNJLElBQVAsQ0FBWSw0QkFBWjtBQUdoRUQsTUFBTSxDQUFDa0MsT0FBUCxDQUFlLE1BQU0sQ0FDbkI7QUFDRCxDQUZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IHsgY2hlY2sgfSBmcm9tICdtZXRlb3IvY2hlY2snO1xuIFxuZXhwb3J0IGNvbnN0IENvdXJzZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignY291cnNlcycpO1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIC8vIFRoaXMgY29kZSBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxuICAgLy8gT25seSBwdWJsaXNoIGNvdXJzZXMgdGhhdCBhcmUgcHVibGljIG9yIGJlbG9uZyB0byB0aGUgY3VycmVudCB1c2VyXG4gIE1ldGVvci5wdWJsaXNoKCdjb3Vyc2VzJywgZnVuY3Rpb24gY291cnNlc1B1YmxpY2F0aW9uKCkge1xuICAgIHJldHVybiBDb3Vyc2VzLmZpbmQoe1xuICAgICAgJG9yOiBbXG4gICAgICAgIHsgcHJpdmF0ZTogeyAkbmU6IHRydWUgfSB9LFxuICAgICAgICB7IG93bmVyOiB0aGlzLnVzZXJJZCB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfSk7XG59XG4gXG5NZXRlb3IubWV0aG9kcyh7XG4gICdjb3Vyc2VzLmluc2VydCcodGV4dCkge1xuICAgIGNoZWNrKHRleHQsIFN0cmluZyk7XG4gXG4gICAgLy8gTWFrZSBzdXJlIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiBiZWZvcmUgaW5zZXJ0aW5nIGEgY291cnNlXG4gICAgaWYgKCEgdGhpcy51c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ25vdC1hdXRob3JpemVkJyk7XG4gICAgfVxuIFxuICAgIENvdXJzZXMuaW5zZXJ0KHtcbiAgICAgIHRleHQsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBvd25lcjogdGhpcy51c2VySWQsXG4gICAgICB1c2VybmFtZTogTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lLFxuICAgIH0pO1xuICB9LFxuICAnY291cnNlcy5yZW1vdmUnKGNvdXJzZUlkKSB7XG4gICAgY2hlY2soY291cnNlSWQsIFN0cmluZyk7XG5cbiAgICBjb25zdCBjb3Vyc2UgPSBDb3Vyc2VzLmZpbmRPbmUoY291cnNlSWQpO1xuICAgIGlmIChjb3Vyc2UucHJpdmF0ZSAmJiBjb3Vyc2Uub3duZXIgIT09IHRoaXMudXNlcklkKSB7XG4gICAgICAvLyBJZiB0aGUgY291cnNlIGlzIHByaXZhdGUsIG1ha2Ugc3VyZSBvbmx5IHRoZSBvd25lciBjYW4gZGVsZXRlIGl0XG4gICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgIH1cbiBcbiAgICBDb3Vyc2VzLnJlbW92ZShjb3Vyc2VJZCk7XG4gIH0sXG4gICdjb3Vyc2VzLnNldENoZWNrZWQnKGNvdXJzZUlkLCBzZXRDaGVja2VkKSB7XG4gICAgY2hlY2soY291cnNlSWQsIFN0cmluZyk7XG4gICAgY2hlY2soc2V0Q2hlY2tlZCwgQm9vbGVhbik7XG5cbiAgICBjb25zdCBjb3Vyc2UgPSBDb3Vyc2VzLmZpbmRPbmUoY291cnNlSWQpO1xuICAgIGlmIChjb3Vyc2UucHJpdmF0ZSAmJiBjb3Vyc2Uub3duZXIgIT09IHRoaXMudXNlcklkKSB7XG4gICAgICAvLyBJZiB0aGUgY291cnNlIGlzIHByaXZhdGUsIG1ha2Ugc3VyZSBvbmx5IHRoZSBvd25lciBjYW4gY2hlY2sgaXQgb2ZmXG4gICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgIH1cbiAgICBcbiAgICBDb3Vyc2VzLnVwZGF0ZShjb3Vyc2VJZCwgeyAkc2V0OiB7IGNoZWNrZWQ6IHNldENoZWNrZWQgfSB9KTtcbiAgfSxcblxuICAnY291cnNlcy5zZXRQcml2YXRlJyhjb3Vyc2VJZCwgc2V0VG9Qcml2YXRlKSB7XG4gICAgY2hlY2soY291cnNlSWQsIFN0cmluZyk7XG4gICAgY2hlY2soc2V0VG9Qcml2YXRlLCBCb29sZWFuKTtcbiBcbiAgICBjb25zdCBjb3Vyc2UgPSBDb3Vyc2VzLmZpbmRPbmUoY291cnNlSWQpO1xuIFxuICAgIC8vIE1ha2Ugc3VyZSBvbmx5IHRoZSBjb3Vyc2Ugb3duZXIgY2FuIG1ha2UgYSBjb3Vyc2UgcHJpdmF0ZVxuICAgIGlmIChjb3Vyc2Uub3duZXIgIT09IHRoaXMudXNlcklkKSB7XG4gICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgIH1cbiBcbiAgICBDb3Vyc2VzLnVwZGF0ZShjb3Vyc2VJZCwgeyAkc2V0OiB7IHByaXZhdGU6IHNldFRvUHJpdmF0ZSB9IH0pO1xuICB9LFxuXG5cblxuXG59KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvY291cnNlcy5qc3gnO1xuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gIC8vIGNvZGUgdG8gcnVuIG9uIHNlcnZlciBhdCBzdGFydHVwXG59KTtcbiJdfQ==
