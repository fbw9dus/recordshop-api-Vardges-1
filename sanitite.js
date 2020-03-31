const validatorjs = require('validator')

const myEmail = "esho@mail.com"

const sanitizedEmail = validatorjs.normalizeEmail(myEmail)

console.log(sanitizedEmail)