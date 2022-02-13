//NO NEED FOR THIS BECAUSE USER IS AUTOMATICALLY CREATED ON SIGN UP VIA Post User Registration ACTIONS ON AUTH0


const axios = require('axios');
require('dotenv').config();
const { CREATE_USER } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    
    const given_name = "Boobs";
    const family_name = "McGee";
    const nickname = "Robert";
    const name = "Boobs McGee";
    const picture = "https://media-exp1.licdn.com/dms/image/C4D03AQGyKAQD9axhjA/profile-displayphoto-shrink_800_800/0/1607479857955?e=1649289600&v=beta&t=B7rXS_BYY-doHXDA_kujVyzuoUXH0L5InQTMbD1wVyQ";
    const updated_at = "2022-01-30T14:29:21.900Z";
    const email = "boobs@boobs.com";
    const emailed_verified = true;
    const sub = "linkedin|123";
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