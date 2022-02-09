const axios = require('axios');
require('dotenv').config();
const { DELETE_VIEW_SESSION } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

    const id = "323042212621320258";
    const variables = { id };
    
    try {
        const { deleteView_session } = await sendQuery(
            DELETE_VIEW_SESSION,
            variables
        );

        return formattedResponse(200, deleteView_session);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in deleting a view session.' });
    }
};

//THIS WORKS! COMPLETED!