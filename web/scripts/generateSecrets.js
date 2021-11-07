const crypto = require('crypto')

const apiKey = crypto.randomBytes(64).toString('hex')

console.log('copy the output below and paste it in your env.local \n')

console.log(`NEXT_PUBLIC_API_KEY=${apiKey}`)
