import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from '../components/Row';
import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'
// import AboutImage from "../assets/images/rva2.jpg"

import resume from "../assets/images/pdf-icon.jpg";
import gmail from "../assets/images/gmail.png";
import mobile from "../assets/images/mobile-icon.jpg";
// import linkedin from "../assets/images/linkedin.png";


function About (){
    return (
        <Container >
            <Row>
                <Header className="animate__animated animate__fadeIn" id="intro">
                    <h1 className="display-5">Giovanni Cordova</h1>
                    <p className="lead">I'm a Software QA Engineer looking to move into Software Development. I have
                        worked in QA for over 18 years and have experience with the Software Development Life 
                        Cycle. In my career, I have performed backend and front end testing. I am experienced 
                        in analyzing complex application requirements, developing a test plan for new functionality, 
                        and verifying integration to exiting systems and processes. I am currently enrolled in the 
                        University of Richmond Coding Boot Camp.</p>
                        <Row className="justify-content-center">
                            <Col className="sm">
                                <img src={resume} alt="resume-icon" style={{ width: "17px" }}></img><a href="https://drive.google.com/file/d/1tiARhhMdppS4VwS2epviU4Ju1c7SdtD1/view?usp=sharingquiz" target="_blank" rel="noreferrer"> Resume</a>
                            </Col>
                            <Col className="sm">
                                <h6><img src={gmail}  alt="resume" style={{ width: "15px" }}></img> giocordova@gmail.com</h6>
                            </Col>
                            <Col className="sm">
                                <h6><img src={mobile} alt="mobile-icon" style={{ width: "8px"}}></img> 703-201-6923</h6> 
                            </Col>
                        </Row>
                </Header>
            </Row>
        </Container>
     )
    }

    export default About;