import react from "react";
import Profile from "../components/Profile";
import SharedLinks from "../components/sharelinks/SharedLinks";
import { useAuth0 } from '@auth0/auth0-react';
import Introduction from "../components/home/Introduction";

// if not logged in, show introduction and about
const Home = () => {

    const { user, isAuthenticated } = useAuth0();

    function loggedIn() {
        if (!isAuthenticated) {
            return <Introduction />;
        } 
    }

    // check to see if there's parameter and if yes load profile
    function showProfile() {
        if (window.location.search) {
            return <Profile />;
        }
    }

    // if logged in and no parameter , check to see if viewer profile exists, if not then no sharelinks
     
    return(
        <div>
            <h1>Home</h1>
            {loggedIn()}
            {showProfile()}
        </div>
    )

}

export default Home;

    