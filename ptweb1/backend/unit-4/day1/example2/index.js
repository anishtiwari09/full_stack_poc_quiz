// let sum=require('./sum')
// console.log(sum(19,29))
const user = ["Nrupal", "aman", "albert",'akshay'];
const getAllUsers = () => {
  return user;
};
const getUser = (index) => {
  if (index >= 0 && index < user.length) return user[index];
  else return "user not defined"
};
const http = require("http");
let server = http.createServer((req, res) => {
  //console.log(req)
  //console.log(req.headers)
  try {
    console.log(req.url);
    if(req.url==="/"){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(getAllUsers()));}
else if(req.url.startsWith("/user/")){
    let index=Number(req.url.split('/')[2])

res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(getUser(index)));
}
else {
    throw new Error('Did not understand query')
}
  } catch (err) {
      console.log(err)
      res.writeHead(500,{'Content-Type':'application/json'})
      res.end(JSON.stringify(
          ''+err
      ))
  }
});
server.listen(8080, () => {
  console.log("lisnening");
});
