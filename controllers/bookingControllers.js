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
const bookingModel = require("../models/bookingModel/index");
const BookingDB = db.BookingDB;

exports.getPageController = (req, res, next) => {
  BookingDB.findAll()
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
  const Booking = new bookingModel({
    f_running: req.body.f_running,
    f_customer: req.body.f_customer,
    f_mobile: req.body.f_mobile,
    f_cardid: req.body.f_cardid,
    f_birthdate: req.body.f_birthdate,
    f_address: req.body.f_address,
    f_mail_address: req.body.f_mail_address,
    f_email: req.body.f_email,
    f_line: req.body.f_line,
    f_nation: req.body.f_nation,
    f_gent: req.body.f_gent,
    f_bud: req.body.f_bud,
    f_promotion: req.body.f_promotion,
    f_groupcode: req.body.f_groupcode,
    f_totalprice: req.body.f_totalprice,
    f_bankname: req.body.f_bankname,
    f_name: req.body.f_name,
    f_number: req.body.f_number,
    f_branch: req.body.f_branch,
    f_bookingdate: req.body.f_bookingdate,
    f_pricesum: req.body.f_pricesum,
    f_status: req.body.f_status,
    f_userlogin: req.body.f_userlogin,
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
    f_datesave: req.body.f_datesave,
    f_cashdiscount: req.body.f_cashdiscount,
    f_type_contact: req.body.f_type_contact,
    f_contactnumber: req.body.f_contactnumber,
    f_ref: req.body.f_ref,
    f_grade: req.body.f_grade,
    f_datetranfer: req.body.f_datetranfer,
    f_datecancle: req.body.f_datecancle,
    f_contacetranfer: req.body.f_contacetranfer,
    f_datefollow: req.body.f_datefollow,
    f_datecancletimestamp: req.body.f_datecancletimestamp,
    f_contacetranfertimestamp: req.body.f_contacetranfertimestamp,
  });
  Booking.saveAll()
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
  bookingModel
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
  bookingModel
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
  bookingModel
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

exports.bookingController = (req, res, next) => {};
