// react router configuration

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'

// pages
import SignupPage from '../../ui/pages/SignupPage.jsx'
import LoginPage from '../../ui/pages/LoginPage.jsx'
import MainPage from '../../ui/pages/MainPage'


import Courses from '../../ui/pages/Course/cours.jsx';
import Course_details from '../../ui/pages/Course/course_details.jsx';
import My_Courses from '../../ui/pages/Course/my_courses.jsx';
import AddCourse from '../../ui/pages/Course/add_course.jsx';


import Contact from '../../ui/pages/new/contact.jsx';
import Elements from '../../ui/pages/new/elements.jsx';
import New_Post from '../../ui/pages/new/new_post.jsx';
import New from '../../ui/pages/new/new.jsx';
import Teachers from '../../ui/pages/new/teachers.jsx';


export const renderRoutes = () => (
  <Router>
    <div>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route exact={true} path="/" component={AppContainer}/>


      <Route path="/Contact" component={Contact}/>
      <Route path="/Courses" component={Courses}/>

      <Route path="/MyCourses" component={My_Courses}/>
      <Route path="/Course_details/:id" component={Course_details}/>
      <Route path="/AddCourse" component={AddCourse}/>



      <Route path="/Elements" component={Elements}/>
      <Route path="/New_Post" component={New_Post}/>
      <Route path="/New" component={New}/>
      <Route path="/Teachers" component={Teachers}/>
    

    
    </div>
  </Router>
);