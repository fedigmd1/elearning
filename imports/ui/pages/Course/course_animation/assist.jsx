import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import Questionform from '../../explication/question/allquestions';
import Text from '../course_elements/text';
import Draw from '../course_elements/draw';
import Image from '../course_elements/image';
import File from '../course_elements/file';
import Video from '../course_elements/video';
import Message from '../course_elements/message';


export default class Assist extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      text: null,
      visible: false,
    };
  }

  question = (id) => {
    this.setState({text: id})

    if (this.state.visible == false)
    {this.setState({visible: true })}
    else if (this.state.visible= true )
    {this.setState({visible: false })}
  }

  render(){
    
    return (
      <div className="">
        <Row>
          <Col xs="1" >
          </Col> 
          <Col>    
              <div>
                <h1>---------------------------------------------------------------------------------------------------</h1>
                <br/>
                {this.props.elements ? (
                  <div>
                    {this.props.elements ? this.props.elements.map((e,i)=> {
                      return (                
                        <div className="content" key={i}>
                          {e.kind=="text" && <Text />}
                          {e.kind=="draw" && <Draw/>}
                          {e.kind=="image" && <Image/>}
                          {e.kind=="file" && <File/>}
                          {e.kind=="video" && <Video/>}
                          {e.kind=="message" && <Message/>}
                          <button className="question" onClick={() => this.question(e._id)}>&iquest;</button><br/>
                          {this.state.text === e._id ?
                            this.state.visible == true && <Questionform currentUser={this.props.currentUser} element={e}/>
                            :null}
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
          </Col>
        </Row>          
      </div>

    );
  }
}