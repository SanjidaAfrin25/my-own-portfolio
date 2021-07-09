import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Experience.css'
import {FcPhone} from "react-icons/fc";
import { TiSocialTwitter } from "react-icons/ti";
import {FaFacebook} from 'react-icons/fa';
import { GrMail } from "react-icons/gr";

const Experience = () => {
    return (
        <div className="bg-img">
            <img src="https://i.ibb.co/pbxHjz0/image4-1.png" alt="image4-1" border="0"></img>
            <h1 style={{textAlign:'center'}}>Educational qualification </h1>
            <div className="container">
                <Row>
                    <Col>
                    <h4 ><u>SSC</u></h4>
                    <p>School:Muradnagar Nurunnahar Girls High School</p>
                    <p>Board:Cumilla</p>
                    <p>GPA:5.00</p>
                    <p>Year:2016</p>
                    </Col>
                    <Col>
                    <h4><u>HSC</u></h4>
                    <p>College:Adhyapak Abdul Majid College</p>
                    <p>Board:Cumilla</p>
                    <p>GPA:5.00</p>
                    <p>Year:2018</p>
                    </Col>
                    <Col><h4><u>
                        UNIVERSITY
                        </u>

                    </h4>
                    <p>Bsc Engineering in Mechatronics And Industrial Engineering in Chittagang University of Engineering and Technology</p>
                    <p>Year:2019-2023</p>
                    </Col>
                </Row>
                <div className="bgg">
                    <h1 style={{textAlign:"center"}}>What I am Great At</h1>
                    <p style={{textAlign:"center"}}>I have learned so many things about web development <br/>as I have a strong interest in html,css.Not only that from the<br/> begining of my varsity life i have participated in many robotics competition.</p>
                   {/* <img style={{marginLeft:"930px",height:"300px"}}src="https://listimg.pinclipart.com/picdir/s/99-992993_half-circle-half-circle-png-transparent-clipart.png" alt=""></img> */}
                   {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0b-TlR5CoIx0uJGHilujxERLYWmz3wCU1YznWL3pITG2E7KRRkysA_6SMqrlq1vTSDIxlrzAbPo&usqp=CAU */}
                </div>
            </div>
            <div className="black"><Row className="container"><Col className="col-md-4 alignment"><b>Contact Me</b><br/>Doulatpur,cumilla<br/><h6><FcPhone/>Phone:01537478770</h6><br/><h6><GrMail/> Email:sanjidaafrinmou70@gmail.com</h6>
            </Col>
            <Col className="col-md-4 alignment"><b>Sitemap</b><br/><a style={{textDecoration:"none",color:"gray"}} href="/home">Home</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/aboutme">About me</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/experience">Experience</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/skill">Skill</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/project">Project</a><br/><a style={{textDecoration:"none",color:"gray"}} href="/contact">Contact</a><br/>
            </Col>
            <Col className="col-md-1"></Col>
            <Col  style={{marginTop:"80px"}}className="col-md-3 "> follow me on <a href="https://www.facebook.com/sanjida.afrinmou.7505"target="_blank"><FaFacebook/></a><br/>follow me on <TiSocialTwitter/> </Col>
              </Row><footer style={{marginTop:"100px"}}>Copyrights Ⓒ2021 All Rights Reserved by SAM</footer>
              </div>

            
        </div>
    );
};

export default Experience;