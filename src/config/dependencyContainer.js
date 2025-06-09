// src/config/dependencyContainer.js

const PrismaGuideRepository = require('../infrastructure/repositories/PrismaGuideRepository');
const CreateGuideUseCase = require('../core/use-cases/CreateGuideUseCase');
const GuideController = require('../api/controllers/GuideController')
//imagen
const CloudinaryService = require('../infrastructure/cloudinary/CloudinaryService');
const CreateGuideWithImagesUseCase = require('../core/use-cases/CreateGuideWithImagesUseCase')

// Instanciar dependencias
const guideRepository = new PrismaGuideRepository();
const createGuideUseCase = new CreateGuideUseCase(guideRepository);

//instancia de imagenes
const cloudinaryService = new CloudinaryService();

const createGuideWithImagesUseCase = new CreateGuideWithImagesUseCase(
  guideRepository,
  cloudinaryService
);
const guideController = new GuideController({
  createGuideUseCase,
  createGuideWithImagesUseCase
});

module.exports = {
  guideController,
};

