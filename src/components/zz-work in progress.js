import React, { useState, useEffect } from 'react';
import JSONPretty from 'react-json-pretty';
import { useAuth0 } from '@auth0/auth0-react';

export default function UrlParser() {
    
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

    useEffect(() =>{
        loadProfile();
    }, []);

    const [profileJson, setProfileJson] = useState({}) 


    // Check to see if user exists (WIP)

    // user object isnt present in here, have to pull from the profile.js file's auth0
    // const sub = user.sub;

    // const checkUserExist = async() => {
    //     const body = { sub };
    //     const res = await fetch('/api/getUserExistBySub', {
    //     method: 'POST',
    //     body: JSON.stringify(body)
    //     });
        
    //     const userExist = await res.json();
    //     console.log(userExist);
    // };

    // useEffect(() =>{
    //     checkUserExist();
    // }, []);
    
    // If user doesn't exist, then create user in db using createUser, otherwise skip to recording the view session



    // recording the view session below    
    // const share_link = profileJson._id;
    // const viewer = 
    
    // const registerViewSession = async() => {
    //     const body = { share_link, viewer };
    //     const res = await fetch('/api/createViewSession', {
    //     method: 'POST',
    //     body: JSON.stringify(body)
    //     });
        
    //     const designerProfile = await res.json();
    //     setProfileJson(designerProfile)
    // };


    return (
        <>    
            <div>

                <p><JSONPretty data={profileJson} /></p>

            </div>
        </>
    );
};










