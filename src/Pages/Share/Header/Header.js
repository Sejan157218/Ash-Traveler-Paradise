import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { logout, user } = useAuth()
    return (

        <div>
            {
                user.email ? <button onClick={logout}>LogOut</button> : <Link to="/login"><button>Login</button></Link>
            }
        </div>
    );
};

export default Header;