import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import {Courses} from '../../../api/courses'
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';


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
        <center><h1>Test</h1>
          {this.props.course ? 
            <div className="card-body text-center">
              <div className="card-title">
                <span>{this.props.course.text}</span>
              </div>
              <br/>
              <div className="card-text">
                {this.props.course._id}
              </div>
              <div>
                <span>{this.props.course.username}</span>
              </div>
            </div>
           :null 
          }
            <Link to='/Courses'>All Courses</Link><br/>
            { (this.props.currentUser && this.props.course ) ? 
              this.props.currentUser._id == this.props.course.owner ?
                ( <Link to={`/Course/${this.props.course._id}`}>Animate Course</Link> ) 
                : <Link to={`/Course/${this.props.course._id}`}>Assist Course</Link>
              : null
            }
          {this.props.currentUser ? 
          this.props.course ? 
            <div>
              <br/><br/>
              <h2>Rating now: {this.props.course.rating}/5</h2>
              <StarRatingComponent
                name=""
                starCount={5}
                value={this.props.course.rating} 
                onStarClick={this.onStarClick}
              />
              <br/>
            </div>
            :null
            :null
          }

        <br/><br/><br/>
        </center>
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