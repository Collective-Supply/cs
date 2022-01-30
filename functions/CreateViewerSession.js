const { tableViewSessions } = require('./util/Airtable');

const sessionId = "xyz";
const linkId = "xyz"
const userIdDesigner = "xyz";
const userIdViewer = "xyz"

// Filtering by LinkedIn user ID
exports.handler = async (event) => {
    const createUser = await tableViewers.create({
        "session_id": "session ID should be chronological? but what if some of them get deleted?",
        "link_id": "URL hash",
        "user_id_designer": "ID of designer that created the link",
        "user_id_viewer": "ID of viewer that visited the link",
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