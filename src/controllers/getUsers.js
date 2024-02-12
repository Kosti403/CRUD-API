import { users } from "../storage/usersStorage";

export const getUsers = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};
