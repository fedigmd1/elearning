import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import { Draggable, Droppable } from 'react-drag-and-drop'
import { Alert, Badge, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { Menu, Icon, Switch, Drawer } from 'antd';

const SubMenu = Menu.SubMenu;

export default class donnerCours extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '1',
      visible: false
    }
  }

  Drawer = () => {
    if (this.state.visible)
    this.setState({
      visible: false,
    });
    else 
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  
  onDrop(data) {
    console.log(data)
      return (
        <div>
          {data}
          <h1>data</h1>
        </div>        
      )
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
          <center><h1>Nom Course</h1></center>
          <br/>
          <Button type="primary" onClick={this.Drawer}>
            <Icon type="menu-fold" />
          </Button>
          <Drawer
            placement="left"
            closable={false}            
            visible={this.state.visible}
          >
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="Message"><Icon type="mail" /></Draggable>
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="Image"><Icon type="area-chart" /></Draggable>
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="File"><Icon type="file-add" /></Draggable>
          </Drawer>
        
        <Droppable
          types={['course']}
          onDrop={this.onDrop.bind(this)}>
          <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>--------</h1>
          </div>
        </Droppable>          
      </div>
    )
  }   
}

