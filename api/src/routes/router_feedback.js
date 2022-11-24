var { Router } = require("express");
var router = Router();

const {
  createFeedback,
  feedbackById_Property,
  feedbackById_User,
  answerFeedback,
  // isBossFeedback,
} = require("../controllers/controller_feedback");

router.post("/feedback/createFeedback", createFeedback);
router.get("/feedback/property/:id_Property", feedbackById_Property);
router.get("/feedback/user/:id_User", feedbackById_User);
router.post("/feedback/answerFeedback", answerFeedback);

module.exports = router;
