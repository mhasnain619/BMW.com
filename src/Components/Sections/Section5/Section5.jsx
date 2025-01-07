import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section5.css';
import img1 from '../../../assets/BmwAir.webp'
import img2 from '../../../assets/bmdWallpaper.webp'
import img3 from '../../../assets/skytop.webp'

const Section5 = () => {
    return (
        <>
            <div className='allModel'>
                <h3>ALL BMW MODELS</h3>
                <p>Find your BMW</p>
            </div>
            <Container fluid>

                <Row className='sectionRow'>
                    <Col xs={12} md={8} className="TheJoy">
                        <img src={img1} width={"100%"} />
                        <div className="overlay-text-left">
                            <p className="title">Over-the-Air Updates</p>
                            <p className="subtitle">The Joy of the Ever-Evolving</p>
                        </div>
                    </Col>
                    <Col className='secTowRow' xs={12} md={4}>
                        <Row >
                            <Col className="bmwWallpaper">
                                <img src={img2} width={"100%"} />
                                <div className="overlay-text">
                                    <p>BMW wallpapers</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ borderTop: '1px solid white' }}>
                            <Col className="skyTop">
                                <img src={img3} width={"100%"} />
                                <div className="overlay-text">
                                    <p>BMW Skytop</p>
                                    <p className="subtitle-small">The magic of exclusive moments</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default Section5;
