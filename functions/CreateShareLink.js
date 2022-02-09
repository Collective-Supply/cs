const axios = require('axios');
require('dotenv').config();
const { CREATE_SHARE_LINK } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const profile = "322908312739774530";
    const link_name = "I hope this works";
    const job_link = "lol";
    const url = makeid(5);
    const active = true;

    const variables = { profile, link_name, job_link, url, active };

    try {
        const { createShare_link } = await sendQuery(
            CREATE_SHARE_LINK, 
            variables
        );

        return formattedResponse(200, createShare_link);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in creating a new link.' });
    }
};

//COMPELTE