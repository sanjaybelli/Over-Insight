const http = require("http");
const url = require("url");
const querystring = require("querystring");
function onRequest(req, res)
{  
const path = url.parse(req.url).pathname;
console.log('Request for ' + path + ' received');
const query = url.parse(req.url).query;
console.log(query);
const params = querystring.parse(query);
const name = params["name"];
const password = params["password"];
res.writeHead(200, { "Content-Type": "text/html" });
res.write("<h1>Name : " + name + "<br>Your Password : " + password + "</h1>");
res.end();
} const server = http.createServer(onRequest); server.listen(88, () => {   console.log('Server has started on port 88');
});
