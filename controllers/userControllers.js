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

const userModel = require("../models/userModel/index");
const UsersDB = db.UsersDB;

exports.getPageController = (req, res, next) => {
  UsersDB.findAll()
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
  const Users = new userModel({
    f_name: req.body.f_name,
    f_lastname: req.body.f_lastname,
    f_login_name: req.body.f_login_name,
    f_login_password: req.body.f_login_password,
    f_hash_password: req.body.f_hash_password,
    f_salt_password: req.body.f_salt_password,
    f_email: req.body.f_email,
    f_mobile: req.body.f_mobile,
    f_lineid: req.body.f_lineid,
    f_company: req.body.f_company,
    f_department: req.body.f_department,
    f_position: req.body.f_position,
    f_dateupdate: req.body.f_dateupdate,
    f_usersupdate: req.body.f_usersupdate,
    f_pic: req.body.f_pic,
    f_status: req.body.f_status,
    f_admin_status: req.body.f_admin_status,
    f_accounttype: req.body.f_accounttype,
    f_activecode: req.body.f_activecode,
  });
  Users.saveAll()
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
  const f_acc_code = req.params.id;
  userModel
    .update(f_acc_code, req.body)
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
  const f_acc_code = req.params.id;
  userModel
    .finOne(f_acc_code)
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
  const f_acc_code = req.params.id;
  userModel
    .delete(f_acc_code)
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

exports.userController = (req, res, next) => {};
