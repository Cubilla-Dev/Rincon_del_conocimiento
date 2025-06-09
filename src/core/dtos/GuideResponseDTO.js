class GuideResponseDTO {
    constructor(guide) {
      this.id_guide = guide.id_guide;
      this.title = guide.title;
      this.isVerified = guide.isVerified ?? false;
      this.createdAt = guide.createdAt;
      this.updatedAt = guide.updatedAt;
    // Para steps y equipments (asumiendo que son arrays de objetos)
      this.steps = guide.steps?.map(step => ({
        id: step.id_step,
        content: step.content,
        order: step.order
      })) || [];
      
      this.equipments = guide.equipments?.map(equipment => ({
        id: equipment.id_equipment,
        name: equipment.name
      })) || [];
  }
}

module.exports = GuideResponseDTO;