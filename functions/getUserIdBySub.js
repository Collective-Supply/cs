//NO NEED FOR THIS BECAUSE USER IS AUTOMATICALLY CREATED ON SIGN UP VIA Post User Registration ACTIONS ON AUTH0

const axios = require('axios');
require('dotenv').config();
const { GET_USER_ID_BY_SUB } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const { sub } = JSON.parse(event.body);
    const variables = { sub };
    
    try {
        const { user_by_sub } = await sendQuery(
            GET_USER_ID_BY_SUB, 
            variables
        );
        return formattedResponse(200, user_by_sub);

    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in querying for user ID (getUserIdBySub)' });
    }

};

//THIS WORKS! COMPLETED!