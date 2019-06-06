import React, { Component } from 'react'
import logo from '../../../../client/assets/images/Eduland.png'
import phone_call from '../../../../client/assets/images/phone-call.svg'


export default class Headeruser extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (

      <div className="super_container">
        
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
      </div>
    );
  }

}
