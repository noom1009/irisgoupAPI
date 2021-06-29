const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const targetPlan = require("../../schema/tblPricelist/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const PricelistDB = db.PricelistDB;
const Op = db.Sequelize.Op;

class PricelistModel {
  constructor({
    f_code = "",
    f_groupcode = "",
    f_procode = "",
    f_project = "",
    f_promotion = "",
    f_promotiondetail = "",
    f_startdate = "",
    f_enddate = "",
    f_status = "",
    f_countdowndate = "",
    f_type = "",
    f_pricepor = "",
  }) {
    this.f_code = f_code;
    this.f_groupcode = f_groupcode;
    this.f_procode = f_procode;
    this.f_project = f_project;
    this.f_promotion = f_promotion;
    this.f_promotiondetail = f_promotiondetail;
    this.f_startdate = f_startdate;
    this.f_enddate = f_enddate;
    this.f_status = f_status;
    this.f_countdowndate = f_countdowndate;
    this.f_type = f_type;
    this.f_pricepor = f_pricepor;
  }
  saveAll() {
    const pricelist = {
      f_groupcode: this.f_groupcode,
      f_procode: this.f_procode,
      f_project: this.f_project,
      f_promotion: this.f_promotion,
      f_promotiondetail: this.f_promotiondetail,
      f_startdate: this.f_startdate,
      f_enddate: this.f_enddate,
      f_status: this.f_status,
      f_countdowndate: this.f_countdowndate,
      f_type: this.f_type,
      f_pricepor: this.f_pricepor,
    };
    return PricelistDB.create(pricelist)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return PricelistDB.update(
      {
        f_groupcode: sqlupdate.f_groupcode,
        f_procode: sqlupdate.f_procode,
        f_project: sqlupdate.f_project,
        f_promotion: sqlupdate.f_promotion,
        f_promotiondetail: sqlupdate.f_promotiondetail,
        f_enddate: sqlupdate.f_enddate,
        f_status: sqlupdate.f_status,
        f_countdowndate: sqlupdate.f_countdowndate,
        f_type: sqlupdate.f_type,
        f_pricepor: sqlupdate.f_pricepor,
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
    return PricelistDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_code) {
    return PricelistDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_code) {
    return PricelistDB.destroy({
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

module.exports = PricelistModel;
