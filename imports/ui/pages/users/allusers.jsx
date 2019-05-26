import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import image from '../../../../client/assets/images/react.png'
import author from '../../../../client/assets/images/author.jpg'
import { Popconfirm, message, Icon } from 'antd';



class Cours extends Component { 

  constructor(props) {
    super(props);

    this.state = {
    };
  }


  deleteThisuser(id) {
    this.setState({ id: id })
    console.log(id);
    
    
  }

  confirm(e) {
    if (this.state.id != ""){
      Meteor.users.remove(this.state.id);
    }
    message.success('Member has been deleted');
  }

  render(){

    return (
      
      <div className="super_container" style={{ background: '#1a1a1a'}}>
        <Header/>
        <div className="popular page_section">
          <div className="container">
            <div className="row">
              <div className="col">
              </div>
            </div>
            <div className="row course_boxes">
              {this.props.users ? this.props.users.map((user, i) => {
                return (
                  <React.Fragment>
                    { user.profile.type == "Membre" ?
                      <div key={i} className="col-lg-4 course_box">
                        {this.props.currentUser && this.props.currentUser.profile.type == "Admin" && 
                          <Popconfirm
                            title="Are you sure to delete this user?"
                            onConfirm={this.confirm.bind(this)}
                            okText="Yes"
                            cancelText="No"
                            >
                            <button className="delete btn btn-danger" onClick={()=> this.deleteThisuser(user._id)}>
                              <Icon type="close-circle" />
                            </button>
                          </Popconfirm>
                        }
                        <div className="card">
                          <center>
                          <br/>
                            <img
                              className="card-img-top"
                              style={{ width: 250, height: 250 }}
                              src={user.profile.avatar}
                              alt="photo du cours"
                            />  
                          </center>
                          <div className="card-body text-center">
                            <div className="card-title">
                              <Link to={`/Profil/${user._id}`}><span>{user.username}</span></Link>   
                            </div>
                            <br/>
                          </div>
                        </div>
                      </div>
                    : null }
                  </React.Fragment>
                )
              })
            : null }
            </div>
          </div>
        </div>

        <Footer/>


      </div>

    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('Users');

  return {
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),

  };
}) (Cours); 