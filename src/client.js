const http = require("http");

http.get("http://localhost:3000", (res) => {
  console.log("Status Code", res.statusCode);

  res.on("data", (chunk) => {
    //console.log(chunk.toString());
    //process.stdout.write(chunk);
    const data = JSON.parse(chunk.toString());
    
    data.users.forEach((user) => {
        console.log('user info', user.name);
    });
  });
});
