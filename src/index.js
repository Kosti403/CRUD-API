import http from "http";
import { handleRequest } from "./router.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
