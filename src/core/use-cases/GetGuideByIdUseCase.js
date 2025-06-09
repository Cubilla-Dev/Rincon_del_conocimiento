const GuideResponseDTO = require('../dtos/GuideResponseDTO');

class GetGuideByIdUseCase {
  constructor(guideRepository) {
    this.guideRepository = guideRepository;
  }

  async execute(id_guide) {
    const guide = await this.guideRepository.findById(id_guide);
    if (!guide) {
      throw new Error('Guide not found');
    }
    return new GuideResponseDTO(guide);
  }
}

module.exports = GetGuideByIdUseCase;