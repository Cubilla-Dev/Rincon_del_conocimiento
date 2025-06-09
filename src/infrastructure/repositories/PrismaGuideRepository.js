const prisma = require('../database/client');
const Guide = require('../../core/entities/Guide');

class PrismaGuideRepository {
  async create(guideData) {
    const guide = await prisma.guide.create({
      data: {
        title: guideData.title,
        isVerified: guideData.isVerified || false,
        steps: {
          create: guideData.steps.map(step => ({
            content: step.content,
            order: step.order
          }))
        },
        equipments: {  // <-- ¡Nota el plural! (como en tu modelo)
          create: guideData.equipments.map(eq => ({
            name: eq.name
          }))
        }
      },
      include: {  // Incluye las relaciones para la respuesta
        steps: true,
        equipments: true
      }
    });
    
    return new Guide(guide);
  }

  async findById(id_guide) {
    const guide = await prisma.guide.findUnique({
      where: { id_guide },
      include: {steps: true, equipments: true}
    });
    
    return guide ? new Guide(guide) : null;
  }

  async findAll() {
    const guides = await prisma.guide.findMany({
      include: {  
        steps: true,
        equipments: true
      }
    });
    return guides.map(guide => new Guide(guide));
  }

    // async addImage(guideId, imageData) {
    //   const image = await prisma.image.create({
    //     data: {
    //       url: imageData.url,
    //       guideId: guideId,
    //     },
    //   });

    //   const guide = await prisma.guide.findUnique({
    //     where: { id_guide: guideId },
    //     include: { steps: true, equipments: true, images: true },
    //   });

    //   return new Guide(guide);
    // }

async createWithImages(guideData) {
  const { title, steps, equipments, images } = guideData;

  const guide = await prisma.guide.create({
    data: {
      title,
      steps: {
        create: steps.map(step => ({
          content: step.content,
          order: step.order
        }))
      },
      equipments: {
        create: equipments.map(equipment => ({
          name: equipment.name
        }))
      },
      images: {
        create: images.map(image => ({
          url: image.url
        }))
      }
    },
    include: {
      steps: true,
      equipments: true,
      images: true
    }
  });

    return new Guide(guide);
  }
}

module.exports = PrismaGuideRepository;