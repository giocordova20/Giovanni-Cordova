import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from '../components/Row';
import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'
// import 

function MyWork (props){
    return (
        <Container >
            <Row>
                {/* <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/My Work">My Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="GitHub">GitHub</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="LinkedIn">LinkedIn</Nav.Link>
                    </Nav.Item>
                </Nav> */}
                <Header className="animate__animated animate__fadeIn" id="intro">
                    <h1 className="display-5">My Work</h1>
                    <p className="lead">Take a look at some of my work. These applications show individual work as well as group projects.</p>
                        <Row className="justify-content-center">
                            <Col className="sm">
                                <img src="../assets/pdf-icon.jpg" alt="resume-icon" style={{ width: "17px" }}></img><a href="https://drive.google.com/file/d/1tiARhhMdppS4VwS2epviU4Ju1c7SdtD1/view?usp=sharingquiz" target="_blank" rel="noreferrer"> Resume</a>
                            </Col>
                            <Col className="sm">
                                <img src="../assets/pdf-icon.jpg" alt="resume" style={{ width: "15px" }}></img><h6> giocordova@gmail.com</h6>
                            </Col>
                            <Col className="sm">
                                <img src="../assets/images/mobile-icon.jpg" alt="mobile-icon" style={{ width: "8px"}}></img><h6> 703-201-6923</h6> 
                            </Col>

                        </Row>
                </Header>
            </Row>
            <Row className="album py-5">
                <Container>
                    <Row>
                        {/* {props.applications.map(item => (
                            <div class="col-md-4">
                                <div class="card mb-4 shadow-sm">
                                    <img class="card-img-top" width="100%" height="225" src="{{appImageLocation}}" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"></img>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{{appName}}</h5>
                                        <p class="card-text">{{appDescription}}</p>
                                        <div class="d-flex justify-content-center ">
                                            <div class="btn">
                                                <a role="button" class="btn my-1 btn-sm btn-outline-info" href="{{appLink}}" target="_blank">Open Application</a>
                                                <a role="button" class="btn btn-sm btn-outline-info" href="{{gitRepository}}" target="_blank" >View the Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          </div>

                        ))} */}
                    </Row>
                </Container>

            </Row>
        </Container>
     )
    }

    export default MyWork;