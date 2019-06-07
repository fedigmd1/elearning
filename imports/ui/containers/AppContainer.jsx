// password protected container
import React, { Component } from 'react';
import { withHistory, Redirect } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import Formulaire from '../pages/search/formulaire';

import Header from '../../ui/pages/header/header';
import Footer from '../../ui/pages/footer/footer';

// images
import background from '../../../client/assets/images/courses_background.jpg'
import slider_background from '../../../client/assets/images/slider_background.jpg'
import books from '../../../client/assets/images/books.svg'
import professor from '../../../client/assets/images/professor.svg'
import earth_globe from '../../../client/assets/images/earth-globe.svg'
import course_1 from '../../../client/assets/images/course_1.jpg'
import author from '../../../client/assets/images/author.jpg'
import course_2 from '../../../client/assets/images/course_2.jpg'
import course_3 from '../../../client/assets/images/course_3.jpg'
import search_background1 from '../../../client/assets/images/news_background.jpg'
import search_background from '../../../client/assets/images/search_background.jpg'
// images 





export default class AppContainer extends Component {
  constructor(props){
    super(props)
  
    this.logout = this.logout.bind(this)
    this.logout1 = this.logout1.bind(this)
  }


  
  logout(e){
    e.preventDefault();
    
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            this.props.history.push('/login');
        }
    });
  }


  logout1(e){
    e.preventDefault();
    
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            this.props.history.push('/signup');
        }
    });
  }


  handleSubmit(event) { 
    event.preventDefault();
    this.props.history.push('/search');   
  }

  render(){
    return (
      <div className="super_container" >
        <MainContainer />     
        <Header/>
        <div className="home">
          <div className="home_background_container prlx_parent">
            <div
              className="home_background prlx"
              style={{ backgroundImage: `url(${search_background1})` }}
            />
          </div>
          <div className="text_contente">
            <h1>Get your Education today</h1>
          </div>
        </div>

        <div className="hero_boxes">
          <div className="hero_boxes_inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 hero_box_col">
                  <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src={earth_globe} className="svg" alt="" />
                    <div className="hero_box_content">
                      <h2 className="hero_box_title">Online Courses</h2>
                      <a href="/Courses" className="hero_box_link">
                        view more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 hero_box_col">
                  <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src={books} className="svg" alt="" />
                    <div className="hero_box_content">
                      <h2 className="hero_box_title">Our Library</h2>
                      <a href="/forum" className="hero_box_link">
                        view more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 hero_box_col">
                  <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src={professor} className="svg" alt="" />
                    <div className="hero_box_content">
                      <h2 className="hero_box_title">Our Teachers</h2>
                      <a href="/Teachers" className="hero_box_link">
                        view more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        <div className="register">
          <div className="container-fluid">
            <div className="row row-eq-height">
              <div className="col-lg-6 nopadding">
                {/* Register */}
                <div className="register_section d-flex flex-column align-items-center justify-content-center">
                  <div className="register_content text-center">
                    <h3 className="register_title">
                      Join us now for free and gain an amazing chance to meet a community
                      of talented people that will take you to meet your dreams with new 
                      creative ways
                    </h3>
                    <p className="register_text">
                      EduLand is where learners come to learn the skills they need, with 
                      new revolutionary ways like they have never experienced before. 
                      We’re a nonprofit with the mission to provide a free, world-class
                      education for anyone, anywhere.
                      In our platform we take online education to the next level with 
                      a real time course that allows learners to interact with instructors 
                      directely, it is like we are bringing you the classroom to your own room.
                      Eduland we aim for perfection.
                    </p>
                    <div className="button button_1 register_button mx-auto trans_200"
                    onClick={this.logout1}>
                      <a>register now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 nopadding">
                {/* Search */}
                <div className="search_section d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="search_background"
                    style={{
                      backgroundImage: `url(${search_background})`
                    }}
                  />
                  <div className="search_content text-center">
                    <h1 className="search_title">Search for your course</h1>
                    <form
                      className="search_form"
                    >
                      <button
                        className="search_submit_button trans_200"
                        onClick={this.handleSubmit.bind(this) }                      
                      >
                        search course
                      </button>
                    </form>
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
