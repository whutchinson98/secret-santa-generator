require('dotenv').config()
const nodeMailer = require('node-mailer')
const participants = require('./participants.json')
const EMAIL = process.env.EMAIL
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD


const emailHelper = async (participantIndex, santaFor) => {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: '465',
        secure: true,
        protocol: 'ssl',
        auth: {
          user: EMAIL,
          pass: EMAIL_PASSWORD
        }
      })
    
      const message = `You are the secret santa for ${santaFor.name}`
      const mailOptions = {
        from: EMAIL,
        to: participants[participantIndex].email,
        subject: 'Secret Santa',
        text: message
      }
    
      try {
        await transporter.sendMail(mailOptions)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
}

const generateSecretSanta = () => {
    const participantsMap = {}
    for(let i = 0; i < participants.length; i++){
        const participant = participants[i]
        let random = Math.floor(Math.random() * participants.length)
        let reset = false

        while(random in participantsMap || i === random){
            if(participantsMap.length === participant.length - 1){
                i = 0
                participantsMap = {}
                reset = true
                break
            }
            random = Math.floor(Math.random() * participants.length)
        }
        if(!reset){
            participantsMap[random] = participant
        }
    }

    for(let i = 0; i < participantsMap.length; i++){
        emailSent = await emailHelper(i,participantsMap[i])

        if(!emailSent){
            console.log("Error occured please see console output for more details.")
            return
        }
    }
}


generateSecretSanta()