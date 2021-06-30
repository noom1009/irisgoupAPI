const con = require("../../config/mysql");
const db = require("../index");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const fintranfer = require("../../schema/tblFintranfer/index");
const Sequelize = require("sequelize");
const FintranferDB = db.FintranferDB;
const Op = db.Sequelize.Op;

class FinTranferModel {
  constructor({
    f_running = "",
    f_unit = "",
    f_tranferdate = "",
    f_price = "",
    f_usertranfer1 = "",
    f_usertranfer2 = "",
    f_project = "",
    f_status = "",
  }) {
    this.f_running = f_running;
    this.f_unit = f_unit;
    this.f_tranferdate = f_tranferdate;
    this.f_price = f_price;
    this.f_usertranfer1 = f_usertranfer1;
    this.f_usertranfer2 = f_usertranfer2;
    this.f_project = f_project;
    this.f_status = f_status;
  }
  saveAll() {
    const fintranfer = {
      f_running: this.f_running,
      f_unit: this.f_unit,
      f_tranferdate: this.f_tranferdate,
      f_price: this.f_price,
      f_usertranfer1: this.f_usertranfer1,
      f_usertranfer2: this.f_usertranfer2,
      f_project: this.f_project,
      f_status: this.f_status,
    };
    return FintranferDB.create(fintranfer)
      .then((result) => {
        //    console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_running, sqlupdate) {
    return FintranferDB.update(
      {
        f_running: sqlupdate.f_running,
        f_unit: sqlupdate.f_unit,
        f_tranferdate: sqlupdate.f_tranferdate,
        f_price: sqlupdate.f_price,
        f_usertranfer1: sqlupdate.f_usertranfer1,
        f_usertranfer2: sqlupdate.f_usertranfer2,
        f_project: sqlupdate.f_project,
        f_status: sqlupdate.f_status,
      },
      { where: { f_running: f_running } }
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
  static findOne(f_running) {
    return FintranferDB.findByPk(f_running)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_running) {
    return FintranferDB.destroy({
      where: { f_running: f_running },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static approve(f_running) {
    return FintranferDB.update(
      {
        f_status: 1,
      },
      {
        where: { f_running: f_running },
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
