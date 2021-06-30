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

const quotationModel = require("../models/quotationModel/index");
const QuotationDB = db.QuotationDB;

exports.getPageController = (req, res, next) => {
  QuotationDB.findAll()
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
  const Quotation = new quotationModel({
    f_running: req.body.f_running,
    f_runningtype: req.body.f_runningtype,
    f_project: req.body.f_project,
    f_unit: req.body.f_unit,
    f_type: req.body.f_type,
    f_sq_m: req.body.f_sq_m,
    f_sq_wa: req.body.f_sq_wa,
    f_downpayment: req.body.f_downpayment,
    f_booking: req.body.f_booking,
    f_contact: req.body.f_contact,
    f_down: req.body.f_down,
    f_final_payment: req.body.f_final_payment,
    f_promotion: req.body.f_promotion,
    f_groupcode: req.body.f_groupcode,
    f_totalprice: req.body.f_totalprice,
    f_bankname: req.body.f_bankname,
    f_number: req.body.f_number,
    f_branch: req.body.f_branch,
    f_priceother: req.body.f_priceother,
    f_pricesum: req.body.f_pricesum,
    f_datesave: req.body.f_datesave,
    f_userlogin: req.body.f_userlogin,
    f_status: req.body.f_status,
    f_customername: req.body.f_customername,
    f_customer_tel: req.body.f_customer_tel,
  });
  Quotation.saveAll()
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
  quotationModel
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
  quotationModel
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
  quotationModel
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

exports.quotationController = (req, res, next) => {};
