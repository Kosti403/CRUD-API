import { users } from './usersStorage.js';

export const getUserById = async (req, res) => {
  const userId = req.url.split('/')[3];
  const user = users.find(u => u.id === userId);
  if (!user) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
  }
};
