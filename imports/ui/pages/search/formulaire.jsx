import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import Search from './search.jsx'
import { Rate } from 'antd';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default class Formulaire extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      search: '',
      value: 3,
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({ search: this.state.text })
    this.setState({ text: '' })
  }

  handleChange = (val) => {
    this.setState({ value: val });
  }


  render () {
    return (
      <div>
        <form
          className="form col-md-12 center-block"
          onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text"
              className="form-control input-lg"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
              placeholder="Search"/>
          </div>
        </form>
        <br/><br/><br/>
        <span>
          <Rate tooltips={desc} onChange={this.handleChange} value={this.state.value} />
          {this.state.value ? <span className="ant-rate-text">{desc[this.state.value - 1]}</span> : ''}
        </span>
        <br/><br/><br/>

        <div>
          {this.state.search !=='' && <Search search ={this.state.search} />}
        </div>
      </div>
    );
  }
}






