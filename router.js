var url = require("url");
var creativeDetails = require('./endpoints/creative-details');
var creativeIsSaved = require('./endpoints/creative-is-saved');

exports.onRequest = function (request, response) {
  var parsedUrl = url.parse(request.url);

  if (parsedUrl.pathname === "/") {
    creativeDetails.handle(request, response);
  } else if (parsedUrl.pathname === "/creative-is-saved") {
    creativeIsSaved.handle(request, response);
  } else {
    fallbackOn404(request, response);
  }
};

function fallbackOn404(request, response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.end("page not found.");
}
