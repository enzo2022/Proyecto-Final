const cloudinary = require("./cloudinary")
const upload = require("./multer")

const url = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file)
    const data = await result
    return data.url
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = url