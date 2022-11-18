const multer = require("multer")
const path = require("path")

//¿Qué es Multer?
//Multer es un "middleware" de node. js para el manejo de multipart/form-data , el cuál es usado sobre todo para la subida de archivos
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if(ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg"){
            cb(new Error("File type is incorrect, must be png, jpg or jpeg"), false);
            return
        }
        cb(null, true)
    }
})
