import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Notifications } from '../../../api/notification';
import { Button, notification } from 'antd';

class Notification extends Component {
  constructor(props){
    super(props)
    this.state = {
      typenot: "success warning error info"
      
    }
  }
 
  deletenotifications(id) {
    Meteor.call('notifications.remove', id);
  }

  openNotificationWithIcon = (type, title, user, content, id) => {
    console.log("hhhhhh");
    notification[type]({
      message: title,
      description: user+' '+content,
    });
    setTimeout(() => {
      Meteor.call('notifications.setview', id);
    }, 5000);
    
  }

  render() {
  
    return (
      <div className="">
      {this.props.notifications ? this.props.notifications.map((notification, i) =>{
        return (
          <div key={i}>
            <button className="delete" onClick={() => this.deletenotifications(notification._id)}>
              &times;
            </button>
            <strong>{notification.username}</strong>: {notification.text}
            {notification.view == false && 
            this.openNotificationWithIcon('info', notification.type, notification.username, notification.text, notification._id)}
          </div>
        )
      })
      : null  
      }
      </div>
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('notifications')
  let currentUser = Meteor.user()
  
  return {
    currentUser,
    users: Meteor.users.find({}).fetch(),
    incompleteCount: Notifications.find({ checked: { $ne: true } }).count(),
    notifications: Notifications.find({}, {sort: { createdAt: -1}}).fetch(),
  };
}) (Notification); 

