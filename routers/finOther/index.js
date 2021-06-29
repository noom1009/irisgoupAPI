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
const finOtherControllers = require("../../controllers/finOtherControllers");

router.get(
  "/",
  finOtherControllers.getPageController,
  function (req, res, next) {}
);

router.post(
  "/",
  finOtherControllers.getPageController,
  function (req, res, next) {}
);

module.exports = router;
