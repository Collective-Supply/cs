import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import LoginButton from './LoginButton';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    // HTML parameter to pass to db to point to shared link ID
    // https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const LinkId = urlParams.get('share');

    // Set a cookie to remember the URL param to recall when user signs in
    // Keep in mind that the cookie is only set for this domain so once you move 
    // shared or profile director over, it will need to be updated!
    if (LinkId) {
        document.cookie = `urlParam=${LinkId}`;
    };

    // Parses out the urlParam part of the cookie
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    const urlParamCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('urlParam='))
        .split('=')[1];
    
    LogoutButton();    

    // useState to display default shared designer's profile
    // Preview and then reveals it on sign in
    const [profilePreview, revealProfile] = useState([]);
    
    return (

        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.id}</h2>
                <p>{user.email}</p>
                <p>{user.sub}</p>
                
                <JSONPretty data={user} /> 
                
        </div>
        )

    )
};    

export default Profile;