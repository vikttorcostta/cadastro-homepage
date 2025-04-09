import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (CSS e JS)
app.use(express.static(path.join(__dirname, 'src/public')));

// Utiliza as rotas definidas
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
