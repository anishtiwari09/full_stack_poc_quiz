const { getAllUsers, getUser,addUser, showUserPerPage } = require("./allusers");
const http = require("http");
const server = http.createServer((req, res) => {
  try {
    if (req.url.startsWith("/users")) {
     
      if (req.method === "GET") {
        if (req.url === "/users") {
       
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(getAllUsers()));
        } 
        else if(req.url.startsWith("/users?"))
        {
         
          let [url,query]=req.url.split('?')
          console.log(query)
          let q=new URLSearchParams(query)
          
          res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(showUserPerPage(Number(q.get('page'))||1)));
        }
        else if (req.url.startsWith("/users:")) {
          const [url, id] = req.url.split(":");
          let ids = Number(id);

          if (isNaN(ids)) throw "invalid parameter";
          else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(getUser(ids)));
          }
        } 
    
        else {
          throw "invalid request";
        }
      }
      else if(req.method==="POST")
      {
          if(req.url.startsWith("/users?")){
              const [url,query]=req.url.split('?')
           
              let q=new URLSearchParams(query)
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify(addUser(q.get('name'))));

          }
          else throw 'invalid query'
      }
      else throw 'invalid method'
      

    } 
    else {
      throw "invalid query";
    }
  } catch (e) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: e }));
  }
});
server.listen(80, () => {
  console.log("listnening\n");
});
