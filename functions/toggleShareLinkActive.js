const axios = require('axios');
require('dotenv').config();
const { TOGGLE_SHARE_LINK_ACTIVE } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    
    const { id } = JSON.parse(event.body);
    const variables = { id };
    
    try {
        const { updateShare_link } = await sendQuery(
            TOGGLE_SHARE_LINK_ACTIVE, 
            variables
        );

        return formattedResponse(200, updateShare_link);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in activating a link.' });
    }
};

//THIS WORKS! COMPLETED!