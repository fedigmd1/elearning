// password protected container
import React, { Component } from 'react';
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
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
import search_background from '../../../client/assets/images/search_background.jpg'
// images 





export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
    this.logout1 = this.logout1.bind(this);
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
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

  render(){
    return (
      <div className="super_container" >

        
        <button href="#" onClick={this.logout}>Logout</button>
        
        <MainContainer />
        
        <Header/>

        <div className="home">
          <div className="hero_slider_container">
            <div className="hero_slider owl-carousel">
              
              <div className="hero_slide">
                <div
                  className="hero_slide_background"
                  style={{ backgroundImage: `url(${background})` }}
                />
                
                  <div className="hero_slide_content text-center">
                    <h1>
                      Get your <span>Education</span> today!
                    </h1>
                  </div>
                
              </div>
            </div>
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
                      <a href="/Courses" className="hero_box_link">
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
                    <h1 className="register_title">
                      Register now and get a discount <span>50%</span>{" "}
                      discount until 1 January
                    </h1>
                    <p className="register_text">
                      In aliquam, augue a gravida rutrum, ante nisl fermentum
                      nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                      malesuada, finibus tortor fermentum. Aliquam, augue a
                      gravida rutrum, ante nisl fermentum nulla, vitae tempo.
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
                      id="search_form"
                      className="search_form"
                      action="post"
                    >
                      <input
                        id="search_form_name"
                        className="input_field search_form_name"
                        type="text"
                        placeholder="Course Name"
                        required="required"
                        data-error="Course name is required."
                      />
                      <button
                        id="search_submit_button"
                        type="submit"
                        className="search_submit_button trans_200"
                        value="Submit"
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
