const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<body><h1>This is first routes</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html><head></head>");
    res.write("<body><ul>");
    res.write("<li>Software Engg</li>");
    res.write("<li>Sr Software Engg</li>");
    res.write("<li>Team Lead</li>");
    res.write("<li>Manager</li>");
    res.write("</ul></body>");
    return res.end();
  }
  if (url === "/add-user") {
    res.write("<html><head></head>");
    res.write("<body>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username">'
    );
    res.write('<button type="submit"> Send</button></form>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && req.method === "POST") {
    const bodyData = [];
    req.on("data", (chunk) => {
      //console.log(chunk);
      bodyData.push(chunk);
    });

    return req.on("end", () => {
      const parsedata = Buffer.concat(bodyData).toString();
      //console.log(parsedata);
      const message = parsedata.split("=")[1];
      console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        req.statusCode = 404;
      });
      req.statusCode = 302;
      res.setHeader("Location", "/");
    });
  }
};

module.exports = {
  handler: requestHandler
};
