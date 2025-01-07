import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section5.css'
import CarImg from '../../../assets/BmwAir.webp'
import wallpaper from '../../../assets/bmdWallpaper.webp'
import skttop from '../../../assets/skytop.webp'
const Section5 = () => {
    return (
        <Container fluid>
            <Row >
                <Col xs={12} md={8} className="TheJoy">
                    <div className=''>
                        <p className='text-white'>hello</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <Row className="">
                        <Col className="bmwWallpaper">
                            <div>
                                <p
                                    className="text-center text-white"
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    BMW Wallpapers
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="skyTop">
                            <div>
                                <p
                                    className="text-center text-white"
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    BMW Skytop
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Section5;
