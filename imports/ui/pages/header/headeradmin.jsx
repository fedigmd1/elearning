import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import logo from '../../../../client/assets/images/Eduland.png'
import phone_call from '../../../../client/assets/images/phone-call.svg'
import AppContainer from '../../containers/AppContainer'
import { notification } from 'antd';


export default class Headeradmin extends Component {
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
        {this.props.notifications && this.props.notifications.map((notification, i) =>{
            return (
              <div key={i}>
                {notification.view == false && 
                this.openNotificationWithIcon('warning', notification.type, notification.username, notification.text, notification._id)}
              </div>
            )
          })
        }

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
                    <a href="/addusers">Add user</a>
                  </li>
                  <li className="main_nav_item">
                    <a href="/users">Users</a>
                  </li>
                  <li className="main_nav_item">
                    <a href="/teachers">Teachers</a>
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
      </div>
    );
  }

}
