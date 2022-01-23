require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY
});

// Initiliaze Airtable SDK and passing credentials via .env files
;const base = Airtable.base(process.env.AIRTABLE_BASE);
const table = base.table(process.env.AIRTABLE_TABLE);

// Passing LinkedIn user ID for query
const testUserId = "fw0Q4qTTPN";

// Filtering by LinkedIn user ID
exports.handler = async (event) => {
    try {
        const records = await table
            .select({filterByFormula: `{user_id} = "${testUserId}"`})
            .firstPage();
        const formattedRecords = records.map(record => ({
            id: record.id,
            fields: record.fields,
        }));
    return {
        statusCode: 200,
        body: JSON.stringify(formattedRecords, null, 2),
    };
    } catch(err) {
        return {
            statusCode: 500,
            body: JSON.stringify({err: "Failed to query records"}),
        };
    };
};
