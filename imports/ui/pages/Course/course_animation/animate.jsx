import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Draggable, Droppable } from 'react-drag-and-drop'
import { Row, Col } from 'reactstrap';
import { Menu, Icon, Switch, Drawer } from 'antd';
import Responseform from '../../explication/response';
import Text from '../course_elements/text';
import Draw from '../course_elements/draw';
import Image from '../course_elements/image';
import File from '../course_elements/file';
import Video from '../course_elements/video';
import Message from '../course_elements/message';

export default class Animate extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      text: null,
      visible: false,
    };
  }
  onDrop(data) {
    let courseId = this.props.id
    let createdAt = new Date()
    let obj
    switch (data.course) {
      case "Text":
        obj = {
          kind: "text",
          text: "",
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
          src: "",
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;
      case "File":
        obj = {
          kind: "file",
          text: "",
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;
      case "Video":
        obj = {
          kind: "video",
          url: "",
          x: 1,
          y: 1,
          courseId,
          createdAt,
        };
        break;
      case "Message":
        obj = {
          kind: "message",
          text: "",
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

  response (id) {
    this.setState({text: id})

    if (this.state.visible == false)
    {this.setState({visible: true })}
    else if (this.state.visible= true )
    {this.setState({visible: false })}
  }

  render(){
    
    return (
      <div className="" style={{ background: '#ECECEC'}} >
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
                <hr className="hr"/>
                {this.props.elements ? 
                  <div>
                    {this.props.elements ? this.props.elements.map((e,i)=> {
                      return (
                        <div key={i}>
                          <br/>
                          <button className="delete" onClick={ () => this.deleteThisElement(e._id)}>
                            <Icon type="delete" theme="twoTone" />
                          </button>
                          <button onClick={() => this.response(e._id)}>
                            <Icon type="question-circle" theme="twoTone" />
                          </button>
                          {e.kind=="text" && <Text element={e} />}
                          {e.kind=="draw" && <Draw element={e} />}
                          {e.kind=="image" && <Image element={e}/>}
                          {e.kind=="file" && <File element={e}/>}
                          {e.kind=="video" && <Video element={e}/>}
                          {e.kind=="message" && <Message element={e} />}
                          {this.state.text === e._id?
                            this.state.visible== true && <Responseform currentUser={this.props.currentUser} element={e}/>
                            :null
                          }
                        </div>
                      )
                    }) :
                      <div>
                        <h1>Empty course</h1>
                      </div> 
                    }
                  </div>
                  : 
                <div>
                  <h1>Empty course</h1>
                </div>
                  }
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <hr className="hr"/>
              </div>
            </Droppable> 
          </Col>
          <Col xs="1" >
          </Col> 
        </Row>          
      </div>

    );
  }
}