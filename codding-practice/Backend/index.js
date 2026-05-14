// Step 1 — Import http module
const http = require("http");

// Step 2 — Define host and port
const HOST = "localhost";
const PORT = 4000;

// Step 3 — Create server
const server = http.createServer((req, res) => {
  
  // Set response header
  res.writeHead(200, { 
    "Content-Type": "text/plain" 
  });
  
  // Send response
  res.end("Hello! Server is Running!");
});

// Step 4 — Start server
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});