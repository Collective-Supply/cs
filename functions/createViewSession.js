const axios = require('axios');
require('dotenv').config();
const { CREATE_VIEW_SESSION } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

    const { share_link, viewer } = JSON.parse(event.body);
    const variables = { share_link, viewer };

    try {
        const { createView_session } = await sendQuery(
            CREATE_VIEW_SESSION, 
            variables
        );

        return formattedResponse(200, createView_session);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in creating a new link.' });
    }
};

//THIS WORKS! COMPLETED!