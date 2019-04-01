import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withHistory} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import data, { Cours } from './cours.jsx'



export default class cours extends Component {

 constructor(props) {
    super(props);
 
  } 


  render(){
    console.log(this.props)
    console.log(data)
    console.log(Cours)


    return (
      <div>
      <h1>Test</h1>
      </div>
    )
  }



}  