import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Section3.css'
import { IoIosArrowForward } from "react-icons/io";
import video from '../../../assets/bmwVideo.mp4'

function Section2() {
    return (
        <Container fluid className="section3-container">
            <Row>

                <Col xs={12} md={8} className="card1" >
                    <video className="bmwVideo" src={video} autoPlay loop muted />
                </Col>
                <Col xs={12} md={4} className="card1"   >
                    <div className="textcontent3">
                        <h3 style={{ marginBottom: "10px" }}>Become a BMW expert</h3>
                        <p className="BmeNews">
                            <IoIosArrowForward /> BMW EXPLAINED
                        </p>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Section2;
