import * as http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hello");
    console.log("Hello");
    // console.log(req.url);
    res.end();
}).listen(8000)
