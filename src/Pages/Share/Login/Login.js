import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { signInWithGoogle, user } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/";

    // handler to google login
    const handlerToLogin = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_url);
            })
    }
    return (
        <div className="login-div " style={{ height: "100vh" }}>
            <div className="text-center login-container py-5 shadow p-3 mb-5 rounded">
                <h1 className="pb-3">Login</h1>

                <Row >
                    <div className="text-center">
                    <Button className="button-login" onClick={handlerToLogin}> <i class="fab fa-google me-2"></i>Google</Button>
                    </div>
                </Row>

            </div>
        </div>

    );
};

export default Login;