import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import {Courses} from '../../../api/courses.jsx'

import Header from '../header/header';
import Footer from '../footer/footer';
import became from '../../../../client/assets/images/become.jpg'


class Teachers extends Component {


  render(){
    return (
      <div className="">
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        {this.props.users && this.props.courses &&
        this.props.users._id == this.props.courses.owner &&
          this.props.users.map((user,i) => {
          return (
            <div key={i}>
            {user.profile.type == "Membre" &&
              <div className="col-lg-4 ">
                <div className="card ">
                  <center>
                    <br/>
                    <img
                      className="card-img-top img-thumbnail"
                      style={{ width: 250, height: 250, background: '#ECECEC' }}
                      src={user.profile.avatar}
                      alt="photo de profil"
                    />  
                  </center>
                  <div className="card-body text-center">
                    <div className="card-title">
                      <Link to={`/profil/${user._id}`}>
                        <span>{user.profile.firstname} </span><span> {user.profile.lastname}</span>
                      </Link>
                    </div>       
                    <br/>   
                  </div>   
                </div>
              </div>                                                               
            }
            </div>
          )
          })
        }
        <br/><br/>

        { this.props.currentUser && this.props.currentUser.profile.type == "Membre" &&
        <div className="super_container become">
          <div className="container">
            <div className="row row-eq-height">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="become_title">
                  <h1>Become a teacher</h1>
                </div>
                <p className="become_text">
                  become a teacher: At Eduland, we believe in the power
                  of learning to uplift, empower, and transform. 
                  We invite you to join us and experience a new way 
                  in creating and providing ammazing courses that directly 
                  connect the students of today with the jobs of today, 
                  tomorrow, and beyond.
                </p>
                <div className="become_button text-center trans_200">
                  <a href="/addcourse">Become a teacher</a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="become_image">
                  <img src={became} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        }
        <Footer/>
      </div>
    );
  }
}
export default withTracker((props) => {
  Meteor.subscribe('courses');
  Meteor.subscribe('Users');
  
  let currentUser= Meteor.user()

  return {
    users: Meteor.users.find({}).fetch(),
    courses: Courses.find({}).fetch(),
    currentUser,
    

  };
}) (Teachers);