import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import {Courses} from '../../../api/courses'
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
import Header from '../header/header';
import Footer from '../footer/footer';
import search_background from '../../../../client/assets/images/ratingbackground.jpg'
import { Card, Col, Row } from 'antd';


class cours extends Component {

 constructor(props) {
    super(props);
  this.state = {
      rating: 3,
    };
    this.onStarClick = this.onStarClick.bind(this);
  }


  onStarClick (nextValue, prevValue, name) {
    this.setState({rating: nextValue});  
    Meteor.call('courses.rating', this.props.match.params.id, nextValue)
  }
 
  render(){
    
    return (
      <div >
      <Header/>
        <br/><br/><br/><br/><br/><br/><br/>
        <center>
          {this.props.course ?
          <div>
            <div >
              <Row gutter={16}>
                <Col span={8}>
                </Col>
                <Col span={8} style={{ background: '#ECECEC', padding: '30px' }}>
                  <Card title={this.props.course.text} bordered={false}>
                    {this.props.course.description}
                    <div>
                    <Link to={`/profil/${this.props.course.owner}`}>
                      by
                      <span className="course_author_name">{this.props.course.username}</span>
                    </Link>
                    </div>
                  </Card>
                </Col>
                <Col span={8}>
                </Col>
              </Row>
            </div>
            </div>
           :null 
          }
            <br/>
            { (this.props.currentUser && this.props.course ) ? 
              this.props.currentUser._id == this.props.course.owner ?
                ( <Link to={`/Course/${this.props.course._id}`}>Animate Course</Link> ) 
                : <Link to={`/Course/${this.props.course._id}`}>Assist Course</Link>
              : null
            }
          <br/><br/><br/><br/>
          {this.props.currentUser ? 
          this.props.course ?
          this.props.course.owner != this.props.currentUser._id ?
            <div className="search_section d-flex flex-column align-items-center justify-content-center">
              <div
                className="search_background"
                style={{
                  backgroundImage: `url(${search_background})`
                }}
              />
              <div className="search_content text-center">
                <br/><br/>
                <h1 className="search_title">Rating now : {this.props.course.rating}/5</h1>
                <br/><br/>
                <StarRatingComponent
                  name=""
                  starCount={5}
                  value={this.props.course.rating} 
                  onStarClick={this.onStarClick}
                />
                <br/><br/><br/>
              </div>
              </div>
              :null
              :null
              :null
            }
        </center>
        <Footer/>
      </div>
    );
  }
}

export default withTracker((props) => {
  Meteor.subscribe('courses');
  let currentUser = Meteor.user();

  return {
    currentUser,
    course: Courses.findOne({"_id": props.match.params.id })
  };
}) (cours); 