import { parseBody } from "../utils/parseBody.js";
import { users } from "./usersStorage.js";

export const updateUserById = async (req, res) => {
  const userId = req.url.split("/")[3];
  const body = await parseBody(req);
  const index = users.findIndex((u) => u.id === userId);
  if (index === -1) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User not found" }));
    return;
  }
  users[index] = { ...users[index], ...body };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users[index]));
};
