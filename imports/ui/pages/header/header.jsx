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


class Header extends Component {
  constructor(props){
    super(props);
  }

  openNotificationWithIcon = (type, title, user, content, id) => {
    console.log("hhhhhh");
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
                 
                  : notification.type =="explicationsres" && notification.owner == this.props.currentUser._id ?
                  this.openNotificationWithIcon('success', notification.type, notification.username, notification.text, notification._id)
                  
                  : notification.type =="explicationsadd" && notification.owner != this.props.currentUser._id ?
                  this.openNotificationWithIcon('warning', notification.type, notification.username, notification.text, notification._id)
                  
                  : notification.type =="forums" && notification.owner != this.props.currentUser._id ?
                  this.openNotificationWithIcon('info', notification.type, notification.username, notification.text, notification._id)
                  
                  : notification.type =="reclamationsadd" && notification.owner != this.props.currentUser._id 
                    && this.props.currentUser.profile.type == "Admin" ?
                  this.openNotificationWithIcon('warning', notification.type, notification.username, notification.text, notification._id)
                 
                  : notification.type =="reclamationsdel" && notification.owner != this.props.currentUser._id 
                    && this.props.currentUser.profile.type == "Admin" ?
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


        { this.props.currentUser && this.props.currentUser.profile.type == "Membre" ?
        <header className="header d-flex flex-row">
          <div className="header_content d-flex flex-row align-items-center">
            {/* Logo */}
            <div className="logo_container">
              <div className="logo">
                <img src={logo} alt="" style={{ width: 160, height: 110 }}/>
                {/* <span>Astrolab</span> */}
              </div>
            </div>
            {/* Main Navigation */}
            <nav className="nav">
              <div className="main_nav">
                <ul className="main_nav_list">
                  <li className="main_nav_item">
                    <a href="/">home</a>
                  </li>
                  <li className="main_nav_item">
                    <a href="/Courses">courses</a>
                  </li>
                  <li className="main_nav_item">
                    <a href="/profil">Profile</a>
                  </li>
                  <li className="main_nav_item">
                    <a href="/AddCourse">Add Course</a>
                  </li>
                  <li className="main_nav_item">
                    <a href="/suggestions">suggestions</a>
                  </li>
                  <li className="main_nav_item">
                    <a href="/forum">Forum</a>
                  </li>
                  <li className="main_nav_item">
                    <a href="/reclamation">Reclamations</a>
                  </li>

                </ul>
              </div>
            </nav>
          </div>
          <div className="header_side d-flex flex-row justify-content-center align-items-center">
            <img src={phone_call} alt="" />
            <span>+216 53 897 129</span>
          </div>
        </header>
        : <Headeradmin currentUser={this.props.currentUser} notifications={this.props.notifications} />
        
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