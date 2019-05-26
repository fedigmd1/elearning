import React, {Component} from 'react';
import ReactDOM from 'react-dom'

export default class Notfound extends Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <a href="/">Homepage</a>
        </div>
      </div>
    );
  }
}



