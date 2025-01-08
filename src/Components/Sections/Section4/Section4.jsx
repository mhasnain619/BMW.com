import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section4 = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <h2>
                            The BMW Podcast: Changing Lanes
                        </h2>
                        <p>
                            Changing Lanes is the official podcast
                            from BMW. In these audio series, we take you with us
                            on new journeys through the BMW universe. Find out more
                            about sustainability, innovation, technology, mobility and
                            the latest trends. You can find and subscribe to Changing
                            Lanes on all major podcast platforms, so tune in!
                        </p>
                        <button>Listen now</button>
                    </Col>
                    <Col xs={12} md={8}>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section4
