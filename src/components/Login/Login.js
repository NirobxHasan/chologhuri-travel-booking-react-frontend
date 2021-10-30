import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import './Login.css';
import googleIcon from '../../images/icon/google.png';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const { loginWithGoogle, user, logOut } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const hangleGoogleLogin = () => {
        loginWithGoogle().then((result) => {
            history.push(redirect_uri);
        });
    };
    return (
        <Container className="d-flex justify-content-center align-items-center login-container">
            <Card>
                <Card.Header>
                    {' '}
                    <h3>Please Login</h3>{' '}
                </Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text> */}

                    <button
                        className="social-login-btn"
                        onClick={hangleGoogleLogin}
                    >
                        {' '}
                        <img src={googleIcon} alt="" /> Login with Google
                    </button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
