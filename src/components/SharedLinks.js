import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LinkList from "./LinkList";

const SharedLinks = () => {
    const { user, isAuthenticated } = useAuth0();

    const [links, setLinks] = useState([]);

    // Loads all the shared links
    const loadLinks = async() => {
       try {
            const sub = user.sub;
            const body = { sub };
            const res = await fetch('/api/getSharedLinksAndViewSessionsBySub', {
                method: 'POST',
                body: JSON.stringify(body)
            });
            const resLinks = await res.json();
            const links = resLinks.profiles.data[0].share_links.data
            setLinks(links)
       }catch(err) {
           console.error(err);
       } 
    };

    // Auth0's SDK forces the page to refresh every 250ms or so to see if it's authenticated the user. When it's
    // authenticated, the "user" JSON object is returned. The loadLinks() function requires data parsed from the "user"
    // JSON object, so it's waiting on useAuth0().isAuthenticated to return the "user" obj
    // The user obj is in the useEffect dependency so that as soon as user obj is returned by Auth0, it kicks off the load links
    useEffect(() => {
        loadLinks(); 
    }, [user]);


    // console.log(links)
    return <div className="container py-5">
        <h3 className="text-center mb5">Active Links</h3>
        <LinkList links={links}/>
    </div>

}

export default SharedLinks;