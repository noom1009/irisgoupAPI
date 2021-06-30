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

const fintranferModel = require("../models/fintranferModel/index");
const FintranferDB = db.FintranferDB;

exports.getPageController = (req, res, next) => {
  FintranferDB.findAll()
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
  const FinTranfer = new fintranferModel({
    f_running: req.body.f_running,
    f_unit: req.body.f_unit,
    f_tranferdate: req.body.f_tranferdate,
    f_price: req.body.f_price,
    f_usertranfer1: req.body.f_usertranfer1,
    f_usertranfer2: req.body.f_usertranfer2,
    f_project: req.body.f_project,
    f_status: req.body.f_status,
  });
  FinTranfer.saveAll()
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
  const f_running = req.params.id;
  fintranferModel
    .update(f_running, req.body)
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
  const f_running = req.params.id;
  fintranferModel
    .finOne(f_running)
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
  const f_running = req.params.id;
  fintranferModel
    .delete(f_running)
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
exports.finTranferController = (req, res, next) => {};
