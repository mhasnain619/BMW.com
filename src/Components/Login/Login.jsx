// App.js
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import signupImg from '../../assets/easy-help.png'
import styles from './Login.module.css'
import { FiArrowLeftCircle } from "react-icons/fi";
import { Form, Button, Row, Col } from "react-bootstrap";

const Signup = ({ setIsLoggedIn }) => {
    const [userCridentials, setserCridentials] = useState({
        email: '',
        password: '',
    });
    const handleChange = () => {
        const { name, value } = e.target
        setserCridentials(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'))
        if (!storedUserData) {
            console.log('No Data Found........');
            return
        }
        const { email, password } = userCridentials
        if (email === storedUserData.email && password === storedUserData.password) {
            setIsLoggedIn(true)
        } else {
            alert('Invalid Email or Password')
        }
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.CardContainer}>
                <Row>
                    <Col md={6}>
                        <a href="#">
                            <FiArrowLeftCircle className={styles.backArrowIcon} />
                        </a>
                        <h3>Login</h3>
                        <p>
                            Dont't have an account?
                            <a href="#" onClick={setIsLoggedIn}>Signup here</a>
                        </p>
                        <Form>
                            <Form.Group controlId="formEmail" className="mb-3 name">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3 name">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" onChange={handleChange} type="password" placeholder="Enter your password" />
                            </Form.Group>

                            <Form.Group controlId="formCheckbox" className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="By signing up you agree to receive updates and special offers."
                                />
                            </Form.Group>

                            <Button onClick={handleSubmit} variant="primary" type="submit" style={{ width: "100%" }}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }} >
                            <img
                                src={signupImg}
                                alt="Login Image"
                                style={{ maxWidth: "100%", maxHeight: "300px" }} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Signup;
