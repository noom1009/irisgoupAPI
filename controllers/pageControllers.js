var express = require("express");
var router = express.Router();
const axios = require("axios");
const cors = require("cors");
var app = express();
const log4js = require("log4js");
const log = log4js.getLogger();
const logger = require("morgan");
var session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var md5 = require("md5");
const nodemailer = require("nodemailer");
const db = require("../models/index");
const sequelize = db.sequelize;
const env = require("../config/env");
const setting = require("../config/setting");
const saltRounds = env.saltRounds;
const lang = require("../lang/langApp");
const con = require("../config/mysql");
let tsData = Date.now();
const moment = require("moment");
const momentTZ = require("moment-timezone");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const now = new Date();
const dateString = moment(now).tz("Asia/Bangkok").format("D/M/Y");
const dateFormat = moment(now).tz("Asia/Bangkok").format("YYYY-MM-DD hh:mm:ss");

exports.getPageController = async (req, res, next) => {
  res.json("Error");
};

exports.pageController = (req, res, next) => {};
