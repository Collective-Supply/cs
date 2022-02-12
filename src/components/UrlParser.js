// stop here!
import React, { useState, useEffect } from 'react';

export default function UrlParser() {

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

  // Connect the cookie parameter and feed it back as the url after logging in    
  const url = urlParamCookie;



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
    

  return (
    <p>Share Link: https://collective.supply/?x={url}</p>
    );


};










