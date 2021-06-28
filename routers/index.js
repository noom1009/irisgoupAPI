const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const log = require("../middleware/logger");
const setting = require("../config/setting");
const env = require("../config/env");
const lang = require("../lang/langApp");
const pageRouter = require("./pages/index");

router.use("/", pageRouter);

module.exports = router;
