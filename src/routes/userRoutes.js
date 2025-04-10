import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userController from '../controllers/userController.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

router.post('/store', (req, res) => {
  res.sendFile('store.html', { root: path.join(__dirname, '../views') });
});

router.get('/index', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

router.patch('/update/:id', (req, res) => {
  res.sendFile('update.html', { root: path.join(__dirname, '../views') });
});

router.delete('/destroy/:id', (req, res) => {
  res.sendFile('delete.html', { root: path.join(__dirname, '../views') });
});

router.post('/register', userController.registerUser);
router.get('/index', userController.indexUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.destroyUser);

export default router;
