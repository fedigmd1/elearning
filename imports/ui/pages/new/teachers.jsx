import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import Header from '../header/header';
import Footer from '../footer/footer';

export default class Teachers extends Component {


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
                  <a href="about.html">About us</a>
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
                  <a href="contact.html">Contact</a>
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
                backgroundImage: "url(images/teachers_background.jpg)"
              }}
            />
          </div>
          <div className="home_content">
            <h1>Teachers</h1>
          </div>
        </div>

        <div className="teachers page_section">
          <div className="container">
            <div className="row">
              {/* Teacher */}
              <div className="col-lg-4 teacher">
                <div className="card">
                  <div className="card_img">
                    <div className="card_plus trans_200 text-center">
                      <a href="#">+</a>
                    </div>
                    <img
                      className="card-img-top trans_200"
                      src="images/teacher_1.jpg"
                      alt="https://unsplash.com/@michaeldam"
                    />
                  </div>
                  <div className="card-body text-center">
                    <div className="card-title">
                      <a href="#">Maria Smith</a>
                    </div>
                    <div className="card-text">Graphic Designer</div>
                    <div className="teacher_social">
                      <ul className="menu_social">
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 teacher">
                <div className="card">
                  <div className="card_img">
                    <div className="card_plus trans_200 text-center">
                      <a href="#">+</a>
                    </div>
                    <img
                      className="card-img-top trans_200"
                      src="images/teacher_2.jpg"
                      alt="https://unsplash.com/@jcpeacock"
                    />
                  </div>
                  <div className="card-body text-center">
                    <div className="card-title">
                      <a href="#">Christian Blue</a>
                    </div>
                    <div className="card-text">Graphic Designer</div>
                    <div className="teacher_social">
                      <ul className="menu_social">
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 teacher">
                <div className="card">
                  <div className="card_img">
                    <div className="card_plus trans_200 text-center">
                      <a href="#">+</a>
                    </div>
                    <img
                      className="card-img-top trans_200"
                      src="images/teacher_3.jpg"
                      alt="https://unsplash.com/photos/n8jeOSxCRfQ"
                    />
                  </div>
                  <div className="card-body text-center">
                    <div className="card-title">
                      <a href="#">James Brown</a>
                    </div>
                    <div className="card-text">Graphic Designer</div>
                    <div className="teacher_social">
                      <ul className="menu_social">
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 teacher">
                <div className="card">
                  <div className="card_img">
                    <div className="card_plus trans_200 text-center">
                      <a href="#">+</a>
                    </div>
                    <img
                      className="card-img-top trans_200"
                      src="images/teacher_4.jpg"
                      alt="https://unsplash.com/@seteales"
                    />
                  </div>
                  <div className="card-body text-center">
                    <div className="card-title">
                      <a href="#">Julie Denver</a>
                    </div>
                    <div className="card-text">Graphic Designer</div>
                    <div className="teacher_social">
                      <ul className="menu_social">
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 teacher">
                <div className="card">
                  <div className="card_img">
                    <div className="card_plus trans_200 text-center">
                      <a href="#">+</a>
                    </div>
                    <img
                      className="card-img-top trans_200"
                      src="images/teacher_5.jpg"
                      alt="https://unsplash.com/@jaredsluyter"
                    />
                  </div>
                  <div className="card-body text-center">
                    <div className="card-title">
                      <a href="#">Julie Denver</a>
                    </div>
                    <div className="card-text">Graphic Designer</div>
                    <div className="teacher_social">
                      <ul className="menu_social">
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 teacher">
                <div className="card">
                  <div className="card_img">
                    <div className="card_plus trans_200 text-center">
                      <a href="#">+</a>
                    </div>
                    <img
                      className="card-img-top trans_200"
                      src="images/teacher_6.jpg"
                      alt="https://unsplash.com/@mehdizadeh"
                    />
                  </div>
                  <div className="card-body text-center">
                    <div className="card-title">
                      <a href="#">Julie Denver</a>
                    </div>
                    <div className="card-text">Graphic Designer</div>
                    <div className="teacher_social">
                      <ul className="menu_social">
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="menu_social_item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="milestones">
          <div
            className="milestones_background"
            style={{
              backgroundImage: "url(images/milestones_background.jpg)"
            }}
          />
          <div className="container">
            <div className="row">
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img
                      src="images/milestone_1.svg"
                      alt="https://www.flaticon.com/authors/zlatko-najdenovski"
                    />
                  </div>
                  <div className="milestone_counter" data-end-value={750}>
                    0
                  </div>
                  <div className="milestone_text">Current Students</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img
                      src="images/milestone_2.svg"
                      alt="https://www.flaticon.com/authors/zlatko-najdenovski"
                    />
                  </div>
                  <div className="milestone_counter" data-end-value={120}>
                    0
                  </div>
                  <div className="milestone_text">Certified Teachers</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img
                      src="images/milestone_3.svg"
                      alt="https://www.flaticon.com/authors/zlatko-najdenovski"
                    />
                  </div>
                  <div className="milestone_counter" data-end-value={39}>
                    0
                  </div>
                  <div className="milestone_text">Approved Courses</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img
                      src="images/milestone_4.svg"
                      alt="https://www.flaticon.com/authors/zlatko-najdenovski"
                    />
                  </div>
                  <div
                    className="milestone_counter"
                    data-end-value={3500}
                    data-sign-before="+"
                  >
                    0
                  </div>
                  <div className="milestone_text">Graduate Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="become">
          <div className="container">
            <div className="row row-eq-height">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="become_title">
                  <h1>Become a teacher</h1>
                </div>
                <p className="become_text">
                  In aliquam, augue a gravida rutrum, ante nisl fermentum
                  nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                  malesuada, finibus tortor fermentum. Etiam eu purus nec eros
                  varius luctus. Praesent finibus risus facilisis ultricies
                  venenatis. Suspendisse fermentum sodales lacus, lacinia
                  gravida elit dapibus sed. Cras in lectus elit. Maecenas
                  tempus nunc vitae mi egestas venenatis. Aliquam rhoncus,
                  purus in vehicula porttitor, lacus ante consequat purus, id
                  elementum enim purus nec enim. In sed odio rhoncus,
                  tristique ipsum id, pharetra neque.
                </p>
                <div className="become_button text-center trans_200">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="become_image">
                  <img src="images/become.jpg" alt />
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