import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Notifications } from '../../../api/notification';
import { Button, notification } from 'antd';
import { Redirect } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

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

  render() {
  
    return (
      <div className="">
      <Header/>
      <center>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      {this.props.notifications && this.props.currentUser ? this.props.currentUser.profile.type == "Admin"
        && this.props.notifications.map((notification, i) =>{
        return (
          <div>
            <table className="table">
              <div key={i}>
                <button className="delete" onClick={() => this.deletenotifications(notification._id)}>
                  &times;
                </button>
                <strong>{notification.username}</strong>: {notification.text}
                {notification.view == false && 
                this.openNotificationWithIcon('info', notification.type, notification.username, notification.text, notification._id)}
              </div>
            </table>
          </div>
        )
      })
      : null
      }
      </center>
      <Footer/>
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

