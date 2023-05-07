const server = require("./src/app.js");
const { conn } = require("./src/db.js");
//const { UploadData } = require("./src/controllers/uploadData");
const {addInformation} = require("./src/temp")

const PORT = require("./src/config").PORT || 3001 
const FORCE = true

conn.sync({ force: FORCE }).then(async () => {
  server.listen(PORT, async () => {
    if (FORCE) await addInformation()
    console.log(`%s listening at port → ${PORT}`);
  });
//  await UploadData();
});