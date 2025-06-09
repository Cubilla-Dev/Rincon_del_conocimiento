// infrastructure/cloudinary/CloudinaryService.js
const cloudinary = require('cloudinary').v2;
const config = require('../../config/env.config')

class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: config.api.cloud_api_name,
      api_key: config.api.cloud_api_key,
      api_secret: config.api.cloud_api_secret,
    });
  }

  async uploadImage(fileBuffer, folder = 'guides') {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder, resource_type: 'auto' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(fileBuffer);
    });
  }
}

module.exports = CloudinaryService;