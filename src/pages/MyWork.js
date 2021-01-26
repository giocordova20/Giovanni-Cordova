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
                <Header className="animate__animated animate__fadeIn" id="mywork-jumbo" style={{background: "none"}}>
                    <h1 className="display-5">My Work</h1>
                    <p className="lead">Take a look at some of my work. These applications show individual work as well as group projects.</p>
                        <Row className="justify-content-md-center">
                            <Col >
                                <a href="/" className="btn btn-outline-dark my-2">About Me</a>
                            </Col >
                            <Col >
                                <a href="https://github.com/giocordova20" target="_blank" rel="noreferrer" className="btn btn-outline-dark my-2">GitHub</a>
                            </Col>
                            <Col >
                            <a href="https://www.linkedin.com/in/giovanni-cordova-aa40b94/" rel="noreferrer" target="_blank" className="btn btn-outline-dark my-2">LinkedIn</a>
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