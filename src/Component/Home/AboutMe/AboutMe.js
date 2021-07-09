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
                <Col>
            <div>picture</div>
            </Col>
            <Col>
            <div>
            <h1 className="font">Hi,I'm</h1>
            <h2 className="font2">Sanjida Afrin Mou</h2>
            <h5 className="font">Introduction</h5>
            <p>I am a student and I am also a junior web developper.I am still in a learning stage.I have great interest in html,css,bootstrap,react,js.
                I am also enjoy playing with robotics instruments like Arduino,sensor,motor driver,bluetooth module etc.
            </p>
            <Button variant="warning">know more</Button>
            <Button className="button"variant="info">Download CV</Button>
            </div>
            </Col>
            </Row>
        
        
            </div>
            
                
                <div style={{ padding: "10px 10px 10px 10px" }} className="container">
                <h1 className="font center">About Me</h1>
                <Row>
    <Col>
    
    <h3>Html,css,bootstrap</h3>
    
      <CircularProgressbar className="size" value={95} text={`${95}%`} />
      </Col>
      <Col>
   
    
    <h3>javascript,react</h3>
    
      <CircularProgressbar className="size" value={60} text={`${60}%`} />
      </Col>
      <Col>
    
    <h3> Microsoft office</h3>
    
      <CircularProgressbar className="size" value={80} text={`${80}%`} />
      </Col>
      <Col>
    
    <h3 className="align">Illustration</h3>
    
      <CircularProgressbar className="size" value={30} text={`${30}%`} />
      </Col>

      </Row>
      <Row className="margin">
    <Col>
    
    <h3> Arduino Tinkercad Simulation</h3>
    
      <CircularProgressbar className="size" value={70} text={`${70}%`} />
      </Col>
      <Col>
   
    <h3>Autocad</h3>
    
      <CircularProgressbar className="size" value={50} text={`${50}%`} />
      </Col>
      <Col>
    
    <h3>Python</h3>
    
      <CircularProgressbar className="size" value={30} text={`${30}%`} />
      </Col>
      <Col>
    
   <h3>Solidwork</h3>
    
      <CircularProgressbar className="size" value={10} text={`${10}%`} />
      </Col>

      </Row>
            </div>
           
            </div>
        
        
    );
};

export default AboutMe;