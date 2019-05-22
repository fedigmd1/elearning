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
        <br/><br/><br/><br/><br/>
        <center>
          {this.props.course ? 
            <div className="card-body text-center">
              <div className="card-title">
                <h1>{this.props.course.text}</h1>
              </div>
              <br/>
              <div className="card-text">
                {this.props.course._id}
              </div>
              <div className="course_author_name">
              <Link to={`/profil/${this.props.course.owner}`}><span>{this.props.course.username}</span></Link>
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