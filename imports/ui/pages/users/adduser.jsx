import React, { Component } from 'react';
import { withHistory, Link, Redirect } from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data'
import { Accounts } from 'meteor/accounts-base';
import backgroun from '../../../../client/assets/images/back3.jpg'
import logo from '../../../../client/assets/images/Eduland.png'
import { message } from 'antd';


class Adduser extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      category: 'student',
      name: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      avatar: '',
      image:'',
      category: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getcategory = this.getcategory.bind(this);

  }

  getcategory(){
    let x=event.target.value;
    this.setState({category: x })
  }

  handleSubmit(e){
    let self = this ;
    e.preventDefault();
    let name = this.state.name
    let firstname = this.state.firstname
    let lastname = this.state.lastname
    let email = this.state.email
    let password = this.state.password
    let category = this.state.category


    let reader = new FileReader();
    reader.readAsDataURL(this.state.avatar);
    reader.onload = function () {  
    
    let user = {email: email, username: name, 
      profile:{ firstname: firstname, lastname: lastname, avatar: reader.result, type: category },
      password: password}

    Accounts.createUser(user, (err) => {
        if(err){
          self.setState({
            error: err.reason
          });
        }
        else {
          self.props.history.push('/'); 
          message.success('You added a new admin !');}
      });   
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    this.setState({error: 'Success'})
  }

  render(){
    const error = this.state.error;
    return (
      <div>
        {this.props.currentUser ? this.props.currentUser.profile.type == "Admin" ?
          <div>
            <div className="home">
              <div className="home_background_container prlx_parent">
                <div
                  className="home_background prlx"
                  style={{ backgroundImage: `url(${backgroun})` }}
                />
              </div>
              <br/><br/>
              <div className="modal show">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <center>
                        <h1 className="text-center">Add user</h1>
                      </center>
                    </div>
                    <div className="modal-body">
                      { error.length > 0 ?
                        error == "Success" ?
                        <div className="alert alert-success fade in">{error}</div>
                        :
                        <div className="alert alert-danger fade in">{error}</div>
                        :''}
                      <form  id="login-form"
                            className="form col-md-12 center-block"
                            onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input type="text" id="signup-pseudoname"
                            className="form-control input-lg"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            placeholder="pseudo"/>
                        </div>
                        <div className="form-group">
                          <input type="text" id="signup-firstname"
                            className="form-control input-lg" 
                            value={this.state.firstname}
                            onChange={(e) => this.setState({ firstname: e.target.value })}
                            placeholder="first name"/>
                        </div>
                        <div className="form-group">
                          <input type="text" id="signup-lastname"
                            className="form-control input-lg" 
                            value={this.state.lastname}
                            onChange={(e) => this.setState({ lastname: e.target.value })}
                            placeholder="last name"/>
                        </div>
                        <div className="form-group">
                          <input type="email" 
                            id="signup-email"
                            className="form-control input-lg"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            placeholder="email"/>
                        </div>
                        <div className="form-group">
                          <input type="password" id="signup-password"
                            className="form-control input-lg"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            placeholder="password"/>
                        </div>

                        <div className="form-group">
                          <input type="file"
                            className="form-control input-lg"
                            onChange={(e) => this.setState({ avatar: e.target.files[0] })}
                            placeholder="avatar"/>
                        </div>

                        <div className="category">
                          <center>
                            <select onChange={e=> {this.getcategory(e)}}>
                            <option value="Admin">Admin</option>
                            <option value="Membre">Member</option>
                            </select>
                          </center>
                          <br/>
                        </div>

                        <div className="form-group">
                          <input type="submit" id="login-button"
                                className="btn btn-lg btn-primary btn-block"
                                value="Sign Up" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer" style={{borderTop: 0}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        :<Redirect to ="/404" />
        :null
        }
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),

  };
}) (Adduser); 