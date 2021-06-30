const con = require("../../config/mysql");
const db = require("../index");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const targetPlan = require("../../schema/tblGroup/index");
const Sequelize = require("sequelize");
const GroupUserDB = db.GroupUserDB;
const Op = db.Sequelize.Op;

class GroupUserModel {
  constructor({
    f_code = "",
    f_groupcode = "",
    f_goupname = "",
    f_status = "",
  }) {
    this.f_code = f_code;
    this.f_groupcode = f_groupcode;
    this.f_goupname = f_goupname;
    this.f_status = f_status;
  }
  saveAll() {
    const groupUser = {
      f_groupcode: this.f_groupcode,
      f_goupname: this.f_goupname,
      f_status: this.f_status,
    };
    return GroupUserDB.create(groupUser)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return GroupUserDB.update(
      {
        f_groupcode: sqlupdate.f_groupcode,
        f_goupname: sqlupdate.f_goupname,
        f_status: sqlupdate.f_status,
      },
      { where: { f_code: f_code } }
    )
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return GroupUserDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_code) {
    return GroupUserDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_code) {
    return GroupUserDB.destroy({
      where: { f_code: f_code },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static approve(f_code) {
    return GroupUserDB.update(
      {
        f_status: 1,
      },
      {
        where: { f_code: f_code },
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
}

module.exports = GroupUserModel;
