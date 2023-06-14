const http = require("http");
const options = {
  hostname: "localhost",
  port: 3000,

  method: "GET",
};

const request = http.request(options, (res) => {
  res.on("data", (chunk) => {
    // console.log(chunk.toString());
    // othoba console.log nah diyeo eita dile hobe:
    process.stdout.write(chunk);
    console.log("\nSTATUS:", res.statusCode);
  });
});

// if any error occcured when sending request:
request.on("error", (err) => {
  console.log(err);
});
// end the request:
request.end();
