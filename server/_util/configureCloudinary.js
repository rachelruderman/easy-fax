export const configureCloudinary = ({context, messages, callback}) => {
    const twilio = context.getTwilioClient();
  
    cloudinary.config({
      cloud_name:   context.CLOUDINARY_CLOUD_NAME,
      api_key:      context.CLOUDINARY_API_KEY,
      api_secret:   context.CLOUDINARY_API_SECRET
    })
  }