import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import { Draggable, Droppable } from 'react-drag-and-drop'

import { Menu, Icon, Switch } from 'antd';

const SubMenu = Menu.SubMenu;

export default class donnerCours extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: '1',
    }
  }
  
  onDrop(data) {
    console.log(data.fruit)
    return (data.fruit);
    
  }

  
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
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
          <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
          <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
          <Draggable type="fruit" data="silver"><li>Silver</li></Draggable>
        </ul>
        <Droppable
          types={['fruit']} // <= allowed drop types
          onDrop={this.onDrop.bind(this)}>
          <ul className="Smoothie">
            <input type="text"/>
          </ul>
        </Droppable>

          <div>
            
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>

      </div>
    )
  }
    
}






