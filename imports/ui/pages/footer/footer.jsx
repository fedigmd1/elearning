import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import { Icon } from 'antd';
import {withTracker} from 'meteor/react-meteor-data'

import logo from '../../../../client/assets/images/Eduland.png'
import placeholder from '../../../../client/assets/images/placeholder.svg'
import smartphone from '../../../../client/assets/images/smartphone.svg'
import envelope from '../../../../client/assets/images/envelope.svg'

class Footer extends Component {


  render(){
    return (

      <div className="super_container">

        <footer className="footer"> 
          <div className="container">
            {/* Newsletter */}
            <div className="newsletter">
              <div className="row">
                <div className="col">
                  <div className="section_title text-center">
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Content */}
            <div className="footer_content">
              <div className="row">
                {/* Footer Column - About */}
                <div className="col-lg-3 footer_col">
                  {/* Logo */}
                  <div className="logo_container">
                    <div className="logo">
                      <img src={logo} alt="" />
                      <span>Education_Land</span>
                    </div>
                  </div>
                  <p className="footer_about_text">
                    In our platform we take online education to the next level with 
                    a real time course. Eduland we aim for perfection.
                  </p>
                </div>
                {this.props.currentUser && this.props.currentUser.profile.type =="Membre" &&
                <React.Fragment>
                  {/* Footer Column - Menu */}
                  <div className="col-lg-3 footer_col">
                    <div className="footer_column_title">Menu</div>
                    <div className="footer_column_content">
                      <ul>
                        <li className="footer_list_item">
                          <a href="/">Home</a>
                        </li>
                        <li className="footer_list_item">
                          <a href="/Courses">Courses</a>
                        </li>
                        <li className="footer_list_item">
                          <a href="/reclamation">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Footer Column - Usefull Links */}
                  <div className="col-lg-3 footer_col">
                    <div className="footer_column_title">Usefull Links</div>
                    <div className="footer_column_content">
                      <ul>
                        <li className="footer_list_item">
                          <a href="/search">Search</a>
                        </li>
                        <li className="footer_list_item">
                          <a href="/forum">Forum</a>
                        </li>
                        <li className="footer_list_item">
                          <a href="/suggestion">Suggestions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Footer Column - Contact */}
                  <div className="col-lg-3 footer_col">
                    <div className="footer_column_title">Contact</div>
                    <div className="footer_column_content">
                      <ul>
                        <li className="footer_contact_item">
                          <div className="footer_contact_icon">
                            <img
                              src={placeholder}
                              alt="https://www.flaticon.com/authors/lucy-g"
                            />
                          </div>
                          Sahloul 3 Sousse-Tunis 
                        </li>
                        <li className="footer_contact_item">
                          <div className="footer_contact_icon">
                            <img
                              src={smartphone}
                              alt="https://www.flaticon.com/authors/lucy-g"
                            />
                          </div>
                          +216 53 897 129
                        </li>
                        <li className="footer_contact_item">
                          <div className="footer_contact_icon">
                            <img
                              src={envelope}
                              alt="https://www.flaticon.com/authors/lucy-g"
                            />
                          </div>gammoudifedi@gmail.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </React.Fragment>
                }
              </div>
            </div>
            {/* Footer Copyright */}
            <div className="footer_bar d-flex flex-column flex-sm-row align-items-center">
              <div className="footer_social ml-sm-auto">
                <ul className="menu_social">
                  <li className="menu_social_item">
                    <a href="https://linkedin.com/">
                      <Icon type="linkedin" />
                    </a>
                  </li>
                  <li className="menu_social_item">
                    <a href="https://instagram.com/">
                      <Icon type="instagram" />
                    </a>
                  </li>
                  <li className="menu_social_item">
                    <a href="https://facebook.com/">
                      <Icon type="facebook" />
                    </a>
                  </li>
                  <li className="menu_social_item">
                    <a href="https://twitter.com/">
                      <Icon type="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }

}
        

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),

  };
}) (Footer);