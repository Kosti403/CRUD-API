import { getUsers } from "./controllers/getUsers.js";
import { getUserById } from "./controllers/getUserById.js";
import { createUser } from "./controllers/createUser.js";
import { updateUserById } from "./controllers/updateUserById.js";
import { deleteUserById } from "./controllers/deleteUserById";

export const userRoutes = async (req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    getUsers(req, res);
  } else if (req.url.match(/^\/api\/users\/[\w-]+$/) && req.method === "GET") {
    const userId = req.url.split("/")[3];
    getUserById(req, res, userId);
  } else if (req.url === "/api/users" && req.method === "POST") {
    createUser(req, res);
  } else if (req.url.match(/^\/api\/users\/[\w-]+$/) && req.method === "PUT") {
    const userId = req.url.split("/")[3];
    updateUserById(req, res, userId);
  } else if (
    req.url.match(/^\/api\/users\/[\w-]+$/) &&
    req.method === "DELETE"
  ) {
    const userId = req.url.split("/")[3];
    deleteUserById(req, res, userId);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};
