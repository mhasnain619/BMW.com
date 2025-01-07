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
            <Row>
                {/* First Card */}
                <Col
                    xs={12}
                    md={6}
                    className="content-card card1"
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: 'no-repeat',
                        borderTop: '2px solid white',
                        borderRight: '2px solid white',
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        color: "white",
                        padding: window.innerWidth <= 768 ? "25px" : "80px",
                    }}
                >
                    <div className="text-content">
                        <h3 style={{ marginBottom: "10px" }}>Festive Season</h3>
                        <h1 className="smartAssistance">
                            Two generations, one shared driving pleasure
                        </h1>
                        <button className="read-more-btn">Read more</button>
                    </div>
                </Col>

                {/* Second Card */}
                <Col
                    xs={12}
                    md={6}
                    className="content-card card2"
                    style={{
                        backgroundImage: `url(${img2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center",
                        backgroundRepeat: 'no-repeat',
                        borderTop: '2px solid white',
                        borderleft: '2px solid white',
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        color: "white",
                        padding: window.innerWidth <= 768 ? "25px" : "80px",
                    }}
                >
                    <div className="text-content">
                        <h3 style={{ marginBottom: "10px" }}>Smart Assistance</h3>
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
