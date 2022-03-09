import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SelfProfile from "../components/myprofile/SelfProfile";

export default function MyProfile() {
    
    const { user, isAuthenticated } = useAuth0();
    
    return(
        <>
            <SelfProfile />
        </>
    )
}