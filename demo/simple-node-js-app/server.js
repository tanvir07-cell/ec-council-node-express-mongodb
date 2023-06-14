const http = require("http");
const PORT = 5000;
const fs = require("fs/promises");
const dir = "./public";

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      renderFile(res, "/index.html");
    }
    if (req.url === "/about") {
      renderFile(res, "/about.html");
    } else {
      renderFile(res, "");
    }
  })
  .listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });

const renderFile = async (res, filePath) => {
  try {
    res.writeHead(200, { "content-type": "text/html" });
    const getIndexFile = await fs.readFile(dir + filePath, "utf-8");
    return res.end(getIndexFile);
  } catch (err) {
    console.log(err);
    return res.end(`<h1>404 error occured</h1> `);
  }
};
