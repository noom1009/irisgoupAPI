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
const bankControllers = require("../../controllers/bankControllers");

router.get(
  "/",
  bankControllers.getPageController,
  function (req, res, next) {}
);

router.get(
  "/:f_code",
  bankControllers.searchController,
  function (req, res, next) {}
);

router.post("/", bankControllers.saveController, function (req, res, next) {});
router.post(
  "/",
  bankControllers.updateController,
  function (req, res, next) {}
);

router.delete(
  "/:f_code",
  bankControllers.deleteController,
  function (req, res, next) {}
);

module.exports = router;
