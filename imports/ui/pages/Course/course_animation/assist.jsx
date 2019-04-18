import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';

export default class Assist extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      text: null
    };
  }

  question = () => {
    this.setState({text: true})
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
                          <span>{e.kind}</span>
                         <button className="question" onClick={() => this.question()}>&iquest;</button><br/>
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