class CreateGuideWithImagesUseCase {
  constructor(guideRepository, cloudinaryService) {
    this.guideRepository = guideRepository;
    this.cloudinaryService = cloudinaryService;
  }

  async execute(guideData, files) {
    // Subir imágenes a Cloudinary
    const imageUploads = files.map(file => 
      this.cloudinaryService.uploadImage(file.buffer)
    );
    
    const uploadedImages = await Promise.all(imageUploads);

    // Crear objeto de guía con las URLs de las imágenes
    const completeGuideData = {
      ...guideData,
      images: uploadedImages.map(image => ({
        url: image.secure_url
      }))
    };

    // Guardar en base de datos
    return await this.guideRepository.createWithImages(completeGuideData);
  }
}

module.exports = CreateGuideWithImagesUseCase;