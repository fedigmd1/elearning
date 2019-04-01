import React, {Component} from 'react';

export default class Table extends Component {

  render () {
    return (
      <li>
        {this.props.table.text}
        {this.props.table.createdAt}

      </li>
    )


  }

   
}