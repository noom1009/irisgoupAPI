const con = require("../../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const logs = require("log4js");
const path = require("path");
const app = express();
const md5 = require("md5");
const bcrypt = require("bcrypt");
const env = require("../../config/env");
const saltRounds = env.saltRounds;
const users = require("../../schema/tblAccount/auth");
const db = require("../index");
const log = require("../../middleware/logger");
const Sequelize = require("sequelize");
const AuthenDB = db.AuthenDB;
const Op = db.Sequelize.Op;

class authenModel {
  constructor({
    f_name = "",
    f_lastname = "",
    f_login_name = "",
    f_login_password = "",
    f_email = "",
    f_company = "",
    f_department = "",
    f_position = "",
    f_status = "",
    f_admin_status = "",
    f_pic = "",
    f_authentication = "",
  }) {
    this.f_name = f_name;
    this.f_lastname = f_lastname;
    this.f_login_name = f_login_name;
    this.f_login_password = f_login_password;
    this.f_email = f_email;
    this.f_company = f_company;
    this.f_department = f_department;
    this.f_position = f_position;
    this.f_status = f_status;
    this.f_admin_status = f_admin_status;
    this.f_pic = f_pic;
    this.f_authentication = f_authentication;
  }

  static findAll() {
    return AuthenDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        log.logger("warring", "505" + err.message || lang.readeDataError);
        console.log(err);
      });
  }

  static findByEmail({ f_email = "" }) {
    return AuthenDB.findAll({
      where: { f_email: 1 },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        log.logger("warring", "505" + err.message || lang.readeDataError);
        console.log(err);
        res.json({
          message: err.message || lang.readeDataError,
        });
      });
  }
}

module.exports = authenModel;
