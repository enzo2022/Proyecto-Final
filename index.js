const server = require("./src/app.js");
const { conn } = require("./src/db.js");
//const { UploadData } = require("./src/controllers/uploadData");
const {addUsers, addProperties} = require("./src/temp")

const PORT = require("./src/config").PORT || 3001 
const FORCE = true

conn.sync({ force: FORCE }).then(async () => {
  server.listen(PORT, async () => {
    if (FORCE) {
      console.log(await addUsers())
      console.log(await addProperties())
    }
    console.log(`%s listening at port → ${PORT}`);
  });
//  await UploadData();
});