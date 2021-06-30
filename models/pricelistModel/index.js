const con = require("../../config/mysql");
const db = require("../index");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const targetPlan = require("../../schema/tblPricelist/index");
const Sequelize = require("sequelize");
const PricelistDB = db.PricelistDB;
const Op = db.Sequelize.Op;

class PricelistModel {
  constructor({
    f_code = "",
    f_planno = "",
    f_unit = "",
    f_type = "",
    f_sq_wa = "",
    f_sq_m = "",
    f_price2 = "",
    f_pricemarkup2 = "",
    f_pricesum = "",
    f_countdowndate = "",
    f_price_promotion = "",
    f_booking = "",

    f_contact = "",
    f_downpayment = "",
    f_down = "",
    f_price_down = "",
    f_final_payment = "",
    f_project = "",
    f_version = "",
    f_status = "",
    f_discount = "",
    f_mg_discount = "",
    f_priceother = "",
    f_type_contact = "",
    f_is_balloon = "",
    f_balloonvalue = "",
  }) {
    this.f_code = f_code;
    this.f_planno = f_planno;
    this.f_unit = f_unit;
    this.f_type = f_type;
    this.f_sq_wa = f_sq_wa;
    this.f_sq_m = f_sq_m;
    this.f_price2 = f_price2;
    this.f_pricemarkup2 = f_pricemarkup2;
    this.f_pricesum = f_pricesum;
    this.f_countdowndate = f_countdowndate;
    this.f_price_promotion = f_price_promotion;
    this.f_booking = f_booking;
    this.f_contact = f_contact;
    this.f_downpayment = f_downpayment;
    this.f_down = f_down;
    this.f_price_down = f_price_down;
    this.f_final_payment = f_final_payment;
    this.f_project = f_project;
    this.f_version = f_version;
    this.f_status = f_status;
    this.f_discount = f_discount;
    this.f_mg_discount = f_mg_discount;
    this.f_priceother = f_priceother;
    this.f_type_contact = f_type_contact;
    this.f_is_balloon = f_is_balloon;
    this.f_balloonvalue = f_balloonvalue;
  }
  saveAll() {
    const pricelist = {
      f_planno: this.f_planno,
      f_unit: this.f_unit,
      f_type: this.f_type,
      f_sq_wa: this.f_sq_wa,
      f_sq_m: this.f_sq_m,
      f_price2: this.f_price2,
      f_pricemarkup2: this.f_pricemarkup2,
      f_pricesum: this.f_pricesum,
      f_countdowndate: this.f_countdowndate,
      f_price_promotion: this.f_price_promotion,
      f_booking: this.f_booking,
      f_contact: this.f_contact,
      f_downpayment: this.f_downpayment,
      f_down: this.f_down,
      f_price_down: this.f_price_down,
      f_final_payment: this.f_final_payment,
      f_project: this.f_project,
      f_version: this.f_version,
      f_status: this.f_status,
      f_discount: this.f_discount,
      f_mg_discount: this.f_mg_discount,
      f_priceother: this.f_priceother,
      f_type_contact: this.f_type_contact,
      f_is_balloon: this.f_is_balloon,
      f_balloonvalue: this.f_balloonvalue,
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
        f_planno: sqlupdate.f_planno,
        f_unit: sqlupdate.f_unit,
        f_type: sqlupdate.f_type,
        f_sq_wa: sqlupdate.f_sq_wa,
        f_sq_m: sqlupdate.f_sq_m,
        f_price2: sqlupdate.f_price2,
        f_pricemarkup2: sqlupdate.f_pricemarkup2,
        f_pricesum: sqlupdate.f_pricesum,
        f_price_promotion: sqlupdate.f_price_promotion,
        f_booking: sqlupdate.f_booking,
        f_contact: sqlupdate.f_contact,
        f_downpayment: sqlupdate.f_downpayment,
        f_down: sqlupdate.f_down,
        f_price_down: sqlupdate.f_price_down,
        f_final_payment: sqlupdate.f_final_payment,
        f_project: sqlupdate.f_project,
        f_version: sqlupdate.f_version,
        f_status: sqlupdate.f_status,
        f_discount: sqlupdate.f_discount,
        f_mg_discount: sqlupdate.f_mg_discount,
        f_priceother: sqlupdate.f_priceother,
        f_type_contact: sqlupdate.f_type_contact,
        f_is_balloon: sqlupdate.f_is_balloon,
        f_balloonvalue: sqlupdate.f_balloonvalue,
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
