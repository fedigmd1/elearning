import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Reclamations } from '../../../api/reclamations'
import Header from '../header/header'
import Footer from '../footer/footer';


export default class AllReclamations extends Component {
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
    this.setState({ response: "", clicked: false})
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
      <Header/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      {this.props.currentUser && this.props.currentUser.profile.type == "Admin" && 
        this.props.reclamations ? this.props.reclamations.map((reclamation, i) =>{
        return (
          <div key={i}>
          <div className="container">
                <div class="row">
                <table className="table table-dark col">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Message</th>
                      <th scope="col">Response</th>
                    </tr>
                  </thead>
                  <tbody onClick={() => this.click(reclamation._id)}>
                    <tr>
                      <th scope="row">
                        <button className="delete btn btn-outline-danger" onClick={() => this.deletereclamation(reclamation._id)}>
                          &times;
                        </button>
                      </th>
                      <td>{reclamation.sendername}</td>
                      <td>{reclamation.message}</td>
                      <td>{reclamation.response}</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
                {this.state.id == reclamation._id && this.state.clicked== true &&
                  <div>
                  <br/><br/>
                  <div >
                    <input
                    type="text"
                    onChange={(e) => this.setState({ response: e.target.value })}
                    value={this.state.response}
                    placeholder={reclamation.response}
                    />
                    <button className="btn btn-success"onClick={(event) => this.reclamation(event, reclamation._id)}>Response</button>
                  </div>
                  </div>
                }
                </div>
              </div>
          </div>
        )
      })
      : null   
      }
      <br/><br/><br/><br/><br/><br/>
      <Footer/>
      </div>
    );
  }
}