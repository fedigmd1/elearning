import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import Header from '../header/header';
import Footer from '../footer/footer';


export default class Elements extends Component {


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
                  <a href="#">Elements</a>
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
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
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

        <div className="elements">
          {/* Buttons */}
          <div className="buttons">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="elements_title">Buttons</div>
                  <div className="buttons_container">
                    <div className="button button_color_1 text-center trans_200">
                      <a href="#">Read More</a>
                    </div>
                    <div className="button button_color_2 text-center trans_200">
                      <a href="#">Read More</a>
                    </div>
                    <div className="button button_line_1 text-center trans_200">
                      <a href="#">Read More</a>
                    </div>
                    <div className="button button_line_2 text-center trans_200">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Progress Bars and Accordions */}
          <div className="pbars_accordions">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="elements_title">
                    Progress Bars &amp; Accordions
                  </div>
                </div>
              </div>
              <div className="row pbars_accordions_container">
                {/* Progress Bars & Accordions */}
                <div className="col-lg-6">
                  {/* Progress Bars */}
                  <div className="elements_progress_bars">
                    <div className="pbar_container">
                      <ul className="progress_bar_container col_12 clearfix">
                        <li className="pb_item">
                          <h4>Developement</h4>
                          <div
                            id="skill_1_pbar"
                            className="skill_bars"
                            data-perc="0.85"
                          />
                        </li>
                        <li className="pb_item">
                          <h4>Design</h4>
                          <div
                            id="skill_2_pbar"
                            className="skill_bars"
                            data-perc={1}
                          />
                        </li>
                        <li className="pb_item">
                          <h4>SEO</h4>
                          <div
                            id="skill_3_pbar"
                            className="skill_bars"
                            data-perc="0.75"
                          />
                        </li>
                        <li className="pb_item">
                          <h4>Marketing</h4>
                          <div
                            id="skill_4_pbar"
                            className="skill_bars"
                            data-perc="0.95"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* Accordions */}
                  <div className="elements_accordions">
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        {" "}
                        Phasellus vestibulum, quam tincidunt venen.
                      </div>
                      <div className="accordion_panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus vestibulum, quam tincidunt venenatis
                          ultrices, est libero mattis ante, ac consectetur
                          diam neque eget quam.
                        </p>
                      </div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        {" "}
                        Phasellus vestibulum, quam tincidunt venen.
                      </div>
                      <div className="accordion_panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus vestibulum, quam tincidunt venenatis
                          ultrices, est libero mattis ante, ac consectetur
                          diam neque eget quam.
                        </p>
                      </div>
                    </div>
                    <div className="accordion_container">
                      <div className="accordion d-flex flex-row align-items-center">
                        {" "}
                        Phasellus vestibulum, quam tincidunt venen.
                      </div>
                      <div className="accordion_panel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus vestibulum, quam tincidunt venenatis
                          ultrices, est libero mattis ante, ac consectetur
                          diam neque eget quam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Loaders */}
          <div className="loaders">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="elements_title">Loaders</div>
                </div>
              </div>
              <div className="row elements_loaders_container">
                <div className="col-lg-3 loader_col">
                  {/* Loader */}
                  <div className="loader" data-perc="0.75" />
                  <div className="loader_text text-center">Photos Taken</div>
                  <div className="loader_sub text-center">
                    Etiam nec odio vestibulum est.
                  </div>
                </div>
                <div className="col-lg-3 loader_col">
                  {/* Loader */}
                  <div className="loader" data-perc="0.83" />
                  <div className="loader_text text-center">Km Walked</div>
                  <div className="loader_sub text-center">
                    Odio vestibulum est mattis.
                  </div>
                  <span />
                </div>
                <div className="col-lg-3 loader_col">
                  {/* Loader */}
                  <div className="loader" data-perc="0.25" />
                  <div className="loader_text text-center">
                    Cities Visited
                  </div>
                  <div className="loader_sub text-center">
                    Vestibulum est mattis effic.
                  </div>
                </div>
                <div className="col-lg-3 loader_col">
                  {/* Loader */}
                  <div className="loader" data-perc="0.95" />
                  <div className="loader_text text-center">
                    Cities Visited
                  </div>
                  <div className="loader_sub text-center">
                    Vestibulum est mattis effic.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Milestones */}
          <div className="milestones">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="elements_title">Milestones</div>
                </div>
              </div>
            </div>
            <div className="milestones_container">
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
          </div>
          {/* Icon Boxes */}
          <div className="icon_boxes">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="elements_title">Icon Boxes</div>
                </div>
              </div>
              <div className="row icon_boxes_container">
                <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                  <div className="icon_container d-flex flex-column justify-content-end">
                    <img src="images/earth-globe.svg" alt />
                  </div>
                  <h3>Online Courses</h3>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
                </div>
                <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                  <div className="icon_container d-flex flex-column justify-content-end">
                    <img src="images/exam.svg" alt />
                  </div>
                  <h3>Indoor Courses</h3>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
                </div>
                <div className="col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start">
                  <div className="icon_container d-flex flex-column justify-content-end">
                    <img src="images/books.svg" alt />
                  </div>
                  <h3>Amazing Library</h3>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum.
                  </p>
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