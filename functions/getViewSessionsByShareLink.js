const axios = require('axios');
require('dotenv').config();
const { GET_VIEW_SESSIONS_BY_SHARE_LINK_URL } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    
    const url = "xYsHhttps://collective.supply/?x=Uwn82U";
    const variables = { url };
    
    try {
        const { share_link_by_url } = await sendQuery(
            GET_VIEW_SESSIONS_BY_SHARE_LINK_URL, 
            variables
        );

        return formattedResponse(200, share_link_by_url);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in retrieving all the sessions for this link.' });
    }
};

//THIS WORKS! COMPLETED!