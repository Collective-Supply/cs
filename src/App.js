import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfile from "./pages/MyProfile";
import About from "./pages/About";
import ShareLinks from "./pages/ShareLinks";
import Home from "./Home";
import Navbar from './components/navbar/Navbar';
import NavbarNoProfile from './components/navbar/NavbarNoProfile';
import { useEffect, useState } from 'react/cjs/react.development';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

    const { user, isAuthenticated } = useAuth0();

    // Checks to see if user has a profile
    const checkProfile = async() => {
        try {
                const sub = user.sub;
                const body = { sub };
                const res = await fetch('/api/getSharedLinksAndViewSessionsBySub', {
                    method: 'POST',
                    body: JSON.stringify(body)
                });
                const resLinks = await res.json();
                const profile = resLinks.profiles.data.length > 0
                return profile
            } catch(err) {
                console.error("catch error: " + err);
            } 
    };

    // Checks to see if a) there's a URL parameter, b) user is logged in, c) user owns a profile
    const userStatusChecker = async() => {
        const hasParameter = window.location.search;
        const isLoggedIn = isAuthenticated;
        const hasProfile = await checkProfile(); // returns undefined but still returns has profile

        // performs logic based on the 3 variables
        if (hasParameter) {
            if (isLoggedIn) {
                if (hasProfile) {
                    // has parameter, is logged in, has profile
                    console.log("has parameter, is logged in, has profile")
                    setNavbarType(<Navbar />)

                } else {
                    // has parameter, is logged in, no profile
                    console.log("has parameter, is logged in, no profile")
                    
                }
            } else {
                // has parameter, not logged in
                console.log("has parameter, not logged in")
                
            }
        } else {
            if (isLoggedIn) {
                if (hasProfile) {
                    // no parameter, is logged in, has profile
                    console.log("no parameter, is logged in, has profile")
                    setNavbarType(<Navbar />)

                } else {
                    // no parameter, is logged in, no profile
                    console.log("no parameter, is logged in, no profile")
                    
                }
            } else {
                // no parameter, not logged in
                console.log("no parameter, not logged in")
                
            }
        }
    }

    // Sets and adjusts the default homepage content based on the 1) url parameter 2) viewer login status 3) user owning a profile or not
    const [navbarType, setNavbarType] = useState(<NavbarNoProfile />); 

    // runs the status checker only after user is logged in and returns a user obj. User is in useEffect parameter so that it can check again once user has logged in
    useEffect(() =>{
        userStatusChecker();
    }, [user]);


  return (
      <>
        <Router>
          {navbarType}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/myprofile" element={<MyProfile />} /> 
            <Route exact path="/sharelinks" element={<ShareLinks />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;