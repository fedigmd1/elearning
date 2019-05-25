import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Reclamations } from '../../../api/reclamations';
import {withTracker} from 'meteor/react-meteor-data'
import AddReclamation from './addreclamation';
import AllReclamations from './allreclamations';


class Reclamation extends Component {
  constructor(props){
    super(props)
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
