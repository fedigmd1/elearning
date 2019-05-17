import React, {Component} from 'react'
import ReactDOM from 'react-dom'
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
          style={{ width: 250, height: 250 }}
          src={this.props.user.profile.avatar}
          alt=""
        />
          {this.props.user.profile.firstname}      
          <button><Link to={`/MyCourses/${this.props.user._id}`}><h3>Courses</h3></Link></button>
        </div>
      </div>      
    ); 

  }
}