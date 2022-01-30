const { tableDesigners } = require('./util/Airtable');

// url to access function: http://localhost:8888/api/GetDesigner

// Filtering by LinkedIn user ID
exports.handler = async (event) => {

    //passedParam is the ?search=shared link to search by on AirTable
    const passedParam = event.queryStringParameters.share

    try {
        const records = await tableDesigners
            .select({filterByFormula: `{shared_links} = "${passedParam}"`})
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
