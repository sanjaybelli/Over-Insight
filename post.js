var http = require("http");
var querystring = require("querystring");
function onRequest(req, res)
{
if (req.method === "POST")
{
var body = "";
req.on("data", function(chunk)
{    
body += chunk.toString();
});
req.on("end", function()
{      
var params = querystring.parse(body);
var name = params["name"];
var password = params["password"];
res.writeHead(200, { "Content-Type": "text/html" });
res.write("<h1>Name : " + name + "<br>Your Password : " + password + "</h1>");
  res.end();
});
}
else
{  
res.writeHead(405, { "Content-Type": "text/plain" });  
res.end("Method not allowed");
} }
var server = http.createServer(onRequest);
server.listen(88, function() {   console.log('Server has started on port 88');
}); 
