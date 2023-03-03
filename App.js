const http = require('http');


const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('<h1>Welcome Home</h1>\
        <a href="/about">Click here to know more about us<\a>');  
    }
    else if(req.url === '/about'){
        res.end('<h1>About Us</h1>\
        <a href="/">Go HOME<\a>')
    }else
    {
    res.end('\
    <h1>Oops!!</h1>\
    <p>we dont have this service</p>\
    <a href="/">Go to Home</a>\
    ')}
})

server.listen(5000)