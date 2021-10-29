import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <button onClick={handlerToLogin}>login with Google</button>
        </div>
    );
};

export default Login;