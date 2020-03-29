import cloudinary from 'cloudinary';

export const uploadAttachment = (attachment) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.v2.uploader.upload_stream((error, result) => {
        if (error) {
          reject(error)
        }
        else {
          resolve(result.url)
        }
      })
      attachment.pipe(stream)
    })
  }