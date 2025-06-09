require('dotenv').config()

module.exports = {
    api: {
        port: process.env.PORT,
        cloud_api_secret: process.env.CLOUDINARY_API_SECRET,
        cloud_api_key: process.env.CLOUDINARY_API_KEY,
        cloud_api_name: process.env.CLOUDINARY_CLOUD_NAME,
    },
}