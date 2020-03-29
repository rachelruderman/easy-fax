import {promises} from './_util/promises';

/*
    The messages variable is an object full of the messages SparkPost handed off to us. We’ll need to loop through the messages, pull off the attachment, save it to Cloudinary, and send off the fax.

    P.S. Before you launch this to the world, you’ll probably want to validate the phone numbers you’re sending to and add some security to who can send. I’d suggest a token in the email that you verify in the Twilio function.
*/

Promise.all(promises)
    .then(() => callback(null, 'success'))
    .catch((error) => callback(error))