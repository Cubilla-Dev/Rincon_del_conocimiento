const express = require('express');
const { guideController } = require('../../config/dependencyContainer');
const upload = require('../middlewares/multer');
const { validate } = require('../middlewares/validationMiddleware');
const { z } = require('zod');

const routerGuido = express.Router();

// Schema de validación con Zod
const createGuideSchema = z.object({
  title: z.string().min(5, { message: "Título muy corto (mín. 5 caracteres)" }),
  isVerified: z.boolean().optional().default(false),
  steps: z.array(
    z.object({
      content: z.string().min(1, { message: "El contenido del paso no puede estar vacío" }),
      order: z.number().int().positive({ message: "El orden debe ser un número positivo" })
    })
  ).min(1, { message: "Debe haber al menos 1 paso" }),
  equipments: z.array(
    z.object({
      name: z.string().min(1, { message: "El nombre del equipo no puede estar vacío" })
    })
  ).min(1, { message: "Debe haber al menos 1 equipo" })
});


// routerGuido.post('/create_guide', guideController.createGuide);
// routerGuido.post(
//   '/create-with-images',
//   (req, res) => {
//     console.log('la data obternida es ', req.body)
//   }
//   // upload.array('images', 5), // 'images' es el nombre del campo y 5 es el máximo
//   // guideController.createGuideWithImages
// );
routerGuido.post(
  '/create-with-images',
  upload.array('images', 5),
  // validate(createGuideSchema), // Opcional: validación con Zod
  guideController.createGuideWithImages // Usa el controlador real
);
// routerGuido.get('/enlistar', GuideController.listGuides.bind());
// routerGuido.get('/:id_guide', GuideController.getGuideById.bind());

module.exports = routerGuido;