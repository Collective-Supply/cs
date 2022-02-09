const axios = require('axios');
require('dotenv').config();
const { GET_USER_BY_SUB } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

    const sub = "linkedin|fw0Q4qTTPN";
    const variables = { sub };

    try {
        const { user_by_sub } = await sendQuery(
            GET_USER_BY_SUB, 
            variables
        );

        return formattedResponse(200, user_by_sub);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in retrieving your profile.' });
    }
};

//THIS WORKS! COMPLETED!