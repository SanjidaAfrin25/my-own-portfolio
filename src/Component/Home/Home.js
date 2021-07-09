import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'
import { FcSearch } from "react-icons/fc";

import { FaSkype } from "react-icons/fa";
import { FaAdn} from "react-icons/fa";

import { FaMedium } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown'

const Home = () => {
    return (
      <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand> <h1>< FaSkype />
            <FaAdn/>
            <FaMedium/>. </h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
     
    </Nav>
    <Nav>
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link eventKey={2} href="aboutme">About me
      </Nav.Link>
      <Nav.Link href="experience">Experience</Nav.Link>
      <Nav.Link href="skill">Skill</Nav.Link>
      <Nav.Link href="projects">Projects</Nav.Link>
      <Nav.Link href="contact">Contact</Nav.Link>
      <h3><FcSearch/></h3> 
     
    </Nav>
  </Navbar.Collapse>
</Navbar>






 
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption style={{color:"black"}}>
      <h3>Welcome to my portfolio</h3>
      <p>Choose the one suitable for you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.wiley.com/learn/jossey-bass/images/what-every-teacher-should-know-about-the-science-of-learning.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h3>About Me</h3>
      <p>Interested in web development.You can contact for any amazing solution</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxwcm9ncmFtbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
      alt="Third slide"
    />
    <Carousel.Caption>
      
      <p>You will be surprised to see the creation and would crave for more</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
  

 
  
  
    );
};

export default Home;