const { tableSharedLinks } = require('./util/Airtable');

const testLinkId = "xyzxyz";
const testIdDesigner = "last name blah";

// Filtering by LinkedIn user ID
exports.handler = async (event) => {
    const createSharedLink = await tableSharedLinks.create({
        "link_id": "pass it the link's ID",
        "user_id_designer": "pass it the designer's ID",
    }, (err, record) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(record.getId())
    })
};

// Currently throws an error: lambda response was undefined. check your function code again
// Also just creates new users even if ID is exactly the same
// console log: Failed to load resource: the server responded with a status of 500 (Internal Server Error)