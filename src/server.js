const express = require('express');
const prisma = require('./infrastructure/database/client');
const errorHandler = require('./api/middlewares/errorHandler');
const { configureLogger } = require('./api/middlewares/loggerMiddleware');
const routerGuido = require('../src/api/routes/guideRoutes')

async function main() {
  const app = express();
  app.use(express.json());
  // Carga el .env desde la raíz del proyecto
  require('dotenv').config();

  const env = process.env.NODE_ENV || 'development';
  configureLogger(app, env);

  app.use('/api', routerGuido);
  app.use(errorHandler);

  // Iniciar servidor
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });

  // Manejar cierre de Prisma
  process.on('beforeExit', async () => {
    await prisma.$disconnect();
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});