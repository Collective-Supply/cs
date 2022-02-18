//NO NEED FOR THIS BECAUSE USER IS AUTOMATICALLY CREATED ON SIGN UP VIA Post User Registration ACTIONS ON AUTH0
// code below is copied/used from the Auth0 Action code snippet that lives on auth0.com

const axios = require('axios');
require('dotenv').config();
const { CREATE_USER } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    
    const { given_name, family_name, nickname, name, picture, updated_at, email, emailed_verified, sub } = JSON.parse(event.body);
    // template for parameters that must be passed to calling this function
    // const given_name = user.given_name;
    // const family_name = user.family_name;
    // const nickname = user.nickname;
    // const name = user.name;
    // const picture = user.picture;
    // const updated_at = user.updated_at;
    // const email = user.email;
    // const emailed_verified = emailed_verified;
    // const sub = user.user_id;
    const variables = { given_name, family_name, nickname, name, picture, updated_at, email, emailed_verified, sub };
    
    try {
        const { createUser } = await sendQuery(
            CREATE_USER, 
            variables
        );

        return formattedResponse(200, createUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in creating a new user.' });
    }
};

//THIS WORKS! COMPLETED!