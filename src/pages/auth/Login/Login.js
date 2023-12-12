import React, { useState } from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password,
      });
      console.log('Login successful!', response.data);
      // Handle successful login, redirect, or any other action
    } catch (error) {
      if (error.response) {
        // The server responded with a status code outside the range of 2xx
        console.error('Server responded with:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Request failed:', error.message);
      }
    }
  };

  return (
    <Container style={{ margin: '50px' }}>
      <Row className="custom-row">
        <Col md={10} className="centerCol">
          <Card>
            <Card.Body>
              <Row className="form-row">
                <Col md={6}>
                  {/* Login Form Section */}
                  <div className="login-form">
                    <h2 className="text-center mb-4">Login</h2>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit" className="w-100">
                        Login
                      </Button>
                    </Form>
                  </div>
                </Col>
                <Col md={6}>
                  {/* Image Section */}
                  <img
                    src=""
                    alt="Login Image"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
