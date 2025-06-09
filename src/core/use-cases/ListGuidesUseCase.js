const GuideResponseDTO = require('../dtos/GuideResponseDTO');

class ListGuidesUseCase {
  constructor(guideRepository) {
    this.guideRepository = guideRepository;
  }

  async execute() {
    const guides = await this.guideRepository.findAll();
    return guides.map(guide => new GuideResponseDTO(guide));
  }
}

module.exports = ListGuidesUseCase;
