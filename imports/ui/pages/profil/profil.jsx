import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data'
import {Link } from 'react-router-dom'
import author from '../../../../client/assets/images/author.jpg'



class profil extends Component {
 
  render () {
    console.log(this.props.match.params.id);
    if (this.props.currentUser)
    {
      console.log(this.props.currentUser);
      console.log(this.props.currentUser.emails);
    }
    return (
      <div>
        <center>
          <React.Fragment/>
            {this.props.match.params.id ? (this.props.currentUser) && (this.props.currentUser._id==this.props.match.params.id)?
              <div>
                <h1>currentUser</h1>
                {this.props.currentUser.username}
                {this.props.currentUser.emails.address}
                {this.props.currentUser._id}
                <div className="course_author_image">
                  <img
                    src={author}
                    alt=""
                  />
                </div>
                <div className="course_author_image">
                  <img
                    src={this.props.currentUser.profile.firstname}
                    alt=""
                  />
                </div>
                  {this.props.currentUser.profile.firstname}
                </div>
                : this.props.user ? (
                <div>
                <h1>user</h1>
                {this.props.user.username}              
                {console.log(this.props.user.emails)}    
                {this.props.currentUser._id}
                <img
                    src={this.props.user.profile.firstname}
                    alt=""
                />         
                </div>
              ):
                  <h1>Sorry! This User does not exist !</h1>
              : this.props.currentUser ? (
                <div>
                <h1>currentUser</h1>
                {this.props.currentUser.username}
                {this.props.currentUser.emails.address}
                {this.props.currentUser._id}
                <div className="course_author_image">
                  <img
                    src={author}
                    alt=""
                  />
                </div>
                <div className="course_author_image">
                  <img
                    src={this.props.currentUser.profile.firstname}
                    alt=""
                  />
                </div>
                  {this.props.currentUser.profile.firstname}
                </div>
              ) : null 
            }
          <React.Fragment/>
          <Link to='/Courses'>Courses</Link>
        </center>
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