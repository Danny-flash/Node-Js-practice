

const {readFile, writeFile, mkdir, existsSync, rmdir, unlink} = require("fs")


readFile("./content/second.txt", (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())

})

writeFile("./content/subfolder/text.txt", "I changed the text", (err) => {
  if(err){
    console.log(err)
  }
})
writeFile("./content/subfolder/text2.txt", "I changed the text again.", (err) => {
  if(err){
    console.log(err)
  }
})

/*if(!existsSync("./assets")){
    mkdir("./assets", (err)=> {
        if(err){
          console.log(err)
        }
        console.log("file created")
      })
}else {
  rmdir("./assets", (err)=> {
    if(err){writeFile("./assets/deleteme.txt", "i am a deleted file", ()=> {
    console.log("created")
})
        console.log(err)
    }
    console.log("folder deleted")
  })
}*/



if(existsSync("./assets/deleteme.txt")){
   unlink("./assets/deleteme.txt", ()=> {
    console.log("deleted")
   })
}
else{
    writeFile("./assets/deleteme.txt", "i am a deleted file", ()=> {
        console.log("created")
    })
}