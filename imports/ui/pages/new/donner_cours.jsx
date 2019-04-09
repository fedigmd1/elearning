import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import { Draggable, Droppable } from 'react-drag-and-drop'
import { Alert, Badge, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { Menu, Icon, Switch } from 'antd';

const SubMenu = Menu.SubMenu;

export default class donnerCours extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '1',
    }
  }
  
  onDrop(data) {
    console.log(data)
    
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <ul>
          <Draggable type="course" style={{ fontSize: '50px', color: '#08c' }} data="Message"><Icon type="mail" /></Draggable>
          <Draggable type="course" style={{ fontSize: '50px', color: '#08c' }} data="Image"><Icon type="area-chart" /></Draggable>
          <Draggable type="course" style={{ fontSize: '50px', color: '#08c' }} data="File"><Icon type="file-add" /></Draggable>
        </ul>
        
        <Droppable
          types={['course']}
          onDrop={this.onDrop.bind(this)}>
          <div>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </Droppable>
          <br/>
          
      </div>
    )
  }   
}