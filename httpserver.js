const http = require('http')
const fs= require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200
        res.end('<h1>Welcome to the homepage</h1>')
    }

    else if(req.url == '/about'){
        res.statusCode = 200
        res.end('<h1>Welcome to about page</h1>')
    }

    else if(req.url == '/game'){
        res.statusCode = 200
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }

    else{
        res.statusCode=404
        res.end('Not Found')
    }
})

server.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})

