import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';

import googleIcon from '../../../images/icon/google.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const { loginWithGoogle, user, logOut } = useAuth();

    //routing
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const hangleGoogleLogin = () => {
        loginWithGoogle().then((result) => {
            history.push(redirect_uri);
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center login-container">
            <Card style={{ width: '35rem' }}>
                <Card.Header>
                    {' '}
                    <h3>Please Register</h3>{' '}
                </Card.Header>
                <Card.Body className="mx-auto" style={{ textAlign: 'center' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="Your Name"
                            className="auth-input-field"
                            type="text"
                            {...register('name', {
                                required: true
                            })}
                        />
                        <input
                            placeholder="Your Email"
                            className="auth-input-field"
                            type="email"
                            {...register('email', {
                                required: true
                            })}
                        />
                        <input
                            placeholder="Your password"
                            className="auth-input-field"
                            type="password"
                            {...register('password', { required: true })}
                        />
                        <input
                            placeholder="Retype password"
                            className="auth-input-field"
                            type="password"
                            {...register('password2', { required: true })}
                        />

                        <input
                            className="login-btn mx-auto"
                            value="Login"
                            type="submit"
                        />
                    </form>
                    <button
                        onClick={() => {
                            history.push('/login');
                        }}
                        className="registration-login-btn"
                    >
                        Already register? please login.
                    </button>
                    <br />
                    <button
                        className="social-login-btn mt-5"
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

export default Registration;
