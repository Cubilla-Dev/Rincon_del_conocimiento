const CreateGuideDTO = require('../dtos/CreateGuideDTO');
const GuideResponseDTO = require('../dtos/GuideResponseDTO');

class CreateGuideUseCase  {
  constructor(guideRepository){
    this.guideRepository = guideRepository;
  }
  async execute(createGuideDTO){
    const dto = new CreateGuideDTO(createGuideDTO);
    const guide = await this.guideRepository.create(dto);
    return new GuideResponseDTO(guide);
  }
}

module.exports = CreateGuideUseCase;