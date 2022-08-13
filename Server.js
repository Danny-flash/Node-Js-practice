
const { createServer } = require("http");
const { readFile } = require("fs")

const server = createServer((req, res)=>{
  //console.log(req.url, req.method)


  //switch method for routing

  let path = "./views/"

  switch(req.url){
    case "/":
    path += "index.html";
    break;

    case '/about':
    path += "about.html";
    break;

    default:
     path += "404.html";
     break;   

  }
  
  readFile(path, (err, data)=>{
     if(err){
        console.log(err)
        res.end()
     }
     else{
        res.end(data)
     }
  })
  

})

server.listen(3000, "localhost", () => {
   console.log("listening to port 3000")
})


