const multer = require("multer")
const path = require("path")

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg") {
      cb(new Error("File type is incorrect, must be png, jpg or jpeg"), false);
      return
    }
    cb(null, true)
  }
})
