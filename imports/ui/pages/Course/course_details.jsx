import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import {Courses} from '../../../api/courses'
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
import Header from '../header/header';
import Footer from '../footer/footer';
import search_background from '../../../../client/assets/images/azerty.jpg'
import background from '../../../../client/assets/images/milestones_background.jpg'
import { Card, Col, Row, Button } from 'antd';



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
      <div>
        <Header/>
        <div className="home_background_container prlx_parent">
          <div
            className="home_background prlx"
            style={{ backgroundImage: `url(${search_background})` }}
          />
        </div>
        <br/><br/><br/><br/><br/><br/><br/>
        <center>
          {this.props.course ?
          <div>
            <br/><br/>
            <div>
              <Row gutter={16}>
                <Col span={8}>
                </Col>
                <Col span={8} style={{ background: '#ECECEC', padding: '30px' }}>
                  <Card title={this.props.course.text} bordered={false}>
                    {this.props.course.description}
                    <br/>
                    Date: {this.props.course.date}
                    <br/>
                    Time: {this.props.course.time}
                    <br/>
                    Duration: {this.props.course.duration}
                    <br/>
                    {this.props.currentUser && this.props.currentUser._id != this.props.course.owner &&
                    <div>
                      by
                      <Link to={`/profil/${this.props.course.owner}`}>
                        <span> {this.props.course.username}</span>
                      </Link>
                    </div>
                    }
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
            { this.props.currentUser && this.props.course && this.props.currentUser.profile.type == 'Membre' ?
              this.props.currentUser._id == this.props.course.owner  ?
                ( <Link to={`/Course/${this.props.course._id}`}><Button type="danger">Animate Course</Button></Link> ) 
                : <Link to={`/Course/${this.props.course._id}`}><Button type="danger">Assist Course</Button></Link>
              : null
            }
          <br/><br/><br/><br/>
          {this.props.currentUser ? 
            this.props.course ?
              this.props.course.owner != this.props.currentUser._id && this.props.currentUser.profile.type == 'Membre' ?  
                <div>   
                  <br/><br/>
                  <h1 className="titre">Rating now : {this.props.course.rating}/5</h1>
                  <br/><br/>
                  <StarRatingComponent
                    name=""
                    starCount={5}
                    value={this.props.course.rating} 
                    onStarClick={this.onStarClick}
                  />
                  <br/><br/><br/>
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