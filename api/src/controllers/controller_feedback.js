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
    var feedback = req.params.id;

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

const answerFeedback = async (req, res) => {
  const { id_Feedback, answer } = req.body;
  console.log(req.body, "ñaaa");
  try {
    let feedback = await Feedback.findByPk(id_Feedback);
    console.log("hermes");
    const newAnswerFeedback = await Feedback.update(req.body, {
      where: {
        id_Feedback: id_Feedback,
      },
    });
    console.log(newAnswerFeedback, "lola", id_Feedback, answer);
    if (newAnswerFeedback[0] === 0) throw new Error("Id inexistenteeee");
    res.status(200).send({ Message: feedback });
  } catch (err) {
    res.status(404).send({ Error: err.message });
  }
};

// const isBossFeedback = async (req, res, next) => {
//   const { id_User, id_Feedback } = req.body;
//   try {
//     let feetBackData = await Feedback.findByPk(id_Feedback);
//     // console.log(feetBackData, "la dataa");
//     let match = await Property.findByPk(feetBackData.id);

//     console.log(match.id_User, "la propiedad");
//     console.log(id_User, "el useer");
//     if (match.id_User === id_User) {
//       next();
//     }
//   } catch (err) {
//     return res.status(404).send({ Error: err.message });
//   }
// };

module.exports = {
  createFeedback,
  feedbackById_Property,
  feedbackById_User,
  answerFeedback,
};
