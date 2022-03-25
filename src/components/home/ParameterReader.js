module.exports = (parameterName) => {

    // HTML parameter to pass to db to point to shared link ID
    // https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const LinkId = urlParams.get(parameterName);
    
    // *** COOKIE SETTINGS - replace if removing login with popup instead of redirect in LoginButton.js
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
    // returns the url parameter   
    return urlParamCookie;
};