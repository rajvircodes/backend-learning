const bcrypt = require('bcrypt')

async function hashedPassword(plainTextPassword) {
    const salt = 12;
    const hash = await bcrypt.hash(plainTextPassword, salt)
    return hash
}

const hash = hashedPassword('myPassword')
console.log(hash);
