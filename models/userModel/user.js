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
const users = require("../../schema/tblUser/index");
const db = require("../index");
const log = require("../../middleware/logger");
const Sequelize = require("sequelize");
const UsersDB = db.UsersDB;
const Op = db.Sequelize.Op;

class usersModel {
  constructor({
    f_name = "",
    f_lastname = "",
    f_login_name = "",
    f_login_password = "",
    f_hash_password = "",
    f_salt_password = "",
    f_email = "",
    f_mobile = "",
    f_lineid = "",
    f_company = "",
    f_department = "",
    f_position = "",
    f_dateupdate = "",
    f_usersupdate = "",
    f_pic = "",
    f_status = "",
    f_admin_status = "",
    f_accounttype = "",
    f_activecode = "",
  }) {
    this.f_name = f_name;
    this.f_lastname = f_lastname;
    this.f_login_name = f_login_name;
    this.f_login_password = f_login_password;
    this.f_hash_password = f_hash_password;
    this.f_salt_password = f_salt_password;
    this.f_email = f_email;
    this.f_mobile = f_mobile;
    this.f_lineid = f_lineid;
    this.f_status = f_status;
    this.f_company = f_company;
    this.f_department = f_department;
    this.f_position = f_position;
    this.f_dateupdate = f_dateupdate;
    this.f_usersupdate = f_usersupdate;
    this.f_pic = f_pic;
    this.f_status = f_status;
    this.f_admin_status = f_admin_status;
    this.f_accounttype = f_accounttype;
    this.f_activecode = f_activecode;
  }
  createData() {
    const newData = {
      f_name: this.f_name,
      f_lastname: this.f_lastname,
      f_login_name: this.f_login_name,
      f_login_password: this.f_login_password,
      f_hash_password: this.f_hash_password,
      f_salt_password: this.f_salt_password,
      f_email: this.f_email,
      f_mobile: this.f_mobile,
      f_lineid: this.f_lineid,
      f_company: this.f_company,
      f_department: this.f_department,
      f_position: this.f_position,
      f_dateupdate: this.f_dateupdate,
      f_usersupdate: this.f_usersupdate,
      f_pic: this.f_pic,
      f_status: this.f_status,
      f_admin_status: this.f_admin_status,
      f_accounttype: this.f_accounttype,
      f_activecode: this.f_activecode,
    };
    return UsersDB.create(newData)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findAll() {
    return UsersDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        log.logger("warring", "505" + err.message || lang.readeDataError);
        console.log(err);
      });
  }

  static findByEmail({ f_login_name = "" }) {
    return UsersDB.findOne({
      where: { f_login_name: f_login_name, f_status: "1" },
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

  static findcountUsers() {
    return UsersDB.findAndCountAll({
      where: {
        f_status: 0,
      },
    })
      .then((result) => {
        console.log(result.count);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteUsers(f_acc_id) {
    return UsersDB.destroy({
      where: { f_acc_id: f_acc_id },
    })
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static approveUsers(f_acc_id) {
    return UsersDB.update(
      {
        f_status: 1,
      },
      {
        where: { f_acc_id: f_acc_id },
      }
    )
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findUserone(f_acc_id) {
    return UsersDB.findByPk(f_acc_id)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static updateUsers(f_acc_id, sqlupdate) {
    return UsersDB.update(
      {
        f_name: sqlupdate.f_name,
        f_lastname: sqlupdate.f_lastname,
        f_login_name: sqlupdate.f_login_name,
        f_status: sqlupdate.f_status,
        f_admin_status: sqlupdate.f_admin_status,
        f_accounttype: sqlupdate.f_accounttype,
      },
      { where: { f_acc_id: f_acc_id } }
    )
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = usersModel;
