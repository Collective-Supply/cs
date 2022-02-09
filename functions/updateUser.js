const axios = require('axios');
require('dotenv').config();
const { UPDATE_USER } = require('./utils/graphQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    
    const id = "322266580556709954"; 
    const given_name = "Hang";
    const family_name = "Xu";
    const nickname = "Hangster";
    const name = "Hang Xu";
    const picture = "https://media-exp1.licdn.com/dms/image/C4D03AQGyKAQD9axhjA/profile-displayphoto-shrink_800_800/0/1607479857955?e=1649289600&v=beta&t=B7rXS_BYY-doHXDA_kujVyzuoUXH0L5InQTMbD1wVyQ";
    const updated_at = "2022-01-30T14:29:21.900Z";
    const email = "hangme@gmail.com";
    const emailed_verified = true;
    const sub = "linkedin|fw0Q4qTTPN";
    const variables = { id, given_name, family_name, nickname, name, picture, updated_at, email, emailed_verified, sub };
    
    try {
        const { updateUser } = await sendQuery(
            UPDATE_USER, 
            variables
        );

        return formattedResponse(200, updateUser);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'There was an error in updating your profile.' });
    }
};

//THIS WORKS! COMPLETED!