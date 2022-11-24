const { User, Feedback, Property } = require("../db");

const createFeedback = async (req, res) => {
  try {
    var feedback = await Feedback.create(req.body);

    res.status(201).json({
      Message: "feedback creado",
      payload: feedback,
    });
  } catch (err) {
    res.status(401).json({ Error: err.message });
  }
};

const feedbackById_Property = async (req, res, next) => {
  console.log("holaaaa");
  try {
    var feedback = req.params.id_Property;

    if (feedback) {
      var sql = await Feedback.findByPk(feedback);
    }

    res.status(200).json(sql);
  } catch (error) {
    // Passes errors into the error handler
    return next(error);
  }
};

//

const feedbackById_User = async (req, res) => {
  console.log("holaaassssa");
  try {
    var id_user = req.params.id_User;

    if (id_user) {
      var answer = await Feedback.findAll();
    }

    res.status(200).json(answer);
  } catch (error) {
    // Passes errors into the error handler
    return next(error);
  }
};

module.exports = {
  createFeedback,
  feedbackById_Property,
  feedbackById_User,
};
