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

    // Loads designer's profile
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
    const [profileJson, setProfileJson] = useState({}); 


    // Get the viewer's user database ID using the viewer's user.sub that's passed from Auth0.
    const getViewer = async() => {
        const sub = user.sub
        const body = { sub };
        const res = await fetch('/api/getUserIdBySub', {
            method: 'POST',
            body: JSON.stringify(body)
        });
        const viewer = await res.json();
        return viewer._id
    };

    // Async function to pass the sharelink ID and viewer ID to create a view session. Only issue remaining is that when I save it, it loads it 5 times but that could be netlify being a douchenozzle
    const createViewSession = async() => {
        const share_link = profileJson._id;
        const viewer = await getViewer();
        const body = { viewer, share_link };
        const res = await fetch('/api/createViewSession', {
            method: 'POST',
            body: JSON.stringify(body)
        });
    } 

    // Auth0 keeps reloading the page until it authenticates and gets the user JSON object. Writing the IF statement prevents it from running the code more than once
    if (useAuth0().isAuthenticated) {
        createViewSession();
    }

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

