import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SelfProfile from "../components/myprofile/SelfProfile";

export default function MyProfile() {
    
    const { user, isAuthenticated } = useAuth0();
    
    return(
        <div>
            <h1>My Profile</h1>
            {useAuth0().isAuthenticated && <p>{user.name}</p>}
            {isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <SelfProfile />
            </div>
        )}
        </div>
    )
}