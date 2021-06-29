const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const path = require("path");
const session = require("express-session");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const crypto = require("crypto");
const env = require("../../config/env");
const setting = require("../../config/setting");
const lang = require("../../lang/langApp");
const runningControllers = require("../../controllers/runningControllers");

router.get(
  "/",
  runningControllers.getPageController,
  function (req, res, next) {}
);

module.exports = router;
