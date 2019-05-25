import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Forums } from '../../../api/forums';
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import Addforums from './addforums';
import Header from '../header/header'
import Footer from '../footer/footer'


class Forum extends Component {
  constructor(props){
    super(props)
    this.state = {
      question: "",
    }
    this.deleteThisForum = this.deleteThisForum.bind(this);
    this.addforum = this.addforum.bind(this);
  }

  addforum = () => {
    if (this.state.question == "")
    {this.setState({question: "exist" })}
    else if (this.state.question == "exist")
    {this.setState({question: "" })}
  }

  deleteThisForum(event, id ) {
    event.preventDefault();
    Meteor.call('forums.remove', id);
  }
  
  render() {
  
    return (
      <div className="" style={{ background: '#ECECEC'}}>
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <center>
          <div className="text-center">
            {this.props.forums ? this.props.forums.map((forum, i)=> {
              return (
                <div key={i} className="form-control col-md-6 offset-md-3">
                  {/* {this.props.currentUser && this.props.currentUser._id == forum.owner && 
                    <button className="delete btn btn-danger" onClick={(event) => this.deleteThisForum(event, forum._id)}>
                      &times;
                    </button>
                  } */}               
                  <div>
                  <table classeName="table">
                  <tbody>
                  <tr>
                  <td><strong><Link to={`/profil/${forum.owner}`}><span> {forum.username}</span></Link></strong> : {forum.question}</td>
                  </tr>
                  </tbody>
                  </table>
                </div>
                </div>
            )}
            )
            :null 
          }
          <br/><br/><br/><br/>
          </div>
          <div>
            <Icon className="col-md-6 offset-md-3" type="plus-circle" onClick={() => this.addforum()} style={{ fontSize: '30px', color: '#000' }} />
            {this.state.question == "exist" ? <Addforums /> : null}
          </div>
        </center>
        <br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('forums')
  let currentUser = Meteor.user()
  let forums= Forums.find({}, {sort: { createdAt: -1}}).fetch()

  return {
    currentUser,
    forums,
  };
}) (Forum); 

 
  
