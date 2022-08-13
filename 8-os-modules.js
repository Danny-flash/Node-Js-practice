
const os = require('os')

//info about current user
const user = os.userInfo()

//method returns the system uptime in seconds

//console.log(`The system Uptime is ${os.uptime()}`)

const currentOs ={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)