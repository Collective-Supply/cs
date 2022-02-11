const axios = require('axios');
require('dotenv').config();
const { GET_PROFILE_BY_SHARE_LINK_URL } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const { url } = JSON.parse(event.body);
    const variables = { url };
    
    try {
        const { share_link_by_url: shared_link_by_url } = await sendQuery(
            GET_PROFILE_BY_SHARE_LINK_URL, 
            variables
        );

        return formattedResponse(200, shared_link_by_url);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in retrieving the profile.' });
    }
};

//THIS WORKS! COMPLETED!