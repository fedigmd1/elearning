// login page
import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      email: '' ,
      password: '',

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/');
      }
    });
  }

  render(){
    const error = this.state.error;
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
              <form  id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="email"
                    className="form-control input-lg"
                    placeholder="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />

                </div>
                <div className="form-group">
                   <input type="password"
                    className="form-control input-lg"
                    placeholder="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </div>
                <div className="form-group text-center">
                  <input type="submit"
                        id="login-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Login" />
                </div>
                <div className="form-group text-center">
                  <p className="text-center">
                    Don't have an account? Register <Link to="/signup">here</Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>
    );
  }
}