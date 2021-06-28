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
const users = require("../../schema/tblAccount/index");
const db = require("../index");
const log = require("../../middleware/logger");
const Sequelize = require("sequelize");
const UserDB = db.UserDB;
const Op = db.Sequelize.Op;

class userModel {
  constructor({
    f_name = "",
    f_lastname = "",
    f_login_name = "",
    f_login_password = "",
    f_email = "",
    f_mobile = "",
    f_company = "",
    f_department = "",
    f_position = "",
    f_status = "",
    f_admin_status = "",
    f_dateupdate = "",
    f_datetime = "",
    f_temp = "",
    f_pic = "",
    f_authentication = "",
  }) {
    this.f_name = f_name;
    this.f_lastname = f_lastname;
    this.f_login_name = f_login_name;
    this.f_login_password = f_login_password;
    this.f_email = f_email;
    this.f_mobile = f_mobile;
    this.f_company = f_company;
    this.f_department = f_department;
    this.f_position = f_position;
    this.f_status = f_status;
    this.f_admin_status = f_admin_status;
    this.f_dateupdate = f_dateupdate;
    this.f_datetime = f_datetime;
    this.f_temp = f_temp;
    this.f_pic = f_pic;
    this.f_authentication = f_authentication;
  }
  createData() {
    const newData = {
      f_name: this.f_name,
      f_lastname: this.f_lastname,
      f_login_name: this.f_login_name,
      f_login_password: this.f_login_password,
      f_email: this.f_email,
      f_mobile: this.f_mobile,
      f_company: this.f_company,
      f_department: this.f_department,
      f_position: this.f_position,
      f_status: this.f_status,
      f_admin_status: this.f_admin_status,
      f_dateupdate: this.f_dateupdate,
      f_datetime: this.f_datetime,
      f_temp: this.f_temp,
      f_pic: this.f_pic,
      f_authentication: this.f_authentication,
    };
    return UserDB.create(newData)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findAll() {
    return UserDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        log.logger("warring", "505" + err.message || lang.readeDataError);
        console.log(err);
      });
  }

  static findByEmail({ f_email = "" }) {
    return UserDB.findAll({
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

module.exports = userModel;
