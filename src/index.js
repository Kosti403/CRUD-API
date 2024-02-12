import http from "http";
import { handleRequest } from "./router.js";

const server = http.createServer(handleRequest);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
