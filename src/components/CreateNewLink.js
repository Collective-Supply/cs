import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';


const CreateNewLink = () => {
    const { user, isAuthenticated } = useAuth0();


    // getProfileId function is used for creating a new share link as one of the parameters to be fed in
    const getProfileId = async() => {
        const sub = user.sub;
        const body = { sub };
        const res = await fetch('/api/getProfileBySub', {
            method: 'POST',
            body: JSON.stringify(body)
        });
        const resJSON = await res.json();
        const profileId = resJSON.profiles.data[0]._id
        return profileId;
    };


    if (useAuth0().isAuthenticated) {

        // useEffect(() => {
        //     loadLinks();
        // })
    }



    

    return <div className="container py-5">
        <h1 className="text-center mb5">Create Share Link</h1>
    </div>

}

export default CreateNewLink;