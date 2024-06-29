var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer((req,res)=>{
var q=url.parse(req.url,true);
var filename = "."+q.pathname;
fs.readFile(filename,function(err,data){
if(err)
{
res.writeHead(404,{'Content-Type':'text/html'});
return res.end("Page not found");
}
res.writeHead(200,{'Content-Type':'text/html'});
res.write(data);
return res.end();
});
}).listen(88);
console.log("server running");