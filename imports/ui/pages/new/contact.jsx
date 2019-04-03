import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import Header from '../header/header';
import Footer from '../footer/footer';


export default class Contact extends Component {


  render(){
    return (

      <div className="super_container">

        <Header/>

        <div className="menu_container menu_mm">
          {/* Menu Close Button */}
          <div className="menu_close_container">
            <div className="menu_close" />
          </div>
          {/* Menu Items */}
          <div className="menu_inner menu_mm">
            <div className="menu menu_mm">
              <ul className="menu_list menu_mm">
                <li className="menu_item menu_mm">
                  <a href="index.html">Home</a>
                </li>
                <li className="menu_item menu_mm">
                  <a href="#">About us</a>
                </li>
                <li className="menu_item menu_mm">
                  <a href="courses.html">Courses</a>
                </li>
                <li className="menu_item menu_mm">
                  <a href="elements.html">Elements</a>
                </li>
                <li className="menu_item menu_mm">
                  <a href="news.html">News</a>
                </li>
                <li className="menu_item menu_mm">
                  <a href="#">Contact</a>
                </li>
              </ul>
              {/* Menu Social */}
              <div className="menu_social_container menu_mm">
                <ul className="menu_social menu_mm">
                  <li className="menu_social_item menu_mm">
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                  <li className="menu_social_item menu_mm">
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="menu_social_item menu_mm">
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="menu_social_item menu_mm">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="menu_social_item menu_mm">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu_copyright menu_mm">
                Colorlib All rights reserved
              </div>
            </div>
          </div>
        </div>

        <div className="home">
          <div className="home_background_container prlx_parent">
            <div
              className="home_background prlx"
              style={{
                backgroundImage: "url(images/contact_background.jpg)"
              }}
            />
          </div>
          <div className="home_content">
            <h1>Contact</h1>
          </div>
        </div>

        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {/* Contact Form */}
                <div className="contact_form">
                  <div className="contact_title">Get in touch</div>
                  <div className="contact_form_container">
                    <form action="post">
                      <input
                        id="contact_form_name"
                        className="input_field contact_form_name"
                        type="text"
                        placeholder="Name"
                        required="required"
                        data-error="Name is required."
                      />
                      <input
                        id="contact_form_email"
                        className="input_field contact_form_email"
                        type="email"
                        placeholder="E-mail"
                        required="required"
                        data-error="Valid email is required."
                      />
                      <textarea
                        id="contact_form_message"
                        className="text_field contact_form_message"
                        name="message"
                        placeholder="Message"
                        required="required"
                        data-error="Please, write us a message."
                        defaultValue={""}
                      />
                      <button
                        id="contact_send_btn"
                        type="button"
                        className="contact_send_btn trans_200"
                        value="Submit"
                      >
                        send message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about">
                  <div className="about_title">Join Courses</div>
                  <p className="about_text">
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum. Etiam eu purus nec
                    eros varius luctus. Praesent finibus risus facilisis
                    ultricies. Etiam eu purus nec eros varius luctus.
                  </p>
                  <div className="contact_info">
                    <ul>
                      <li className="contact_info_item">
                        <div className="contact_info_icon">
                          <img
                            src="images/placeholder.svg"
                            alt="https://www.flaticon.com/authors/lucy-g"
                          />
                        </div>
                        Blvd Libertad, 34 m05200 Arévalo
                      </li>
                      <li className="contact_info_item">
                        <div className="contact_info_icon">
                          <img
                            src="images/smartphone.svg"
                            alt="https://www.flaticon.com/authors/lucy-g"
                          />
                        </div>
                        0034 37483 2445 322
                      </li>
                      <li className="contact_info_item">
                        <div className="contact_info_icon">
                          <img
                            src="images/envelope.svg"
                            alt="https://www.flaticon.com/authors/lucy-g"
                          />
                        </div>hello@company.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Map */}
            <div className="row">
              <div className="col">
                <div id="google_map">
                  <div className="map_container">
                    <div id="map" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       <Footer/>

      </div>

    );
  }
}