const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const bank = require("../../schema/tblBank/index");
const db = require("../model/index");
const Sequelize = require("sequelize");
const BankDB = db.BankDB;
const Op = db.Sequelize.Op;

class BankModel {
  constructor({
    f_code = "",
    f_bankname = "",
    f_branch = "",
    f_name = "",
    f_number = "",
    f_codebank = "",
    f_logo = "",
    f_status = "",
    f_defalut = "",
  }) {
    this.f_code = f_code;
    this.f_bankname = f_bankname;
    this.f_branch = f_branch;
    this.f_name = f_name;
    this.f_number = f_number;
    this.f_codebank = f_codebank;
    this.f_logo = f_logo;
    this.f_status = f_status;
    this.f_defalut = f_defalut;
  }
  saveAll() {
    const bank = {
      f_bankname: this.f_bankname,
      f_branch: this.f_branch,
      f_name: this.f_name,
      f_number: this.f_number,
      f_codebank: this.f_codebank,
      f_logo: this.f_logo,
      f_status: this.f_status,
      f_defalut: this.f_defalut,
    };
    return BankDB.create(bank)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return BankDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findone(f_code) {
    return BankDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return BankDB.update(
      {
        f_bankname: sqlupdate.f_bankname,
        f_branch: sqlupdate.f_branch,
        f_name: sqlupdate.f_name,
        f_number: sqlupdate.f_number,
        f_codebank: sqlupdate.f_codebank,
        f_logo: sqlupdate.f_logo,
        f_status: sqlupdate.f_status,
        f_defalut: sqlupdate.f_defalut,
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

  static delete(f_code) {
    return BankDB.destroy({
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
    return BankDB.update(
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

module.exports = BankModel;
