import { v4 as uuidv4 } from 'uuid';
import { parseBody } from '../utils/parseBody.js';
import { users } from './usersStorage.js';

export const createUser = async (req, res) => {
  const body = await parseBody(req);
  const { username, age, hobbies } = body;
  if (!username || typeof age === 'undefined' || !Array.isArray(hobbies)) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Invalid user data' }));
    return;
  }
  const newUser = { id: uuidv4(), username, age, hobbies };
  users.push(newUser);
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(newUser));
};
