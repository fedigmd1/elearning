import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import logo from '../../../../client/assets/images/Eduland.png'
import phone_call from '../../../../client/assets/images/phone-call.svg'
import AppContainer from '../../containers/AppContainer'
import {withTracker} from 'meteor/react-meteor-data'
import { Notifications } from '../../../api/notification';
import { notification } from 'antd';
import Headeradmin from './headeradmin';
import Headeruser from './headeruser';


class Header extends Component {
  constructor(props){
    super(props);
  }

  openNotificationWithIcon = (type, title, user, content, id) => {

    notification[type]({
      message: title,
      description: user+' '+content,
    });
      Meteor.call('notifications.setview', id);
  }

  render(){
    return (

      <div className="super_container">
        <div>
          {this.props.notifications && this.props.notifications.map((notification, i) =>{
              return (
                <div key={i}>
                  { notification.view == false && this.props.currentUser ?

                  notification.type =="coursesadd" && notification.owner != this.props.currentUser._id ?
                  this.openNotificationWithIcon('info', notification.type, notification.username, notification.text, notification._id)
                  
                  :notification.type =="coursesdel" && notification.owner != this.props.currentUser._id ?
                  this.openNotificationWithIcon('error', notification.type, notification.username, notification.text, notification._id)
                 
                  :notification.type =="coursesdelusers" && this.props.currentUser.profile.type == "Membre" ?
                  this.openNotificationWithIcon('error', notification.type, notification.username, notification.text, notification._id)
                 
                  : notification.type =="explicationsres" && notification.owner == this.props.currentUser._id ?
                  this.openNotificationWithIcon('success', notification.type, notification.username, notification.text, notification._id)
                  
                  : notification.type =="explicationsadd" && notification.owner != this.props.currentUser._id
                    && this.props.currentUser.profile.type == "Membre" ?
                  this.openNotificationWithIcon('warning', notification.type, notification.username, notification.text, notification._id)
                  
                  : notification.type =="forums" && notification.owner != this.props.currentUser._id ?
                  this.openNotificationWithIcon('info', notification.type, notification.username, notification.text, notification._id)
                  
                  : notification.type =="reclamationsadd" && notification.owner != this.props.currentUser._id 
                    && this.props.currentUser.profile.type == "Admin" ?
                  this.openNotificationWithIcon('warning', notification.type, notification.username, notification.text, notification._id)
                 
                  : notification.type =="reclamationsdeladmin" && notification.owner != this.props.currentUser._id 
                    && this.props.currentUser.profile.type == "Admin" ?
                  this.openNotificationWithIcon('error', notification.type, notification.username, notification.text, notification._id)
                 
                  : notification.type =="reclamationsdeluser" && notification.owner == this.props.currentUser._id ?
                  this.openNotificationWithIcon('error', notification.type, notification.username, notification.text, notification._id)
                 
                  : notification.type =="reclamationsres" && notification.owner == this.props.currentUser._id ?
                  this.openNotificationWithIcon('success', notification.type, notification.username, notification.text, notification._id)
                  
                  : notification.type =="suggestionsadd" && notification.owner != this.props.currentUser._id ?
                  this.openNotificationWithIcon('info', notification.type, notification.username, notification.text, notification._id)
                  
                  : notification.type =="suggestionsdel" && notification.owner != this.props.currentUser._id &&
                  this.openNotificationWithIcon('error', notification.type, notification.username, notification.text, notification._id)

                  : null
                  }
                </div>
              )
            })
          }
        </div>


        { this.props.currentUser ? this.props.currentUser.profile.type != "Admin" ?
        <Headeruser currentUser={this.props.currentUser} notifications={this.props.notifications} />
        : <Headeradmin currentUser={this.props.currentUser} notifications={this.props.notifications} />
        : <Headeruser currentUser={this.props.currentUser} notifications={this.props.notifications} />
      }
      </div>
    );
  }

}

export default withTracker(() => {
  Meteor.subscribe('notifications');

  return {
    notifications: Notifications.find({}, {sort: { createdAt: -1}}).fetch(),
    currentUser: Meteor.user(),

  };
}) (Header);