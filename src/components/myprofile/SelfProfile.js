import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

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
            setProfileUrl(designerProfile.profiles.data[0].profile_url)
            // setFrame(<iframe src={designerProfile.profiles.data[0].profile_url} width="100%" height="900"></iframe>)
            setIsLoading(false);
            // console.log(designerProfile.profiles.data[0].profile_url)
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
    }, [useAuth0().isAuthenticated]);

    const [profileUrl, setProfileUrl] = useState(); 
    





    return (
        <div style={{overflow: "hidden", position: 'absolute', height: "85%", width: "100%" }}>
            <iframe style={{ height: "100%", margin: 0, minHeight: 100, top: 0, width: "100%" }} src={profileUrl}></iframe>
        </div>
    )
}    

export default SelfProfile;