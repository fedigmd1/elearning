import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Courses } from '../../../api/courses'
import { Elements } from '../../../api/elements'
import Header from '../header/header'
import Footer from '../footer/footer'

import Animate from './course_animation/animate'
import Assist from './course_animation/assist';

class donnerCours extends Component {

  constructor(props){
    super(props);
    this.state = this.getMeteorData();
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
    
  render() {
    return (   
      <div style={{ background: '#ECECEC'}}>
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/>
        <center>
          {this.props.course ?
            <h1>
              {this.props.course.text}
            </h1>
            : <div><h1>Sorry, this course does not exist!</h1></div>
          }
        </center>
        {this.props.course && this.props.currentUser ?
          this.props.course.owner == this.props.currentUser._id ?
            <Animate id={this.props.match.params.id} elements={this.props.elements}/>
            :<Assist id={this.props.match.params.id} elements={this.props.elements} currentUser={this.props.currentUser}/>
          :null
        }
        <br/><br/>
        <Footer/>
      </div>
    )
  }   
}
export default withTracker((props) => {
  Meteor.subscribe('courses');
  Meteor.subscribe('elements');

  return {
    currentUser: Meteor.user(),
    elements: Elements.find({ courseId: props.match.params.id }).fetch(),
    course: Courses.findOne({ "_id": props.match.params.id }),
  };
}) (donnerCours);
