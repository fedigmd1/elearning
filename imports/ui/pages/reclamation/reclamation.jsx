import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { withHistory } from 'react-router-dom';
import { Reclamations } from '../../../api/reclamations';
import {withTracker} from 'meteor/react-meteor-data'
import AddReclamation from './addreclamation';
import AllReclamations from './allreclamations';


class Reclamation extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: this.getMeteorData(),
    }
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

  render () {
    return (
      <div className="" >
        {this.props.currentUser && this.props.currentUser.profile.type=="Admin" ?
          <AllReclamations currentUser={this.props.currentUser} reclamations={this.props.reclamations}/>
          :<AddReclamation currentUser={this.props.currentUser} reclamations={this.props.reclamations}/>
        }
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('reclamations')
  let currentUser = Meteor.user()
  
  return {
    currentUser,
    reclamations: Reclamations.find({}, {sort: { createdAt: -1}}).fetch()
  };
}) (Reclamation); 
