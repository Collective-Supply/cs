import React from "react";
import SharedLinks from "../components/sharelinks/SharedLinks";
import { useAuth0 } from "@auth0/auth0-react";

export default function ShareLinks() {
    return(
        <div>
            <h1>Shared Links</h1>
            {useAuth0().isAuthenticated && <SharedLinks />}
        </div>
    )
}