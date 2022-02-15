//NO NEED FOR THIS BECAUSE USER IS AUTOMATICALLY CREATED ON SIGN UP VIA Post User Registration ACTIONS ON AUTH0


const axios = require('axios');
require('dotenv').config();
const { CREATE_USER } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    
    const given_name = user.given_name;
    const family_name = user.family_name;
    const nickname = event.user.nickname;
    const name = event.user.name;
    const picture = event.user.picture;
    const updated_at = event.user.updated_at;
    const email = event.user.email;
    const emailed_verified = user.emailed_verified;
    const sub = event.user.user_id;
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