const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Meaasge</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Sent</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY_DATA");
    req.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Web server</title></head>");
  res.write("<body><h1>Hello First Web server page</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
