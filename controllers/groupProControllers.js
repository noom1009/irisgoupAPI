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

const groupProModel = require("../models/groupProModel/index");
const GroupProDB = db.GroupProDB;

exports.getPageController = (req, res, next) => {
  GroupProDB.findAll()
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
  const groupPro = new groupProModel({
    f_groupcode: req.body.f_groupcode,
    f_procode: req.body.f_procode,
    f_project: req.body.f_project,
    f_promotion: req.body.f_promotion,
    f_promotiondetail: req.body.f_promotiondetail,
    f_startdate: req.body.f_startdate,
    f_enddate: req.body.f_enddate,
    f_status: req.body.f_status,
    f_countdowndate: req.body.f_countdowndate,
    f_type: req.body.f_type,
    f_pricepor: req.body.f_pricepor,
  });
  groupPro
    .saveAll()
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
  const f_code = req.params.id;
  groupProModel
    .update(f_code, req.body)
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
  const f_code = req.params.id;
  groupProModel
    .finOne(f_code)
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
  const f_code = req.params.id;
  groupProModel
    .delete(f_code)
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

exports.groupProController = (req, res, next) => {};
