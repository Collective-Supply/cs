import React, { useState, useEffect } from 'react';
import ProfileFetcher from './ProfileFetcher';

const UrlParser = () => {

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

 ProfileFetcher(url);

  return (
    <p>Share Link: https://collective.supply/?x={url}</p>
  );
};



export default UrlParser;
