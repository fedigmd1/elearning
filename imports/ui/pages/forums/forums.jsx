import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Forums } from '../../../api/forums';
import { Icon } from 'antd'
import Addforums from './addforums';


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
      <div className="">  
        <center>
          {this.props.forums ? this.props.forums.map((forum, i)=> {
            return (
              <div key={i}>
              <button className="delete" onClick={(event) => this.deleteThisForum(event, forum._id)}>
                &times;
              </button>
              <span className="text">
                <strong>{forum.username}</strong>: {forum.question}
              </span>
            </div>
           )}
           )
           :null 
          }
          <Icon type="plus-circle" onClick={() => this.addforum()} style={{ fontSize: '30px', color: '#000' }} />
          {this.state.question == "exist" ? <Addforums /> : null}
        </center>
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

 
  
