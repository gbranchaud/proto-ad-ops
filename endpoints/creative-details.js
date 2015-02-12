var fs = require('fs');

exports.handle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync("./assets/creative-details.html", {encoding: "utf8"}));
};
