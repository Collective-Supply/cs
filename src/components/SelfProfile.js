import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const SelfProfile = () => {
    const { user, isAuthenticated } = useAuth0();

   
    // use function to pull self profile and display below

    return (
    // this is returning the auth0 viewer's info grabbed from linkedin's OAuth API, this info shouldn't be rendered, instead it should be passed to DB to create a new user        
        isAuthenticated && (
            <div>
                <p><JSONPretty data={profileJson} /></p>
                
                <img src={user.picture} alt={user.name} />
                <h2>{user.id}</h2>
                <p>{user.email}</p>
                
                <JSONPretty data={user} /> 
        </div>
        )
    )
};    

export default SelfProfile;

