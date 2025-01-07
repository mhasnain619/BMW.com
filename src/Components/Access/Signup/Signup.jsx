// App.js
import React, { useState } from "react";
import styles from './Signup.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import signupImg from '../../../assets/easy-help.png'
import { Form, Button, Row, Col } from "react-bootstrap";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("User data saved to localStorage:", userData);
        navigate("/login")
    };
    return (
        <div className={styles.mainContainer}>
            <div className={styles.CardContainer}>
                <Row>
                    <Col md={6}>
                        <a href='#'>
                            <FiArrowLeftCircle className={styles.backArrowIcon} />
                        </a>
                        <h3>Sign up</h3>
                        <p>
                            Already have an account?
                            <Link to="/login">Login here</Link>
                        </p>
                        <Form>
                            <Form.Group controlId="formName" className="mb-3 ">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" onChange={handleChange} value={userData.name} type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3 ">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control name="email" onChange={handleChange} value={userData.email} type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3 ">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" onChange={handleChange} value={userData.password} type="password" placeholder="Enter your password" />
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
                        <div className={styles.imageDiv}>
                            <img
                                src={signupImg} // Replace with your desired image URL
                                alt="Signup illustration"
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
