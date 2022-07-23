// let sum=require('./sum')
// console.log(sum(19,29))

const { user,addUsers, getAllUsers, getUser } = require("./allUsers");

const http = require("http");
let server = http.createServer((req, res) => {
  try {
    let [url, query] = req.url.split("?");
    console.log();
    if (url === "/users") {
      if (req.method === "GET") {
        const q = new URLSearchParams(`${query}`);
        const page = q.get("page") ?? 1;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(getAllUsers(Number(page))));
      } else if (req.method === "POST") {
        console.log(req);
        const [name, value] = query?.split("=");
        console.log(query);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(addUsers(user, value)));
      } else {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify("wrong methods"));
      }
    } else if (req.url.startsWith("/user/")) {
      let index = Number(req.url.split("/")[2]);

      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify(getUser(index)));
    } else {
      throw new Error("Did not understand query");
    }
  } catch (err) {
    console.log(err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify("" + err));
  }
});
server.listen(8080, () => {
  console.log("lisnening");
});
