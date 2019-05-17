import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

export default class Current extends Component {

  render() {
    return (
      <div>
        <br/>
        {this.props.currentUser.username}
        {this.props.currentUser._id}
        <div>
          <img
            className="img-circle"
            style={{ width: 300, height: 300 }}
            src={this.props.currentUser.profile.avatar}
            alt="photo de profil"
          />
        </div>
          {this.props.currentUser.profile.firstname}
          <button><Link to={`/MyCourses/${this.props.currentUser._id}`}><h3>Courses</h3></Link></button>
      </div>      
    ); 

  }
}