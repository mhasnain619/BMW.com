import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Section2.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../../assets/CrouselCar.png";
import img2 from "../../../assets/slider2.png";
import img3 from "../../../assets/slide3.webp";
import { IoIosArrowForward } from "react-icons/io";

function Section2() {
    return (
        <Container fluid className="section2-container">
            <Row>
                <Col xs={12} md={4} className="card1"   >
                    <div className="textContent">
                        <h3 style={{ marginBottom: "10px" }}>Learn everything about BMW here</h3>
                        <p className="BmeNews">
                            <IoIosArrowForward /> BMW NEWS
                        </p>

                    </div>
                </Col>
                <Col xs={12} md={8} className="Crouselpo" >
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default Section2;
