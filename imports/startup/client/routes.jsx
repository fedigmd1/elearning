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


import Contact from '../../ui/pages/new/contact.jsx';
import Courses from '../../ui/pages/new/cours.jsx';

import Course_details from '../../ui/pages/new/course_details.jsx';

import Elements from '../../ui/pages/new/elements.jsx';
import New_Post from '../../ui/pages/new/new_post.jsx';
import New from '../../ui/pages/new/new.jsx';
import Teachers from '../../ui/pages/new/teachers.jsx';

//ghdfbxbf
export const renderRoutes = () => (
  <Router>
    <div>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route exact={true} path="/" component={AppContainer}/>


      <Route path="/Contact" component={Contact}/>
      <Route path="/Courses" component={Courses}/>

      <Route path="/Course_details" component={Course_details}/>


      <Route path="/Elements" component={Elements}/>
      <Route path="/New_Post" component={New_Post}/>
      <Route path="/New" component={New}/>
      <Route path="/Teachers" component={Teachers}/>
    

    
    </div>
  </Router>
);