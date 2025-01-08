import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section9.css';
import img1 from '../../../assets/gerManrototype.jpg'
import img2 from '../../../assets/bmdWallpaper.webp'
import img3 from '../../../assets/artAndSpeed.jpg'

const Section9 = () => {
    return (
        <>
            <Container fluid>
                <Row className='section7Row'>
                    <Col xs={12} md={8} className="germanProto">
                        <img src={img1} width={"100%"} />
                        <div className="overlay-text-left7">
                            <p className="title">Erlkonig -German prototype cars </p>
                            <p className="subtitle">The art of deception</p>
                        </div>
                    </Col>
                    <Col className='sec7Row' xs={12} md={4}>
                        <Row >
                            <Col className="bmwExplained">
                                <img src={img2} width={"100%"} />
                                <div className="overlaySec7-text">
                                    <p>BMW explained</p>
                                    <p className="subtitle-small">BMW History: 17 iconic double kidney designs</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='artspedRightBorder'>
                            <Col className="ArtAndSpeed">
                                <img src={img3} width={"100%"} />
                                <div className="overlaySec7-text">
                                    <p>Art and Speed</p>
                                    <p className="subtitle-small">Herve Poulain - the visionary behind the BMW Art Car</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>

    );
};

export default Section9;
