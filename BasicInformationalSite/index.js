var http = require("http");
var fs = require("fs")

var server = http.createServer((req,res)=>{
    if(req.url=="/about"){
        fs.readFile("about.html",(err,html)=>{
            if (err) {
                console.log(err);
                res.end();
            } else {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(html);
            res.end();
            }
        })
    }
    else if(req.url=="/contact-me"){
        fs.readFile("contact-me.html",(err,html)=>{
            if (err) {
                console.log(err);
                res.end();
            } else {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(html);
            res.end();
            }
        })
    }
    else if(req.url=="/"){
        fs.readFile("index.html",(err,html)=>{
            if (err) {
                console.log(err);
                res.end();
            } else {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(html);
            res.end();
            }
        })
    }
    else{
        fs.readFile("404.html",(err,html)=>{
            if (err) {
                console.log(err);
                res.end();
            } else {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(html);
            res.end();
            }
        })
    }
})

server.listen(8080);