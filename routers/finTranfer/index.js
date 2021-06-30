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
const finTranferControllers = require("../../controllers/finTranferControllers");

router.get(
  "/",
  finTranferControllers.getPageController,
  function (req, res, next) {}
);

router.get(
  "/:f_code",
  finTranferControllers.searchController,
  function (req, res, next) {}
);

router.post(
  "/",
  finTranferControllers.saveController,
  function (req, res, next) {}
);
router.post(
  "/",
  finTranferControllers.updateController,
  function (req, res, next) {}
);

router.delete(
  "/:f_code",
  finTranferControllers.deleteController,
  function (req, res, next) {}
);
module.exports = router;
