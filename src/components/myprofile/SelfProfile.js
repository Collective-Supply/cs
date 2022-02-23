import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const SelfProfile = () => {
    const { user, isAuthenticated } = useAuth0();

    const [isLoading, setIsLoading] = useState(true);

    // Loads all the shared links
    const loadProfile = async() => {
       try {
            const sub = user.sub;
            const body = { sub };
            const res = await fetch('/api/getProfileBySub', {
                method: 'POST',
                body: JSON.stringify(body)
            });
            const designerProfile = await res.json();
            setProfileJson(designerProfile)
            setIsLoading(false);
       }catch(err) {
           console.error(err);
       } 
    };

    // Auth0's SDK forces the page to refresh every 250ms or so to see if it's authenticated the user. When it's
    // authenticated, the "user" JSON object is returned. The loadLinks() function requires data parsed from the "user"
    // JSON object, so it's waiting on useAuth0().isAuthenticated to return the "user" obj
    // The user obj is in the useEffect dependency so that as soon as user obj is returned by Auth0, it kicks off the load links
    useEffect(() => {
        loadProfile(); 
    }, []);

    const [profileJson, setProfileJson] = useState({}); 

    return (
        <>
            { isLoading && <div>Loading...</div> }
            <JSONPretty data={profileJson} />
        </>
    )
}    

export default SelfProfile;

