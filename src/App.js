import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { useAuth0 } from '@auth0/auth0-react';
import { DataProvider } from './context/DataContext';
import Navbar from './components/navbar/Navbar';
import NavbarNoProfile from './components/navbar/NavbarNoProfile';
import MyProfile from "./pages/MyProfile";
import About from "./pages/About";
import ShareLinks from "./pages/ShareLinks";
import Home from "./Home";
import ViewProfile from "./components/home/ViewProfile";
import Explanation from "./components/home/Explanation";
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import Global from './styled/Global';

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
                    setPageContent(<ViewProfile />)

                } else {
                    // has parameter, is logged in, no profile
                    console.log("has parameter, is logged in, no profile")
                    setPageContent(<ViewProfile />)
                    
                }
            } else {
                // has parameter, not logged in
                console.log("has parameter, not logged in")
                setPageContent(<Explanation />)
                
            }
        } else {
            if (isLoggedIn) {
                if (hasProfile) {
                    // no parameter, is logged in, has profile
                    console.log("no parameter, is logged in, has profile")
                    setNavbarType(<Navbar />)
                    setPageContent(<ShareLinks />)

                } else {
                    // no parameter, is logged in, no profile
                    console.log("no parameter, is logged in, no profile")
                    setPageContent(<About />)
                    
                }
            } else {
                // no parameter, not logged in
                console.log("no parameter, not logged in")
                setPageContent(<About />)
                
            }
        }
    }

    // Sets and adjusts the default homepage content based on the 1) url parameter 2) viewer login status 3) user owning a profile or not
    const [navbarType, setNavbarType] = useState(<NavbarNoProfile />); 

    // Sets and adjusts the default homepage content based on the 1) url parameter 2) viewer login status 3) user owning a profile or not
    // Drilling the page content selector down into Home.js
    const [pageContent, setPageContent] = useState(About()); 

    // runs the status checker only after user is logged in and returns a user obj. User is in useEffect parameter so that it can check again once user has logged in
    useEffect(() =>{
        userStatusChecker();
    }, [isAuthenticated]);


    return (
        <>
            {/* <DataProvider> */}
            <Global />
                <Router>
                    <Main>
                        <Container>
                            {navbarType}
                            <Routes>
                                <Route exact path="/" element={<Home 
                                                        pageContent={pageContent}
                                                        />} />
                                <Route exact path="/myprofile" element={<MyProfile />} /> 
                                <Route exact path="/sharelinks" element={<ShareLinks />} />
                                <Route exact path="/about" element={<About />} />
                            </Routes>
                        </Container>
                    </Main>
                </Router>
            {/* </DataProvider> */}
        </>
    );
}

export default App;