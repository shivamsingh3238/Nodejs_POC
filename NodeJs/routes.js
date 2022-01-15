const fs = require("fs");

const requestHandler = (req, res) => {
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

  // if (url === "/test") {
  //   //res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>Web server</title></head>");
  //   res.write("<body><h1>Hello This is test page</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }

  // Parse data and from responce and store data into file using on event
  if (url === "/message" && method === "POST") {
    const bodyData = [];
    req.on("data", (chunk) => {
      //console.log(chunk);
      bodyData.push(chunk);
    });

    return req.on("end", () => {
      const parsedata = Buffer.concat(bodyData).toString();
      //console.log(parsedata);
      const message = parsedata.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        req.statusCode = 404;
      });
      req.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Web server</title></head>");
  res.write("<body><h1>Hello First Web server page</h1></body>");
  res.write("</html>");
  res.end();
};

// module.exports = requestHandler;

module.exports = {
  handler: requestHandler
};

// exports.handler = requestHandler;
