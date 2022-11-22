var { Router } = require("express");
var router = Router();

const {
  createFeedback,
  feedbackById_Property,
  feedbackById_User,
} = require("../controllers/controller_feedback");

router.post("/feedback/createFeedback", createFeedback);
router.get("/feedback/property/:id_Property", feedbackById_Property);
router.get("/feedback/user/:id_User", feedbackById_User);

module.exports = router;
