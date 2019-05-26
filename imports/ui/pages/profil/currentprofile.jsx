import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link, Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

export default class Current extends Component {
  
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="contour">
              <div className="margin">
                <Col sm={{ size: 2, order: 2, offset: 0 }}>
                  <img
                  className="img-circle image"
                  style={{ width: 250, height: 250 }}
                  src={this.props.currentUser.profile.avatar}
                  alt="photo de profil"
                  />
                </Col>
                <Col sm={{ size: 4, order: 6, offset: 4 }}>
                  <br/><br/><br/>
                  <div className="titre"><h1>{this.props.currentUser.profile.firstname} {this.props.currentUser.profile.lastname}</h1></div>
                </Col>
              </div>
            </div>
            <br/>
          </Row>  
          {this.props.currentUser.profile.type != "Admin" &&
            <Row>  
              <Col sm="12" md={{ size: 6, offset: 5 }}>
                <Link to={`/MyCourses/${this.props.currentUser._id}`}><h3 className="titre btn btn-danger">My courses</h3></Link>
              </Col>
            </Row>  
          }
        </Container>
      </div>
    ); 

  }
}