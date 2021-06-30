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
const finLoanModel = require("../models/finLoanModel/index");
const FinloanDB = db.FinloanDB;

exports.getPageController = (req, res, next) => {
  FinloanDB.findAll()
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
  const Finloan = new finLoanModel({
    f_running: req.body.f_running,
    f_unit: req.body.f_unit,
    f_customer: req.body.f_customer,
    f_contactstart: req.body.f_contactstart,
    f_dateapply: req.body.f_dateapply,
    f_bankshortname: req.body.f_bankshortname,
    f_bankname: req.body.f_bankname,
    f_bankstatus: req.body.f_bankstatus,
    f_grade: req.body.f_grade,
    f_reasonchange: req.body.f_reasonchange,
    f_dateupdate: req.body.f_dateupdate,
    f_period: req.body.f_period,
    f_dateapprove: req.body.f_dateapprove,
    f_loan: req.body.f_loan,
    f_loanapprove: req.body.f_loanapprove,
    f_reasonreject: req.body.f_reasonreject,
    f_reasoncancle: req.body.f_reasoncancle,
    f_daterecord: req.body.f_daterecord,
    f_userlogin: req.body.f_userlogin,
    f_project: req.body.f_project,
    f_status: req.body.f_status,
  });
  Finloan.saveAll()
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
  finLoanModel
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
  finLoanModel
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
  finLoanModel
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

exports.finLoanController = (req, res, next) => {};
