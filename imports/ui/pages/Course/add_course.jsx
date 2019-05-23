import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'

import {Courses} from '../../../api/courses'
import Course from '../../containers/Course'
import Header from '../header/header';
import Footer from '../footer/footer';
import backgroun from '../../../../client/assets/images/background.jpg'


class AddCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: this.getMeteorData(),
      text: "",
      nom: "",
      description: "",
      duration: "",
      time: "",
      image: '',
    };
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    if (!this.state.login.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.login.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  sortCourses(event) {
    let x=event.target.value;
    //console.log(x); 
    this.setState({text: x })
  }
  
  renderCourses() {
    let filteredCourses = this.props.courses;
    //console.log(this.state.text)
    if (this.state.text=="text") {
      filteredCourses = filteredCourses.sort((a,b)=>{
       return a.text.localeCompare(b.text)
      })
    }
    else if (this.state.text=="createdAt")
    {
      filteredCourses = filteredCourses.sort((a,b)=>{
        return b.createdAt-a.createdAt
      });
    }

    if (this.state.hideCompleted) {
      filteredCourses = filteredCourses.filter(course => !course.checked);
    }

    return (
      filteredCourses.map((course) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = course.owner === currentUserId;
 
      return (
        <Course
          key={course._id}
          course={course}
          showPrivateButton={showPrivateButton}
        />
      );
    })

    )
  }

  handleSubmit(event) { 
    event.preventDefault();
 
    console.log(this.state.nom);
    console.log(this.state.description);

    let reader = new FileReader();
    let nom = this.state.nom
    let description =this.state.description
    let duration =this.state.duration
    let time =this.state.time
    if ( nom == "" || description== "" || duration == "" || time == ""){
      alert("empty field")
      return (null)
    }
    reader.readAsDataURL(this.state.image);
    reader.onload = function () {  
       Meteor.call('courses.insert', nom, description, time, duration, reader.result );
       alert("congratulation! new course is added !")
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    // Clear form
      this.setState({ nom: "", description: "", time="", duration="", image: ""})
      
  }


  render () {
    return (
      <div className="">
        <Header/>
        <center>
          <div className="home">
            <div className="home_background_container prlx_parent">
              <div
                className="home_background prlx"
                style={{ backgroundImage: `url(${backgroun})` }}
              />
            </div>
            <div className="home_content text_content">
              <h1>Add a new course</h1>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


              { this.props.currentUser ?
                <form className="new-course inputaddcours" >
                  <div className="form-group text-center">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.nom}
                      onChange={(e) => this.setState({ nom: e.target.value })}
                      placeholder="Course name"
                    />
                  </div>
                  <br/>
                  <div className="form-group text-center">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.description}
                      onChange={(e) => this.setState({ description: e.target.value })}
                      placeholder="Description"
                    />
                  </div>
                  <div className="form-group text-center">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.duration}
                      onChange={(e) => this.setState({ duration: e.target.value })}
                      placeholder="Duration"
                    />
                  </div>
                  <div className="form-group text-center">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.time}
                      onChange={(e) => this.setState({ time: e.target.value })}
                      placeholder="Time"
                    />
                  </div>
                  <br/>
                  <div className="form-group text-center">
                    <input 
                      type="file"
                      className="form-control"
                      onChange={(e) => this.setState({ image: e.target.files[0] })}
                    />
                  </div>
                  <br/>
                  <div className="form-group text-center btn btn-success">
                    <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Add Course</button>
                  </div>
                </form>
                
                : ''
              }          
          </div>
        </center>
        <Footer/>
      </div>
    )    
  }
}


export default withTracker(() => {
  Meteor.subscribe('courses');
  return {

    courses: Courses.find({}).fetch(),
    incompleteCount: Courses.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),

  };
}) (AddCourse); 


  {/* 
    <label className="hide-completed">
      <input
        type="checkbox"
        readOnly
        checked={this.state.hideCompleted}
        onClick={this.toggleHideCompleted.bind(this)}
      />
      Hide Completed Courses
    </label>


    <select onChange={e=> {this.sortCourses(e)}}>
      <option value="text">Nom</option>
      <option value="createdAt">Date de creation</option>
    </select> 
    
    <div className="" >
        {this.renderCourses()}
    </div>
  */}