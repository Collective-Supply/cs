import './App.css';
import React, {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  // Auth0 checks to see if viewer of this page is authenticated or not
  const { user, isAuthenticated } = useAuth0();

  // HTML parameter to pass to db to point to shared link ID
  // https://www.sitepoint.com/get-url-parameters-with-javascript/
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const LinkId = urlParams.get('x');

  // Set a cookie to remember the URL param to recall when user signs in
  // Keep in mind that the cookie is only set for this domain so once you move 
  // shared or profile director over, it will need to be updated!
  if (LinkId) {
      document.cookie = `urlParam=${LinkId}`;
  };

  // Parses out the urlParam part of the cookie
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
  const urlParamCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('urlParam='))
      .split('=')[1];

  // Connect the cookie parameter and feed it as the url    
  const url = urlParamCookie;




  // async function to pass url in body of fetch
  const loadProfile = async() => {
    const body = { url };
    const res = await fetch('/api/getProfileByShareLink', {
      method: 'POST',
      body: JSON.stringify(body)
    });
    
    const designerProfile = await res.json();

    const profileUser = JSON.stringify(designerProfile);
    
    console.log(url)
    //output should be the url parameter based on the cookie
    console.log(designerProfile) 
    //output should be the designer's profile and basic info
    console.log(designerProfile.profile.job_title) 
    //output should be "Product Design Lead"

  };

  useEffect(() =>{
    loadProfile();
  }, []);

  const [profilePreview, revealProfile] = useState([]);

    return (
      // isAuthenticated checks to see if user is logged in via Auth0 and only shows the data below if viewer is signed in
      // the "user" object and more specifically the "user.sub" needs to be passed to the backend to create a view_session using createViewSession.js function
      // the code below is rendering it on the browser but shouldn't be
      isAuthenticated && (
          <div>
              <h1 className="text-center mb-5">Profile</h1>
              <img src={user.picture} alt={user.name} />
              <h2>{user.id}</h2>
              <p>{user.email}</p>
              <p>{user.sub}</p>
              
              <JSONPretty data={user} /> 
          </div>
        )
    )
}

export default App;
