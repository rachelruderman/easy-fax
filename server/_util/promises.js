import { getTargetNumber } from './getTargetNumber';
import { pickPdfAttachment } from './pickPdfAttachment';
import { sendFax } from './sendFax';
import { uploadAttachment } from './uploadAttachment';

export const promises = Object.entries(messages).map( (message) => {
    const targetNumber = getTargetNumber(message);

    try {
        const attachment    = await pickPdfAttachment(message);
        const mediaUrl      = await uploadAttachment(attachment);
        sendFax ({twilio, targetNumber, mediaUrl});
    }
    catch (error) {
        console.log({error})
    }

})