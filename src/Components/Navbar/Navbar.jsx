import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.svg'
import './Navbar.css';
import { LiaSearchSolid } from 'react-icons/lia';

function OffcanvasExample() {
    return (
        <Navbar expand="md" className="bg-body-light sticky-navbar">
            <Container fluid>
                <Navbar.Brand href="#">
                    <div className='logoDiv'>
                        <img width='45px' src={logo} alt="" />
                        <div style={{ height: '50px', width: '1px', backgroundColor: 'black' }}></div>
                        <p style={{ marginTop: '14px' }} className='logoTExt'>Sheer Driving <span className='pleasure'>Pleasure</span> </p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="logo" id="offcanvasNavbarLabel-expand-lg"><div className='logoDiv'>
                            <img width='45px' src={logo} alt="" />
                            <div style={{ height: '50px', width: '1px', backgroundColor: 'black' }}></div>
                            <p style={{ marginTop: '14px' }} className='logoTExt'>Sheer Driving <span className='pleasure'>Pleasure</span> </p>
                        </div></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto">
                            <Nav.Link className="navlinks" href="#profile">Home</Nav.Link>
                            <Nav.Link className="navlinks" href="#settings">Cricural World</Nav.Link>
                            <Nav.Link className="navlinks" href="#settings">Digital Journey</Nav.Link>
                            <Nav.Link className="navlinks" href="#settings">Electric Future</Nav.Link>
                            <Nav.Link className="navlinks" href="#settings">Freude</Nav.Link>
                            <Nav.Link className="navlinks" href="#settings">Models</Nav.Link>
                            <Nav.Link className="navlinks" href="#">< LiaSearchSolid size={20} color={'#000'} /></Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default OffcanvasExample;