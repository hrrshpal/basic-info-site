const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        const htmlpath = path.join(__dirname + "/index.html")

        fs.readFile(htmlpath, 'utf8', (err, data) => {
            if (err) {
                res.end('Internal Server Error');
                return;
            }
            res.end(data);
        });
    } else if(req.url === '/about'){
        const htmlpath = path.join(__dirname + "/about.html")

        fs.readFile(htmlpath, 'utf-8', (err,data) => {
            if(err){
                res.end("Internal Server Error")
                return
            }
            res.end(data)
        })
    } else if(req.url === '/contact'){
        const htmlpath = path.join(__dirname + "/contact.html")

        fs.readFile(htmlpath, 'utf-8', (err,data) => {
            if(err){
                res.end("Internal server error")
                return
            }
            res.end(data)
        })
    } else {
        const htmlpath = path.join(__dirname + "/404.html")

        fs.readFile(htmlpath, "utf-8", (err,data)=>{
            if(err){
                res.end("Internal server error")
                return
            }
            res.end(data)
        })
    }
})

server.listen(8000)