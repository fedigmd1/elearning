import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'reactstrap';
import { Menu, Icon, Switch, Drawer } from 'antd';
import { Link } from 'react-router-dom'
import { Draggable, Droppable } from 'react-drag-and-drop'
import { Alert, Badge, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Animate extends Component { 

  constructor(props) {
    super(props);
  }
  onDrop(data) {
    let courseId = this.props.id
    let createdAt = new Date()
    let obj
    switch (data.course) {
      case "Text":
        obj = {
          kind: "text",
          text: "Replace me !",
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;
      case "Draw":
        obj = {
          kind: "draw",
          path: [],
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;
      case "Image":
        obj = {
          kind: "image",
          url: "http://aaaa.com",
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;
      case "File":
        obj = {
          kind: "file",
          text: "Replace me !",
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;
      case "Video":
        obj = {
          kind: "video",
          url: "http://aaaa.com",
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;
      case "Message":
        obj = {
          kind: "message",
          text: "Replace me !",
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;

    }
    console.log(obj);
    if (courseId !== undefined){
      Meteor.call('elements.insert', obj);
    }
  }

  deleteThisElement = (id) => {
    Meteor.call('elements.remove', id);
  }

  render(){
    
    return (
      <div className="">
        <Row>
          <Col xs="1" >
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="Text" ><Icon type="edit" /></Draggable>
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="Draw"><Icon type="highlight" /></Draggable>
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="Image"><Icon type="area-chart" /></Draggable>
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="File"><Icon type="file-add" /></Draggable>
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="Video"><Icon type="youtube"/></Draggable>
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="Message"><Icon type="mail"/></Draggable>
          </Col> 
          <Col>
            <Droppable
              types={['course']}
              onDrop={this.onDrop.bind(this)}>
              <div>
                <h1>---------------------------------------------------------------------------------------------------</h1>
                <br/>
                {this.props.elements ? (
                  <div>
                    {this.props.elements ? this.props.elements.map((e,i)=> {
                      return (
                        <div key={i}>
                          <span>{e.kind}</span>
                          <button className="delete" onClick={ () => this.deleteThisElement(e._id)}>
                            &times;
                          </button>
                         {/* <button>&iquest;</button><br/> */}
                        </div>
                      )
                    }) :
                      <div>
                        <h1>Empty course</h1>
                      </div> 
                    }
                  </div>
                ) : 
                <div>
                  <h1>Empty course</h1>
                </div>
                  }
                <br/>
                <br/>
                <h1>---------------------------------------------------------------------------------------------------</h1>
              </div>
            </Droppable> 
          </Col>
        </Row>          
      </div>

    );
  }
}