import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';


export default class User extends Component {

  render() {
    return (
      <Container>
        <Row>
          <div className="contour">
            <div className="margin">
              <Col sm={{ size: 2, order: 2, offset: 0 }}>
                <img
                className="img-circle image"
                style={{ width: 250, height: 250 }}
                src={this.props.user.profile.avatar}
                alt="photo de profil"
                />
              </Col>
              <Col sm={{ size: 4, order: 6, offset: 4 }}>
                <br/><br/><br/>
                <h1>{this.props.user.profile.firstname} {this.props.user.profile.lastname}</h1>
              </Col>
            </div>
          </div>
          <br/>
          <Link to={`/MyCourses/${this.props.user._id}`}><h3>His Courses</h3></Link>
        </Row>
      </Container>     
    );

  }
}