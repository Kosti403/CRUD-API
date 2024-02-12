import { parse } from "url";
import { usersController } from "../usersController.js";
import { parseBody } from "../utils.js";

export const handleRequest = async (req, res) => {
  const { pathname } = parse(req.url, true);

  if (pathname.startsWith("/api/users")) {
    await usersController(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Маршрут не найден" }));
  }
};
