import React, {useEffect, useState} from 'react';

const ProfileFetcher = (url) => {
  
  // async function to pass url in body of fetch
    const loadProfile = async() => {
    const body = { url };
    const res = await fetch('/api/getProfileByShareLink', {
      method: 'POST',
      body: JSON.stringify(body)
    });
    
  const designerProfile = await res.json();

  
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


return (
// isAuthenticated checks to see if user is logged in via Auth0 and only shows the data below if viewer is signed in
// the "user" object and more specifically the "user.sub" needs to be passed to the backend to create a view_session using createViewSession.js function
// the code below is rendering it on the browser but shouldn't be

    <div>
        
    </div>
    )
  
}

export default ProfileFetcher;
