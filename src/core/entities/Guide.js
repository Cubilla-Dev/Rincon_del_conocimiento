class Guide {
  constructor({id_guide, title, steps, images = [], equipments, isVerified = false}) {
    this.id_guide = id_guide;
    this.title = title;
    this.steps = steps;
    this.equipments = equipments;
    this.images = images || [];
    this.isVerified = isVerified;
  }

  isValid(){
    if(!this.title || this.title.length < 5) {
      return false;
    }
    if (!this.steps || this.steps.length === 0) {
      return false;
    }
    
    if (!this.equipments || this.steps.length === 0) {
      return false;
    }

    // Validación opcional para imágenes si lo necesitas
    // if (!this.images || this.images.length === 0) {
    //   return false;
    // }
    
    return true;
  }

  markAsVerified() {
    this.isVerified = true;
  }

  // Nuevos métodos para manejar imágenes
  addImage(image) {
    this.images.push(image);
  }

  removeImage(imageUrl) {
    this.images = this.images.filter(img => img.url !== imageUrl);
  }

  getPrimaryImage() {
    // Si decides implementar la opción con metadatos (isPrimary)
    return this.images.find(img => img.isPrimary) || this.images[0];
  }
}


module.exports = Guide;