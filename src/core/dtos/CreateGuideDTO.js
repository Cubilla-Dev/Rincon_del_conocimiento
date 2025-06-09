class CreateGuideDTO {
  constructor({ title, steps, equipments, isVerified }) {
    this.title = title;
    this.steps = steps;
    this.equipments = equipments;
    this.isVerified = isVerified ?? false;
    
    this.validate();
  }
  validate(){
    // Validación de título
    if (!this.title || this.title.length < 5) {
      throw new Error('Title must be at least 5 characters long');
    }
    
    // Validación de steps (array de objetos)
    if (!this.steps || !Array.isArray(this.steps)) {
      throw new Error('Steps must be an array');
    }
    
    this.steps.forEach(step => {
      if (!step.content || typeof step.content !== 'string') {
        throw new Error('Each step must have a content string');
      }
      if (!step.order || typeof step.order !== 'number') {
        throw new Error('Each step must have an order number');
      }
    });
    
    // Validación de equipments (array de objetos)
    if (!this.equipments || !Array.isArray(this.equipments)) {
      throw new Error('Equipments is required and must be an array');
    }
    
    this.equipments.forEach(equipment => {
      if (!equipment.name || typeof equipment.name !== 'string') {
        throw new Error('Each equipment must have a name string');
      }
    });
  }
}

module.exports = CreateGuideDTO;