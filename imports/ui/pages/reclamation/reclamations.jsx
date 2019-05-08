import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Reclamations } from '../../../api/reclamations';

class Reclamation extends Component {
  constructor(props){
    super(props)
    this.state = {
      response: "",
      clicked: false,
      id: "",
    }
    
    this.reclamation = this.reclamation.bind(this)
    this.click = this.click.bind(this)
  }
  reclamation = (event, id) => {
    event.preventDefault();
    console.log(id)
    Meteor.call('reclamation.response', id, this.state.response )
    this.setState({ response: "" })
  }
  deletereclamation(id) {
    Meteor.call('reclamation.remove', id);
  }


  click = (id) => {
    if (this.state.clicked == false)
    {this.setState({clicked: true })}
    else if (this.state.clicked= true )
    {this.setState({clicked: false })}
 
    this.setState({ id: id })
  }
  
  render() {
  
    return (
      <div className="">
      {this.props.reclamations ? this.props.reclamations.map((reclamation, i) =>{
        return (
          <div key={i}>
            <center>
              <button className="delete" onClick={() => this.deletereclamation(reclamation._id)}>
                &times;
              </button>
              <form onSubmit={(event) => this.reclamation(event, reclamation._id)}>
                <div onClick={() => this.click(reclamation._id)}><strong>{reclamation.sendername}:</strong>{reclamation.message}</div>
                <br/>
                {this.state.id == reclamation._id && this.state.clicked== true ?
                  <div>
                    <input
                    type="text"
                    onChange={(e) => this.setState({ response: e.target.value })}
                    value={this.state.response}
                    placeholder={reclamation.response}
                    />
                    <button onClick={(event) => this.reclamation(event, reclamation._id)}>Response</button>
                  </div>
                :null}
  
              </form>
            </center>
          </div>
        )
      })
      : null   
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

