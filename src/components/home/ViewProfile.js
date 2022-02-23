import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import ParameterReader from './ParameterReader';

const ViewProfile = () => {
    const { user, isAuthenticated } = useAuth0();
    // Takes parameter of 'x' as in ?x=123, parses it and stores it in a cookie
    const url = ParameterReader('x');

    const designerProfileDisabled = `"https://collective.supply/?x=${url}" is not a valid share link. Placeholder on explanation of what Collective.Supply is`

    // Loads designer's profile
    const loadProfile = async() => {
        const body = { url };
        const res = await fetch('/api/getProfileByShareLink', {
        method: 'POST',
        body: JSON.stringify(body)
        });
        const designerProfile = await res.json();
        if (designerProfile.active == true) {
            setProfileJson(designerProfile)
        } else {
            setProfileJson(designerProfileDisabled)
        }
        
    };
    // useEffect and useState loads the user's profile if there's a url parameter
    useEffect(() =>{
        loadProfile();
    }, [window.location.search]);
    
    const [profileJson, setProfileJson] = useState(); 


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
        await fetch('/api/createViewSession', {
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
                <JSONPretty data={profileJson} />
        </div>
        )
    )
};    

export default ViewProfile;

