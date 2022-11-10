const { Router } = require("express");

const router = Router()

router.post('/image', async (req, res, next) => {

  const { url } = req.body
  res.send('ok image')
  // try {
  //   if (!url) return res.status(404).send("no image to upload");
  // 
  //   res.send("image upload successful");
  // } catch (error) {
  //   next(error);
  // }



})
module.exports = router