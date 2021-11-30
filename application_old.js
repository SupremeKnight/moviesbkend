const http = require('http');
const url = require('url')

const PORT = 3000;

http.createServer((req, res) => {
    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.pathname;
    let queryString = parsedURL.query;
    console.log(`request from URL ${path} with\n`, queryString)
}).listen(PORT, () => {
    console.log(`Server running @http://localhost:${PORT}`)
})
