const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const fintranfer = require("../../schema/tblFintranfer/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const FintranferDB = db.FintranferDB;
const Op = db.Sequelize.Op;

class FinTranferModel {
  constructor({
    f_code = "",
    f_codeproject = "",
    f_projectname = "",
    f_detail = "",
    f_typehome = "",
  }) {
    this.f_code = f_code;
    this.f_codeproject = f_codeproject;
    this.f_projectname = f_projectname;
    this.f_detail = f_detail;
    this.f_typehome = f_typehome;
  }
  saveAll() {
    const fintranfer = {
      f_codeproject: this.f_codeproject,
      f_projectname: this.f_projectname,
      f_typehome: this.f_typehome,
      f_detail: this.f_detail,
    };
    return FintranferDB.create(fintranfer)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return FintranferDB.update(
      {
        f_codeproject: sqlupdate.f_codeproject,
        f_projectname: sqlupdate.f_projectname,
        f_typehome: sqlupdate.f_typehome,
        f_detail: sqlupdate.f_detail,
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
    return FintranferDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_code) {
    return FintranferDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_code) {
    return FintranferDB.destroy({
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
    return FintranferDB.update(
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

module.exports = FinTranferModel;
