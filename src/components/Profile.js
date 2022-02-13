import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    // HTML parameter to pass to db to point to shared link ID
    // https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const LinkId = urlParams.get('x');

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

    // Connect the cookie parameter and feed it back as the url after logging in    
    const url = urlParamCookie;

    const loadProfile = async() => {
        const body = { url };
        const res = await fetch('/api/getProfileByShareLink', {
        method: 'POST',
        body: JSON.stringify(body)
        });
        
        const designerProfile = await res.json();
        setProfileJson(designerProfile)
    };

    // useEffect and useState loads the user's profile
    useEffect(() =>{
        loadProfile();
    }, []);
    const [profileJson, setProfileJson] = useState({}) 

    return (
    // this is returning the auth0 viewer's info grabbed from linkedin's OAuth API, this info shouldn't be rendered, instead it should be passed to DB to create a new user        
        isAuthenticated && (
            <div>
                <p><JSONPretty data={profileJson} /></p>
                
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

