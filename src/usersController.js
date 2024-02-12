import { v4 as uuidv4 } from "uuid";
import { parseBody } from "../utils.js";

let users = [];

export const usersController = async (req, res) => {
  const { method, url } = req;
  const [, , , userId] = url.split("/");

  if (method === "GET" && url === "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else if (method === "GET" && userId) {
    const user = users.find((u) => u.id === userId);
    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Пользователь не найден" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    }
  } else if (method === "POST" && url === "/api/users") {
    const body = await parseBody(req);
    const newUser = { id: uuidv4(), ...body };
    users.push(newUser);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newUser));
  } else if (method === "PUT" && userId) {
    const body = await parseBody(req);
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Пользователь не найден" }));
    } else {
      users[index] = { ...users[index], ...body };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users[index]));
    }
  } else if (method === "DELETE" && userId) {
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Пользователь не найден" }));
    } else {
      users = users.filter((u) => u.id !== userId);
      res.writeHead(204);
      res.end();
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Метод не поддерживается" }));
  }
};
