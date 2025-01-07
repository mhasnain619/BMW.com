import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section5.css';
import img1 from '../../../assets/BmwAir.webp'

const Section5 = () => {
    return (
        <Container fluid>
            <Row>
                {/* Left Image Section */}
                <Col xs={12} md={8} className="TheJoy"
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: 'no-repeat',
                        height: '60vh',
                    }}>
                    <div className="overlay-text-left">
                        <p className="title">Over-the-Air Updates</p>
                        <p className="subtitle">The Joy of the Ever-Evolving</p>
                    </div>
                </Col>
                {/* Right Side Section */}
                <Col xs={12} md={4}>
                    {/* Top Section */}
                    <Row className="">
                        <Col className="bmwWallpaper">
                            <div className="overlay-text">
                                <p>BMW wallpapers</p>
                            </div>
                        </Col>
                    </Row>
                    {/* Bottom Section */}
                    <Row>
                        <Col className="skyTop">
                            <div className="overlay-text">
                                <p>BMW Skytop</p>
                                <p className="subtitle-small">The magic of exclusive moments</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Section5;
