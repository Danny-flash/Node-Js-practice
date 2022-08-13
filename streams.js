const {createReadStream, createWriteStream} = require("fs")

const readStream = createReadStream("./assets/blog.txt", {encoding: "utf8"})
const writeStream = createWriteStream("./assets/blog2.txt")

/*readStream.on('data', (chunk) => {
    console.log("---new chunks----")
    console.log(chunk)
     
    writeStream.write("\nNEW CHUNK\n");
    writeStream.write(chunk)
})*/

//same as this (piping)

readStream.pipe(writeStream)