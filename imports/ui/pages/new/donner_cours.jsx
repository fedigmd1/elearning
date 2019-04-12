import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withTracker} from 'meteor/react-meteor-data'
import {Courses} from '../../../api/courses'
import { Link } from 'react-router-dom'
import { Draggable, Droppable } from 'react-drag-and-drop'
import { Alert, Badge, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import { Menu, Icon, Switch, Drawer } from 'antd';

class donnerCours extends Component {

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
    let x = "ak2oxH9Bf6NwXzjho" ;
    Meteor.call('courses.setElements', x , data );
      
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

        <Row>
          <Col xs="1" >
            <Draggable type="course" style={{ fontSize: '40px', color: '#555' }} data="Text"><Icon type="edit" /></Draggable>
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
                {this.props.course ? (
                  <div>
                    {this.props.course.elements ? this.props.course.elements.map(e => {
                      return (
                        <div>
                        <span>{e.course}</span><br/>
                        </div>
                      )
                    }) :
                      <div>
                        Empty course
                      </div> 
                    }
                  </div>
                ) : 
                <div>
                  <h1>Echec ! ya pas de modifiction !</h1>
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
    )
  }   
}


export default withTracker((props) => {
  Meteor.subscribe('courses');
  return {

    currentUser: Meteor.user(),
    course: Courses.findOne({ "_id": "ak2oxH9Bf6NwXzjho" }),

  };
}) (donnerCours); 

