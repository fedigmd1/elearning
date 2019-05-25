import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'antd'
import Header from '../header/header'
import Footer from '../footer/footer';

export default class AddReclamation extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: ""
    }
  }
  reclamation (event, id) {
    event.preventDefault();
    if ( this.state.message == "" ){
      alert("empty field")
      return null
    }
    Meteor.call('reclamation.insert', id, this.state.message)
    this.setState({ message: "" })
  }
  render(){
    return (
      <div className="form-group" style={{ background: '#ECECEC'}}>
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        { this.props.currentUser && this.props.reclamations &&
          this.props.reclamations.map((reclamation, i) => {
            return (
              <div key={i}>
                {this.props.currentUser._id == reclamation.senderId ?
                  <div class="container">
                    <div class="row">
                    <table className="table table-dark col">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Message</th>
                          <th scope="col">Response</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">*</th>
                          <td>{reclamation.sendername}</td>
                          <td>{reclamation.message}</td>
                          <td>{reclamation.response}</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  </div>
                  : <h1>hhhhhh</h1>
                }
              </div>
            )
          })
        }
        <br/><br/>
        { this.props.currentUser && this.props.currentUser.profile.type == "Membre" ?
          <center>
            <form className="form-group text-center inputaddcours " onSubmit={(e) => this.reclamation(e, this.props.currentUser._id)}>
              <input
                type="text"
                className="form-control"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
                placeholder="Add Reclamation"
                />
              <br/>
              <button 
                type="button" 
                class="btn btn-outline-success" 
                onClick={(e) => this.reclamation(e, this.props.currentUser._id)}
              >Add </button>
            </form>
          </center>
          :null 
        }
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }
}
