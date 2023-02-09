import http from "node:http"

async function handler(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("hello node\n")
  console.log(request)
}

http.createServer(handler)
  .listen(3000, "localhost")
  .on("listening", () => console.log("server running at 3000"))