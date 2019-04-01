import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import Header from './header';
import Footer from './footer';

export default class New extends Component {


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
                  <a href="#">News</a>
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
              style={{ backgroundImage: "url(images/news_background.jpg)" }}
            />
          </div>
          <div className="home_content">
            <h1>The News</h1>
          </div>
        </div>

        <div className="news">
          <div className="container">
            <div className="row">
              {/* News Column */}
              <div className="col-lg-8">
                <div className="news_posts">
                  {/* News Post */}
                  <div className="news_post">
                    <div className="news_post_image">
                      <img
                        src="images/news_1.jpg"
                        alt="https://unsplash.com/@dsmacinnes"
                      />
                    </div>
                    <div className="news_post_top d-flex flex-column flex-sm-row">
                      <div className="news_post_date_container">
                        <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                          <div>18</div>
                          <div>dec</div>
                        </div>
                      </div>
                      <div className="news_post_title_container">
                        <div className="news_post_title">
                          <a href="news_post.html">
                            Why do you need a qualification?
                          </a>
                        </div>
                        <div className="news_post_meta">
                          <span className="news_post_author">
                            <a href="#">By Christian Smith</a>
                          </span>
                          <span>|</span>
                          <span className="news_post_comments">
                            <a href="#">3 Comments</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="news_post_text">
                      <p>
                        In aliquam, augue a gravida rutrum, ante nisl
                        fermentum nulla, vitae tempor nisl ligula vel nunc.
                        Proin quis mi malesuada, finibus tortor fermentum.
                        Etiam eu purus nec eros varius luctus. Praesent
                        finibus risus facilisis ultricies.
                      </p>
                    </div>
                    <div className="news_post_button text-center trans_200">
                      <a href="news_post.html">Read More</a>
                    </div>
                  </div>
                  {/* News Post */}
                  <div className="news_post">
                    <div className="news_post_image">
                      <img
                        src="images/news_2.jpg"
                        alt="https://unsplash.com/@dsmacinnes"
                      />
                    </div>
                    <div className="news_post_top d-flex flex-column flex-sm-row">
                      <div className="news_post_date_container">
                        <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                          <div>18</div>
                          <div>dec</div>
                        </div>
                      </div>
                      <div className="news_post_title_container">
                        <div className="news_post_title">
                          <a href="news_post.html">
                            Our new courses just for you?
                          </a>
                        </div>
                        <div className="news_post_meta">
                          <span className="news_post_author">
                            <a href="#">By Christian Smith</a>
                          </span>
                          <span>|</span>
                          <span className="news_post_comments">
                            <a href="#">3 Comments</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="news_post_text">
                      <p>
                        In aliquam, augue a gravida rutrum, ante nisl
                        fermentum nulla, vitae tempor nisl ligula vel nunc.
                        Proin quis mi malesuada, finibus tortor fermentum.
                        Etiam eu purus nec eros varius luctus. Praesent
                        finibus risus facilisis ultricies.
                      </p>
                    </div>
                    <div className="news_post_button text-center trans_200">
                      <a href="news_post.html">Read More</a>
                    </div>
                  </div>
                  {/* News Post */}
                  <div className="news_post">
                    <div className="news_post_image">
                      <img
                        src="images/news_3.jpg"
                        alt="https://unsplash.com/@dsmacinnes"
                      />
                    </div>
                    <div className="news_post_top d-flex flex-column flex-sm-row">
                      <div className="news_post_date_container">
                        <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                          <div>18</div>
                          <div>dec</div>
                        </div>
                      </div>
                      <div className="news_post_title_container">
                        <div className="news_post_title">
                          <a href="news_post.html">
                            Why take our graduate program??
                          </a>
                        </div>
                        <div className="news_post_meta">
                          <span className="news_post_author">
                            <a href="#">By Christian Smith</a>
                          </span>
                          <span>|</span>
                          <span className="news_post_comments">
                            <a href="#">3 Comments</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="news_post_text">
                      <p>
                        In aliquam, augue a gravida rutrum, ante nisl
                        fermentum nulla, vitae tempor nisl ligula vel nunc.
                        Proin quis mi malesuada, finibus tortor fermentum.
                        Etiam eu purus nec eros varius luctus. Praesent
                        finibus risus facilisis ultricies.
                      </p>
                    </div>
                    <div className="news_post_button text-center trans_200">
                      <a href="news_post.html">Read More</a>
                    </div>
                  </div>
                </div>
                {/* Page Nav */}
                <div className="news_page_nav">
                  <ul>
                    <li className="active text-center trans_200">
                      <a href="#">01</a>
                    </li>
                    <li className="text-center trans_200">
                      <a href="#">02</a>
                    </li>
                    <li className="text-center trans_200">
                      <a href="#">03</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Sidebar Column */}
              <div className="col-lg-4">
                <div className="sidebar">
                  {/* Archives */}
                  <div className="sidebar_section">
                    <div className="sidebar_section_title">
                      <h3>Archives</h3>
                    </div>
                    <ul className="sidebar_list">
                      <li className="sidebar_list_item">
                        <a href="#">Design Courses</a>
                      </li>
                      <li className="sidebar_list_item">
                        <a href="#">All you need to know</a>
                      </li>
                      <li className="sidebar_list_item">
                        <a href="#">Uncategorized</a>
                      </li>
                      <li className="sidebar_list_item">
                        <a href="#">About Our Departments</a>
                      </li>
                      <li className="sidebar_list_item">
                        <a href="#">Choose the right course</a>
                      </li>
                    </ul>
                  </div>
                  {/* Latest Posts */}
                  <div className="sidebar_section">
                    <div className="sidebar_section_title">
                      <h3>Latest posts</h3>
                    </div>
                    <div className="latest_posts">
                      {/* Latest Post */}
                      <div className="latest_post">
                        <div className="latest_post_image">
                          <img
                            src="images/latest_1.jpg"
                            alt="https://unsplash.com/@dsmacinnes"
                          />
                        </div>
                        <div className="latest_post_title">
                          <a href="news_post.html">
                            Why do you need a qualification?
                          </a>
                        </div>
                        <div className="latest_post_meta">
                          <span className="latest_post_author">
                            <a href="#">By Christian Smith</a>
                          </span>
                          <span>|</span>
                          <span className="latest_post_comments">
                            <a href="#">3 Comments</a>
                          </span>
                        </div>
                      </div>
                      {/* Latest Post */}
                      <div className="latest_post">
                        <div className="latest_post_image">
                          <img
                            src="images/latest_2.jpg"
                            alt="https://unsplash.com/@erothermel"
                          />
                        </div>
                        <div className="latest_post_title">
                          <a href="news_post.html">
                            Why do you need a qualification?
                          </a>
                        </div>
                        <div className="latest_post_meta">
                          <span className="latest_post_author">
                            <a href="#">By Christian Smith</a>
                          </span>
                          <span>|</span>
                          <span className="latest_post_comments">
                            <a href="#">3 Comments</a>
                          </span>
                        </div>
                      </div>
                      {/* Latest Post */}
                      <div className="latest_post">
                        <div className="latest_post_image">
                          <img
                            src="images/latest_3.jpg"
                            alt="https://unsplash.com/@element5digital"
                          />
                        </div>
                        <div className="latest_post_title">
                          <a href="news_post.html">
                            Why do you need a qualification?
                          </a>
                        </div>
                        <div className="latest_post_meta">
                          <span className="latest_post_author">
                            <a href="#">By Christian Smith</a>
                          </span>
                          <span>|</span>
                          <span className="latest_post_comments">
                            <a href="#">3 Comments</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="sidebar_section">
                    <div className="sidebar_section_title">
                      <h3>Tags</h3>
                    </div>
                    <div className="tags d-flex flex-row flex-wrap">
                      <div className="tag">
                        <a href="#">Course</a>
                      </div>
                      <div className="tag">
                        <a href="#">Design</a>
                      </div>
                      <div className="tag">
                        <a href="#">FAQ</a>
                      </div>
                      <div className="tag">
                        <a href="#">Teachers</a>
                      </div>
                      <div className="tag">
                        <a href="#">School</a>
                      </div>
                      <div className="tag">
                        <a href="#">Graduate</a>
                      </div>
                    </div>
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