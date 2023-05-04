const server = require("./src/app.js");
const { conn } = require("./src/db.js");
//const { UploadData } = require("./src/controllers/uploadData");
//const PORT = process.env.PORT || 3001;
const {addUsers, addProperties} = require("./src/temp")

conn.sync({ force: true }).then(async () => {
  server.listen(3001, async () => {
    console.log(await addUsers())
    console.log(await addProperties())
    console.log(`%s listening at port → 3001`);
  });
//  await UploadData();
});