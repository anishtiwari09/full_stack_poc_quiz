const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") renderingTemplate(req, res);
});
server.listen("8080", () => {
  console.log("listnening");
});
const template = (req,res) => {
  const option = {
    title: "My Home page",
    welcome_message: "Welome to My Page",
    name: "anish",
  };
  let templates2 = "";
  fs.readFile(
    path.join(__dirname, "templates", "index.html"),
    "utf8",
    (err, value) => {
    
      let templates = value;

      for (let key in option) {
        templates = templates.replace(`{${key}}`, option[key]);
      }
res.writeHead(200)
res.end(templates)
    
    }
  );


};
const renderingTemplate = (req, res) => {
  console.log("hello");
  let templates = template(req,res);
  //return templates
};
