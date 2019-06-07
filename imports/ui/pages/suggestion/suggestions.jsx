import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'antd'
import { withHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Suggestions } from '../../../api/suggestions'
import Header from '../header/header'
import Footer from '../footer/footer';

class Suggestion extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: this.getMeteorData(),
      message: ""
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


  suggestion (event, id) {
    event.preventDefault();
    if ( this.state.message == "" ){
      alert("empty field")
      return null
    }
    
    Meteor.call('suggestions.insert', id, this.state.message)    

    this.setState({ message: "" })
  }

  deletesuggestion(id) {
    Meteor.call('suggestions.remove', id);
  }


  render(){
    return (
      <div className="form-group" style={{ background: '#ECECEC'}}>
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        {this.props.suggestions ?
          this.props.suggestions.map((suggestion, i) => {
            return (
              <div key={i}>
                
                  <div className="container">
                    <div className="row">
                      <table className="table table-dark col">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Idea</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {this.props.currentUser._id == suggestion.owner ?
                            <th scope="row">
                              <button className="delete btn btn-outline-danger"
                                onClick={() => this.deletesuggestion(suggestion._id)}>
                                &times;
                              </button>
                            </th>
                            :
                            <th scope="row">
                            </th>
                            }
                            <td>{suggestion.username}</td>
                            <td>{suggestion.demande}</td>
                            
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
            )
          })
        :null                    
        }
        { this.props.currentUser && this.props.currentUser.profile.type == "Membre" ?
          <center>
            <form className="form-group text-center inputaddcours "
              onSubmit={(e) => this.suggestion(e, this.props.currentUser._id)}>
              <input
                type="text"
                className="form-control"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
                placeholder="Add Suggestion"
                />
              <br/>
              <button 
                type="button" 
                className="btn btn-outline-success" 
                onClick={(e) => this.suggestion(e, this.props.currentUser._id)}
              >
                Add
              </button>
            </form>
          </center>
          :null 
        }
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
     
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('suggestions')
  let currentUser = Meteor.user()
  let suggestions= Suggestions.find({}, {sort: { createdAt: -1}}).fetch()

  return {
    currentUser,
    suggestions,
  };
}) (Suggestion); 