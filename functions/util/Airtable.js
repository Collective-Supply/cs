require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY
});

// Initiliaze Airtable SDK and passing credentials via .env files
const base = Airtable.base(process.env.AIRTABLE_BASE);
const tableViewers = base.table(process.env.AIRTABLE_TABLE_VIEWERS);
const tableDesigners = base.table(process.env.AIRTABLE_TABLE_DESIGNERS);
const tableSharedLinks = base.table(process.env.AIRTABLE_TABLE_SHAREDLINKS);
const tableViewSessions = base.table(process.env.AIRTABLE_TABLE_VIEWSESSIONS);

module.exports = { tableViewers, tableDesigners, tableSharedLinks, tableViewSessions };