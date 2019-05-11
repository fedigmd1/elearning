import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Notifications } from '../../../api/notification';
import { Button, notification } from 'antd';

class Notification extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    
  }
 
  deletenotifications(id) {
    Meteor.call('notifications.remove', id);
  }

  openNotificationWithIcon = (type) => {
    console.log("hhhhhh");
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
    
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
          </div>
        )
      })
      : null   
      }
        <div>
          <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
        </div>
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
    notifications: Notifications.find({}, {sort: { createdAt: -1}}).fetch()
  };
}) (Notification); 

