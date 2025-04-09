import { Low, JSONFile } from 'lowdb';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const file = path.join(__dirname, '../../db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);


await db.read();
db.data = db.data || { users: [] };
await db.write();

const createUser = async (user) => {
  db.data.users.push(user);
  await db.write();
  return user;
};


const indexUsers = async () => {
  await db.read();
  return db.data?.users || [];
};


const updateUser = async (id, user) => {
  const index = db.data.users.findIndex(u => u.id === id);
  if (index !== -1) {
    db.data.users[index] = { ...db.data.users[index], ...user };
    await db.write();
    return db.data.users[index];
  }
  throw new Error('Usuário não encontrado');
};


const destroyUser = async (id) => {
  const index = db.data.users.findIndex(u => u.id === id);
  if (index !== -1) {
    db.data.users.splice(index, 1);
    await db.write();
    return true;
  }
  throw new Error('Usuário não encontrado');
};


export default { createUser, indexUsers, updateUser, destroyUser };
