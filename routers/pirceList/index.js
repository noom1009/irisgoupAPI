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
const priceListControllers = require("../../controllers/priceListControllers");

router.get(
  "/",
  priceListControllers.getPageController,
  function (req, res, next) {}
);

router.get(
  "/:f_code",
  priceListControllers.searchController,
  function (req, res, next) {}
);

router.post(
  "/",
  priceListControllers.saveController,
  function (req, res, next) {}
);
router.post(
  "/",
  priceListControllers.updateController,
  function (req, res, next) {}
);

router.delete(
  "/:f_code",
  priceListControllers.deleteController,
  function (req, res, next) {}
);

module.exports = router;
