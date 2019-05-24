import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import Search from './search.jsx'
import StarRatingComponent from 'react-star-rating-component';
import Header from '../header/header'
import Footer from '../footer/footer'

export default class Formulaire extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      search: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(e){
    e.preventDefault();
    if ( this.state.text == "" ){
      alert("empty field")
      return null
    }
    this.setState({ search: this.state.text })
    this.setState({ text: '' })

  }

  render () {
    return (
      <div className="" style={{ background: '#ECECEC'}} >
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/>
          <form
            className="col-md-5 center-block"
            onSubmit={this.handleSubmit}>
            <input type="text"
              className="form-control input-lg"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
              placeholder="Search"/>
          </form>
        <br/><br/><br/>
        <div>
          {this.state.search !=='' && <Search search ={this.state.search} />} 
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}






