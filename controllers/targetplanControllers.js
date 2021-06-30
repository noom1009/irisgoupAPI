const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
const app = express();
const log4js = require("log4js");
const log = log4js.getLogger();
const logger = require("morgan");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const nodemailer = require("nodemailer");
const db = require("../models/index");
const sequelize = db.sequelize;
const env = require("../config/env");
const setting = require("../config/setting");
const saltRounds = env.saltRounds;
const lang = require("../lang/langApp");

let tsData = Date.now();
const moment = require("moment");
const momentTZ = require("moment-timezone");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const now = new Date();
const dateString = moment(now).tz("Asia/Bangkok").format("D/M/Y");
const dateFormat = moment(now).tz("Asia/Bangkok").format("YYYY-MM-DD hh:mm:ss");

const targetModel = require("../models/targetModel/index");
const TargetDB = db.TargetDB;

exports.getPageController = (req, res, next) => {
  TargetDB.findAll()
    .then((result) => {
      res.status(201).json({
        data: result,
        message: lang.readeDatabase,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.saveController = (req, res, next) => {
  const Targetplan = new targetModel({
    f_year: req.body.f_year,
    f_month: req.body.f_month,
    f_project: req.body.f_project,
    f_unit: req.body.f_unit,
    f_value: req.body.f_value,
  });
  Targetplan.saveAll()
    .then((result) => {
      res.status(201).json({
        message: lang.readeDatabase,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error + ": " + lang.createDataError,
      });
    });
};

exports.updateController = (req, res, next) => {
  const f_id = req.params.id;
  targetModel
    .update(f_id, req.body)
    .then(function (result) {
      res.status(201).json({
        message: lang.readeDatabase,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err + ": " + lang.updateDataError + ": " + id,
      });
    });
};

exports.searchController = (req, res, next) => {
  const f_id = req.params.id;
  targetModel
    .finOne(f_id)
    .then((result) => {
      res.status(201).json({
        message: lang.readeDatabase,
        resultUsers: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.deleteController = (req, res, next) => {
  const f_id = req.params.id;
  targetModel
    .delete(f_id)
    .then(function (result) {
      res.status(201).json({
        message: lang.readeDatabase,
        resultUsers: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err + ": " + lang.updateDataError + ": " + id,
      });
    });
};
exports.targetPlanController = (req, res, next) => {};
