import React from 'react';

import {FaGithub} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FcOnlineSupport} from "react-icons/fc";
import {FcPhone} from "react-icons/fc";
import { TiSocialTwitter } from "react-icons/ti";
import './Contact.css'
import { GrMail } from "react-icons/gr";
import { Row } from 'react-bootstrap';
import { Col} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import Select from "react-select";
import {  Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import { Button } from 'react-bootstrap';
//





const Contact = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
   
    return (
        <div className="bg-color">
          <img src="https://i.ibb.co/DYr0ffv/img.png" alt="img" border="0"></img>
          
            <h1 className="font3">Ways to Contact me <FcOnlineSupport/><FcPhone/></h1>
            <div>
            <p style={{textAlign:'center'}}>I would love to work as a web developer and would love to contributre myself in web design project.</p>
            <h1  style={{textAlign:'center' }}> <a href="https://www.facebook.com/sanjida.afrinmou.7505"target="_blank"><FaFacebook/> </a>
           <a href="https://github.com/SanjidaAfrin25"target="_blank"><FaGithub/> </a>
            <a href="mailto:sanjidaafrinmou70@gmail.com"target="_blank"><GrMail/> </a>
           <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsanjida-afrin-mou-b0b431215%3Ffbclid%3DIwAR2X6SoWcKdcuj4IWgcUcqsK6P1bRqoWd6TmG9Hps8K-MI38h2qHXcK_eTM&h=AT11JG7w9LMGiXGz8v8ZEwE-g2_sHBX0pBm0aFZYuRUtjP9PFvWV5rxYO_EEGV7s1WQBkciVNP4yfKAlArxRJwDyuYVDbRb6OxEOQKQsE41k_wbZxWnJo7gEfTIu8o2Pn5aV7A"target="_blank"><FaLinkedin/> </a>
           <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fsanjida_mou9%3Futm_medium%3Dcopy_link%26fbclid%3DIwAR1ajo-YNawE-40b1FxFR6BQWGA7_SoEVgwR6ispXVn4q3ZDKLEVAkR9UeE&h=AT11JG7w9LMGiXGz8v8ZEwE-g2_sHBX0pBm0aFZYuRUtjP9PFvWV5rxYO_EEGV7s1WQBkciVNP4yfKAlArxRJwDyuYVDbRb6OxEOQKQsE41k_wbZxWnJo7gEfTIu8o2Pn5aV7A" target="_blank"><FaInstagramSquare/> </a> <TiSocialTwitter/> 


            
            
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:"100px"}}>
      
      <label>Your Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="lastName"
        control={control}
        defaultValue=""
      />
      <label>Your Email</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="lastName"
        control={control}
        defaultValue=""
      />
      <label>Mobile no.</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="lastName"
        control={control}
        defaultValue=""
        
      />
     
      
     <Button variant="primary">Send me</Button>
    </form>
            </div>
            <div className="black"><Row className="container"><Col className="col-md-4 alignment"><b>Contact Me</b><br/>Doulatpur,cumilla<br/><h6><FcPhone/>Phone:01537478770</h6><br/><h6><GrMail/> Email:sanjidaafrinmou70@gmail.com</h6>
            </Col>
            <Col className="col-md-4 alignment"><b>Sitemap</b><br/><a style={{textDecoration:"none",color:"gray"}} href="/home">Home</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/aboutme">About me</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/experience">Experience</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/skill">Skill</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/project">Project</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/contact">Contact</a><br/>
            </Col>
            <Col className="col-md-1"></Col>
            <Col  style={{marginTop:"80px"}}className="col-md-3 "> follow me on <a href="https://www.facebook.com/sanjida.afrinmou.7505"target="_blank"><FaFacebook/></a><br/>follow me on <TiSocialTwitter/> </Col>
              </Row><footer style={{marginTop:"100px"}}>Copyrights Ⓒ2021 All Rights Reserved by SAM</footer>
              </div>

    </div>)
    
};

export default Contact;