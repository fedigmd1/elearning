import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import { withHistory } from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data'
import Header from '../header/header';
import Current from './currentprofile';
import User from './userprofile';
import search_background from '../../../../client/assets/images/milestones_background.jpg'
import Footer from '../footer/footer';
import { Container, Row, Col } from 'reactstrap';


class profil extends Component {
  
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
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


  
  render () {
    return (
      <div>
        <Header/>
        <div className="home">
          <div className="home_background_container prlx_parent">
            <div
              className="home_background prlx"
              style={{ backgroundImage: `url(${search_background})` }}
            />
          </div>
          
          <br/><br/><br/><br/><br/><br/><br/>
          {this.props.match.params.id ? (this.props.currentUser)
          && (this.props.currentUser._id==this.props.match.params.id) ?
            <div>
              <Col className="text-right">
                <button className="btn btn-warning" onClick={this.logout}>Logout</button>
              </Col>
              <Current currentUser={this.props.currentUser}/>
              <button onClick={this.logout}>Logout</button>
            </div>
            : this.props.user && (this.props.user._id==this.props.match.params.id) ?  (
            <div>
              <Col/>
              <User user={this.props.user} />
            </div>
              ): <div className="titre"><br/><center><h1>Sorry! This User does not exist !</h1></center></div>
              : this.props.currentUser ? (
              <div>
                <Col className="text-right">
                  <button className="btn btn-warning" onClick={this.logout}>Logout</button>
                </Col>                
                <Current currentUser={this.props.currentUser}/>       
              </div>  
                ) : null 
          }
        </div>
        <Footer/>
      </div>
    )
  }
}

export default withTracker((props) => {
  Meteor.subscribe('Users');
  let user= Meteor.users.findOne({"_id": props.match.params.id })
  let currentUser= Meteor.user()
  
  return {
    currentUser,
    user,
  };
}) (profil);