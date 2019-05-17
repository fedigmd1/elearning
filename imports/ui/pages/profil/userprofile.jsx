import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';


export default class User extends Component {

  render() {
    return (
      <div>
        <br/>
        {this.props.user.username}              
        {this.props.user._id}
        <div>
        <img
          className="img-circle"
          style={{ width: 300, height: 300 }}
          src={this.props.user.profile.avatar}
          alt=""
        />
        </div>
          {this.props.user.profile.firstname}      
          <button><Link to={`/MyCourses/${this.props.user._id}`}><h3>Courses</h3></Link></button>
      </div>      
    ); 

  }
}