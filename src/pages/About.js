import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from 'react-bootstrap/Row';
import Col from '../components/Col'
import resume from "../assets/images/pdf-icon.jpg";
import gmail from "../assets/images/gmail.png";
import mobile from "../assets/images/mobile-icon.jpg";
import Navbar from "../components/Nav";

function About (){
    return (
        <Container fluid>
            <Row>
                <Col size="md-2" style={{marginTop: "3rem", fontWeight:"bold" }}>
                    <Navbar background={"rgb(233, 236, 239, .6)"} marginTop={"2rem"}/>
                </Col>
                <Col size="md-10">
                    <Header className="jumbotron animate__animated animate__fadeIn" style={{background: "rgb(233, 236, 239, .6)", marginTop: "2rem"}} id="intro">
                        <h1 className="display-5">Giovanni Cordova</h1>
                        <p className="lead">I'm a Software QA Engineer looking to move into Software Development. I have
                            worked in QA for over 18 years and have experience with the Software Development Life 
                            Cycle. In my career, I have performed backend and front end testing. I am experienced 
                            in analyzing complex application requirements, developing a test plan for new functionality, 
                            and verifying integration to exiting systems and processes. I am currently enrolled in the 
                            University of Richmond Coding Boot Camp.</p>
                        <Row className="justify-content-center">
                            <Col size="md">
                                <img src={resume} alt="resume-icon" style={{ width: "17px" }}></img><a href="https://drive.google.com/file/d/1tiARhhMdppS4VwS2epviU4Ju1c7SdtD1/view?usp=sharingquiz" target="_blank" rel="noreferrer"> Resume</a>
                            </Col>
                            <Col size="md">
                                <h6><img src={gmail}  alt="resume" style={{ width: "15px" }}></img> giocordova@gmail.com</h6>
                            </Col>
                            <Col size="md">
                                <h6><img src={mobile} alt="mobile-icon" style={{ width: "8px"}}></img> 703-201-6923</h6> 
                            </Col>
                        </Row>
                    </Header>
                </Col>
            </Row>
        </Container>
     )
    }

    export default About;