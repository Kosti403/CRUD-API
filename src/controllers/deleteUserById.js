import { users } from './usersStorage.js';

export const deleteUserById = async (req, res) => {
  const userId = req.url.split('/')[3];
  const index = users.findIndex(u => u.id === userId);
  if (index === -1) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User not found' }));
    return;
  }
  users.splice(index, 1);
  res.writeHead(204);
  res.end();
};
