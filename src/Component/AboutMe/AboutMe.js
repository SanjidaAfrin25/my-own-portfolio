import React from 'react';
import './AboutMe.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";







const AboutMe = () => {
    return (
        <div>
        <div className="uppermargin">
            <Row>
                <Col className="img-style col-md-6">
                {/* <img src="https://i.ibb.co/g9QFdq4/IMG-20191025-WA0039.png" alt="IMG-20191025-WA0039" border="0"></img>
                <img src="https://i.ibb.co/TBC48sr/IMG-20191207-WA0138.png" alt="IMG-20191207-WA0138" border="0"></img>
                 */}
                 <img src="https://i.ibb.co/w0Dpgy0/IMG-20210709-WA0000-removebg-preview.png" alt="IMG-20210709-WA0000-removebg-preview" border="0"></img>
            </Col>
            <Col className="col-md-6">
            <div className="introduction">
            <h1 className="font">Hi,I'm</h1>
            <h2 className="font2">Sanjida Afrin Mou</h2>
            <h5 className="font">Introduction</h5>
            <p>I am a student and I am also a junior web developper.I am still in a learning stage.<br/>I have great interest in html,css,bootstrap,react,js.
                I am also enjoy playing with robotics instruments like Arduino,sensor,motor driver,bluetooth module etc.
            </p>
            <Button variant="warning">know more</Button>
            <Button className="button"variant="info">Download CV</Button>
            </div>
            </Col>
            </Row>
        
        
            </div>
            
                
                <div style={{ padding: "10px 10px 10px 10px" }} className="bg">
                <h1 className="font center">About Me</h1>
                <Row>
    <Col className="col-md-3">
    
    <h4>Html,css,bootstrap</h4>
    
      <CircularProgressbar className="size" value={95} text={`${95}%`} />
      </Col>
      <Col>
   
    
    <h4>javascript,react</h4>
    
      <CircularProgressbar className="size" value={60} text={`${60}%`} />
      </Col>
      <Col className="col-md-3">
    
    <h4> Microsoft office</h4>
    
      <CircularProgressbar className="size" value={80} text={`${80}%`} />
      </Col>
      <Col className="col-md-3">
    
    <h4 className="align">Illustration</h4>
    
      <CircularProgressbar className="size" value={30} text={`${30}%`} />
      </Col>

      </Row>
      <Row className="margin">
    <Col className="col-md-3">
   
    
    <h4> Arduino Tinkercad Simulation</h4>
    
      <CircularProgressbar className="size" value={70} text={`${70}%`} />
      </Col>
      <Col className="col-md-3">
   
    <h4>Autocad</h4>
    
      <CircularProgressbar className="size" value={50} text={`${50}%`} />
      </Col>
      <Col className="col-md-3">
    
    <h4>Python</h4>
    
      <CircularProgressbar className="size" value={30} text={`${30}%`} />
      </Col>
      <Col className="col-md-3">
    
   <h4>Solidwork</h4>
    
      <CircularProgressbar className="size" value={10} text={`${10}%`} />
      </Col>

      </Row>
            </div>
           
            </div>
        
        
    );
};

export default AboutMe;