import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ParameterReader from './ParameterReader';

const ViewProfile = () => {
    const { user, isAuthenticated } = useAuth0();
    // Takes parameter of 'x' as in ?x=123, parses it and stores it in a cookie
    const url = ParameterReader('x');
    // Invalid link
    const designerProfileDisabled = "https://www.collectivesupply.cc/disabled"

    // Loads designer's profile
    const loadProfile = async() => {
        const body = { url };
        const res = await fetch('/api/getProfileByShareLink', {
        method: 'POST',
        body: JSON.stringify(body)
        });
        const designerProfile = await res.json();
        if (designerProfile) {
            if (designerProfile.active == true) {
            setProfileJson(designerProfile)
            setProfileUrl(designerProfile.profile.profile_url)
            console.log("loadProfile")
            } else {
                setProfileUrl(designerProfileDisabled)
            };
        } else {
            setProfileUrl(designerProfileDisabled)
        };
    };
    // useEffect and useState loads the user's profile if there's a url parameter
    useEffect(() =>{
        loadProfile();
        console.log("useEffect on loadProfile")
    }, [window.location.search]);

    // Get the viewer's user database ID using the viewer's user.sub that's passed from Auth0.
    const getViewer = async() => {
        const sub = user.sub
        const body = { sub };
        const res = await fetch('/api/getUserIdBySub', {
            method: 'POST',
            body: JSON.stringify(body)
        });
        const viewer = await res.json();
        console.log("getViewer")
        return viewer._id
    };

    // Async function to pass the sharelink ID and viewer ID to create a view session.
    const createViewSession = async() => {
        if (profileJson) {
            const share_link = profileJson._id;
            const viewer = await getViewer();
            const body = { viewer, share_link };
            console.log("createViewSession")
            console.log(profileJson._id)
            await fetch('/api/createViewSession', {
                method: 'POST',
                body: JSON.stringify(body)
            });
        }
    } 
    // Holds the profile JSON object's URL so that we can create a view session
    const [profileJson, setProfileJson] = useState(); 
    // Holds the designer's profile's URL for loading in iFrame
    const [profileUrl, setProfileUrl] = useState(); 

    // Auth0 keeps reloading the page until it authenticates and gets the user JSON object. Writing the IF statement prevents it from running the code more than once
    // had to include profileUrl in if statement to prevent it from trying to run twice. Not sure why but it works?
    if (useAuth0().isAuthenticated && profileUrl) {
        createViewSession();
    }

    return (
    // this is returning the auth0 viewer's info grabbed from linkedin's OAuth API, this info shouldn't be rendered, instead it should be passed to DB to create a new user        
        isAuthenticated && (
        <div style={{overflow: "hidden", position: 'absolute', height: "85%", width: "100%" }}>
            <iframe style={{ height: "100%", margin: 0, minHeight: 100, top: 0, width: "100%" }} src={profileUrl}></iframe>
        </div>
        )
    )
};    

export default ViewProfile;

