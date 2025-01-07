import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Section1.css'
import img1 from "../../../assets/img1.png"; // Your first image
import img2 from "../../../assets/redCar.jpg"; // Your second image

function Section1() {
    return (
        <Container fluid className="section-container">
            <Row style={{ borderTop: '2px solid white' }}>
                <Col xs={12} md={6} className="contentCard" >
                    <img src={img1} width='100%' alt="" />
                    <div className="text-content">
                        <h3 style={{ marginBottom: "10px", color: 'white' }}>Festive Season</h3>
                        <h1 className="smartAssistance">
                            Two generations, one shared driving pleasure
                        </h1>
                        <button className="read-more-btn">Read more</button>
                    </div>
                </Col>
                <Col xs={12} md={6} className="Card2">
                    <img src={img2} width='100%' alt="" />
                    <div className="text-content">
                        <h3 style={{ marginBottom: "10px", color: 'white' }}>Smart Assistance</h3>
                        <h1 className="smartAssistance">
                            The BMW Driving Companionship
                        </h1>
                        <button className="read-more-btn">Read more</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Section1;
