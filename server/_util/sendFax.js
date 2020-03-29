export const sendFax = async ({twilio, targetNumber: to, mediaUrl}) => {
    try {
        await twilio.fax.v1.faxes.create ({
            to,
            from: YOUR_PHONE_NUMBER,
            mediaUrl
        })
        console.log('sent', mediaUrl, 'to', toNumber);
    }
    catch (error) {
        console.log({error});
    }
}