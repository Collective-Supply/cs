const { tableViewers } = require('./util/Airtable');

const testUserId = "user12345";
const testFamilyName = "last name blah";
const testGivenName = "first name blah blah"
const testEmail = "whatever@blah.com"

// Filtering by LinkedIn user ID
exports.handler = async (event) => {
    const createUser = await tableViewers.create({
        "user_id_viewer": "blah",
        "family_name": "last name blah",
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