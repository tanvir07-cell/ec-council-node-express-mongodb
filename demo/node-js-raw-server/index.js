const http = require("http");
const PORT = 3000;
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`get data...`);
    res.end();
  }
  if (req.method === "POST") {
    console.log(req.url);
    res.writeHead(201, { "content-type": "application/json" });
    res.write(JSON.stringify({ name: "Tanvir Rifat", age: 22 }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});
