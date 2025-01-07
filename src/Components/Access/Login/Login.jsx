import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import signupImg from '../../../assets/easy-help.png';
import styles from './Login.module.css';
import { FiArrowLeftCircle } from "react-icons/fi";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (!storedUserData) {
            alert('No user data found. Please sign up first.');
            return;
        }

        const { email, password } = userCredentials;
        if (email === storedUserData.email && password === storedUserData.password) {
            alert('Login successful!');
            navigate('/')
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.CardContainer}>
                <Row>
                    <Col md={6}>
                        <Link to="/"><FiArrowLeftCircle className={styles.backArrowIcon} /></Link>
                        <h3>Login</h3>
                        <p>
                            Don't have an account?
                            <Link to="/signup"> Signup here</Link>
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail" className="mb-3 name">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control
                                    name="email"
                                    onChange={handleChange}
                                    value={userCredentials.email}
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3 name">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    onChange={handleChange}
                                    value={userCredentials.password}
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </Form.Group>

                            <Form.Group controlId="formCheckbox" className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="By signing up you agree to receive updates and special offers."
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{ width: "100%" }}>
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
                            }}>
                            <img
                                src={signupImg}
                                alt="Login Illustration"
                                style={{ maxWidth: "100%", maxHeight: "300px" }}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Signup;
