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
                {this.props.elements ? (
                  <div>
                    {this.props.elements ? this.props.elements.map((e,i)=> {
                      return (                
                        <div className="content" key={i}>
                        <br/>
                          <button className="question" onClick={() => this.question(e._id)}>&iquest;</button>
                          {e.kind=="text" && <Text element={e} />}
                          {e.kind=="draw" && <Draw element={e}/>}
                          {e.kind=="image" && <Image element={e}/>}
                          {e.kind=="file" && <File element={e}/>}
                          {e.kind=="video" && <Video element={e} />}
                          {e.kind=="message" && <Message element={e} />}
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