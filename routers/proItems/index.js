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
const proItemsControllers = require("../../controllers/proItemsControllers");

router.get(
  "/",
  proItemsControllers.getPageController,
  function (req, res, next) {}
);

router.get(
  "/:f_code",
  proItemsControllers.searchController,
  function (req, res, next) {}
);

router.post(
  "/",
  proItemsControllers.saveController,
  function (req, res, next) {}
);
router.post(
  "/",
  proItemsControllers.updateController,
  function (req, res, next) {}
);

router.delete(
  "/:f_code",
  proItemsControllers.deleteController,
  function (req, res, next) {}
);

module.exports = router;
