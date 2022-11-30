const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { UploadData } = require("./src/controllers/uploadData");
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  server.listen(PORT || 3001, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
  //await UploadData();
});
