const server = require("./src/app.js");
const { conn } = require("./src/db.js");
//const { UploadData } = require("./src/controllers/uploadData");
//const PORT = process.env.PORT || 3001;

conn.sync({ force: true }).then(async () => {
  server.listen(3001, () => {
    console.log(`%s listening at port → 3001`);
  });
//  await UploadData();
});