import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithPopup, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithPopup()}>
                LinkedIn Sign In
            </button>
        )
    )
};

export default LoginButton;
