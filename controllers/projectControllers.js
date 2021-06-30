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

const projectModel = require("../models/projectModel/index");
const ProjectDB = db.ProjectDB;

exports.getPageController = (req, res, next) => {
  ProjectDB.findAll()
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
  const project = new projectModel({
    f_projectname: req.body.f_projectname,
    f_projectdetail: req.body.f_projectdetail,
    f_building: req.body.f_building,
    f_project: req.body.f_project,
    f_color: req.body.f_color,
    f_let: req.body.f_let,
    f_long: req.body.f_long,
    f_youtbue: req.body.f_youtbue,
    f_foor: req.body.f_foor,
    f_website: req.body.f_website,
    f_mobile: req.body.f_mobile,
    f_total: req.body.f_total,
    f_linenotify: req.body.f_linenotify,
    f_status: req.body.f_status,
    f_booking: req.body.f_booking,
    f_contact: req.body.f_contact,
    f_tranfer: req.body.f_tranfer,
    f_codelaw: req.body.f_codelaw,
  });
  project
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
  const f_codeproject = req.params.id;
  projectModel
    .update(f_codeproject, req.body)
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
  const f_codeproject = req.params.id;
  projectModel
    .finOne(f_codeproject)
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
  const f_codeproject = req.params.id;
  projectModel
    .delete(f_codeproject)
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

exports.projectController = (req, res, next) => {};
