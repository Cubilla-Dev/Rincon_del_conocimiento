class GuideController {
  constructor({ createGuideUseCase, createGuideWithImagesUseCase }) {
    this.createGuideUseCase = createGuideUseCase;
    this.createGuideWithImagesUseCase = createGuideWithImagesUseCase;
    
    // Bind solo de métodos existentes
    this.createGuide = this.createGuide.bind(this);
    this.createGuideWithImages = this.createGuideWithImages.bind(this);
  }

  // Método faltante
  async createGuide(req, res, next) {
    try {
      const { title, steps, equipments } = req.body;
      const guide = await this.createGuideUseCase.execute({
        title,
        steps,
        equipments,
      });
      res.status(201).json(guide);
    } catch (error) {
      next(error);
    }
  }
  
  async createGuideWithImages(req, res, next) {
    try {
      const { title, steps, equipments } = req.body;
      const files = req.files;

      if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No images provided' });
      }

      const guide = await this.createGuideWithImagesUseCase.execute(
        { title, steps: JSON.parse(steps), equipments: JSON.parse(equipments) },
        files
      );

      res.status(201).json(guide);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GuideController;