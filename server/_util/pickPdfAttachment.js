const pickPdfAttachment = (message) => {
    return new Promise((resolve, reject) => {

      const { content } = message.msys.relay_message;
      const isBase64    = content.email_rfc822_is_base64

      const body        = isBase64 ? 
                            Buffer.from(content.email_rfc822, 'base64') :
                            content.email_rfc822;

      const parser      = new MailParser({ streamAttachments: true });

      let attachment
      
      parser.on('data', (data) => {
          const isPdfAttached = (!attachment && data.type === 'attachment' && data.contentType === 'application/pdf');

        if (isPdfAttached) {
            attachment = data.content
        }
      })
      
      parser.on('error', reject)
      parser.write(body)
      parser.end(() => resolve(attachment))
    })
  }