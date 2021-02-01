import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "react-bootstrap/Col";
// import Nav from 'react-bootstrap/Nav'
import Nav from "../components/Navbar";
import AppList from "../assets/applist.json";
// import AppImage from "../assets/images/";


function MyWork (){
    return (
        <Container >
            <Row>
                <Col md >                
                    <Header className="animate__animated animate__fadeIn" id="mywork-jumbo" style={{background: "none"}}>
                        <h1 className="display-5">My Work</h1>
                        <p className="lead">Take a look at some of my work. These applications show individual work as well as group projects.</p>
                            <Row className="">
                                <Col md>
                                    <Nav />
                                </Col>
                            </Row>
                    </Header>
                </Col>
    
            </Row>
            <Row className="album py-5">
                <Container>
                    <Row>
                        {console.log({AppList})}

                        {AppList.map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4 shadow-sm">
                                    <img className="card-img-top" width="100%" height="225" src={(`../assets/images/${item.appImageLocation}.gif` )} alt={item.appName} preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{item.appName}</h5>
                                        <p className="card-text">{item.appDescription}</p>
                                        <div className="d-flex justify-content-center ">
                                            <div className="btn">
                                                <a role="button" className="btn my-1 btn-sm btn-outline-info" href={item.appLink} target="_blank" rel="noreferrer">Open Application</a>
                                                <a role="button" className="btn btn-sm btn-outline-info" href={item.gitRepository} target="_blank" rel="noreferrer">View the Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          </div>

                        ))}


                    </Row>
                </Container>

            </Row>
        </Container>
     )
    }

    export default MyWork;