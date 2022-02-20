import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

export default function MyProfile() {
    
    const { user, isAuthenticated } = useAuth0();
    
    return(
        <div>
            <h1>My Profile</h1>
            {useAuth0().isAuthenticated && <p>{user.name}</p>}
            {isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.id}</h2>
                <p>{user.email}</p>
                <JSONPretty data={user} /> 
        </div>
        )}
        </div>
    )
}