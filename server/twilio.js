require('dotenv');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken  = process.env.TWILIO_AUTH_TOKEN;
const from       = process.env.TWILIO_INCOMING_PHONE_NUMBER;
const to         = process.env.RECIPIENT_PHONE_NUMBER;
const mediaUrl   = process.env.PDF_URL;

const { create } = require('twilio')(accountSid, authToken).fax.faxes;

const sendFax = async () => {
    try {
        console.log('Here goes nothing...');
        const fax = await create ({ from, to, mediaUrl });
        console.log(`YAAASSSSSS! /n /n ${fax}`);
    }
    catch (error) {
        console.log (`Ruh Roh... /n /n ${error}`);
    }
}

sendFax();

// todo: make it so the console can prompt and take arguments