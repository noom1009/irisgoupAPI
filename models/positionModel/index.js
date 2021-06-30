const con = require("../../config/mysql");
const db = require("../index");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const targetPlan = require("../../schema/tblPosition/index");
const Sequelize = require("sequelize");
const PositionDB = db.PositionDB;
const Op = db.Sequelize.Op;

class PositionModel {
  constructor({
    f_code = "",
    f_positionname = "",
    f_positioncode = "",
    f_mobileext = "",
    f_mgrcode = "",
    f_status = "",
  }) {
    this.f_code = f_code;
    this.f_positionname = f_positionname;
    this.f_positioncode = f_positioncode;
    this.f_mobileext = f_mobileext;
    this.f_mgrcode = f_mgrcode;
    this.f_status = f_status;
  }
  saveAll() {
    const position = {
      f_positionname: this.f_positionname,
      f_positioncode: this.f_positioncode,
      f_mobileext: this.f_mobileext,
      f_mgrcode: this.f_mgrcode,
      f_status: this.f_status,
    };
    return PositionDB.create(position)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return PositionDB.update(
      {
        f_positionname: sqlupdate.f_positionname,
        f_positioncode: sqlupdate.f_positioncode,
        f_mobileext: sqlupdate.f_mobileext,
        f_mgrcode: sqlupdate.f_mgrcode,
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
    return PositionDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_code) {
    return PositionDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_code) {
    return PositionDB.destroy({
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
    return PricelistDB.update(
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

module.exports = PositionModel;
