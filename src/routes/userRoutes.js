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

router.post('/register', userController.registerUser);
router.get('/index', userController.indexUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.destroyUser);

export default router;
