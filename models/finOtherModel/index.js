const con = require("../../config/mysql");
const db = require("../index");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const finOther = require("../../schema/tblFinother/index");
const Sequelize = require("sequelize");
const FinotherDB = db.FinotherDB;
const Op = db.Sequelize.Op;

class FinOtherModel {
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
    const finOther = {
      f_codeproject: this.f_codeproject,
      f_projectname: this.f_projectname,
      f_typehome: this.f_typehome,
      f_detail: this.f_detail,
    };
    return FinotherDB.create(finOther)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return FinotherDB.update(
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
    return FinotherDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_code) {
    return FinotherDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_code) {
    return FinotherDB.destroy({
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
    return FinotherDB.update(
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

module.exports = FinOtherModel;
