const express = require("express");
const router = express.Router();

const subjectRouter = require("./routes/Subject");
const professorRouter = require("./routes/Professor");
const activityRouter = require("./routes/Activity");

router.use("/", subjectRouter);
router.use("/", professorRouter);
router.use("/", activityRouter);

module.exports = router;
