const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const quotation = require("../../schema/tblquotation/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const QuotationDB = db.QuotationDB;
const Op = db.Sequelize.Op;

class quotationModel {
  constructor({
    f_code = "",
    f_running = "",
    f_type = "",
    f_project = "",
    f_unit = "",
    f_type = "",
    f_sq_m = "",
    f_sq_wa = "",
    f_downpayment = "",
    f_booking = "",
    f_contact = "",
    f_down = "",
    f_final_payment = "",
    f_promotion = "",
    f_groupcode = "",
    f_totalprice = "",
    f_bankname = "",
    f_number = "",
    f_branch = "",
    f_priceother = "",
    f_pricesum = "",
    f_datesave = "",
    f_userlogin = "",
    f_status = "",
    f_customername = "",
    f_customer_tel = "",
  }) {
    this.f_code = f_code;
    this.f_running = f_running;
    this.f_runningtype = f_runningtype;
    this.f_project = f_project;
    this.f_unit = f_unit;
    this.f_type = f_type;
    this.f_sq_m = f_sq_m;
    this.f_sq_wa = f_sq_wa;
    this.f_downpayment = f_downpayment;
    this.f_booking = f_booking;
    this.f_contact = f_contact;
    this.f_down = f_down;
    this.f_final_payment = f_final_payment;
    this.f_promotion = f_promotion;
    this.f_groupcode = f_groupcode;
    this.f_totalprice = f_totalprice;
    this.f_bankname = f_bankname;
    this.f_number = f_number;
    this.f_branch = f_branch;
    this.f_priceother = f_priceother;
    this.f_pricesum = f_pricesum;
    this.f_datesave = f_datesave;
    this.f_userlogin = f_userlogin;
    this.f_status = f_status;
    this.f_customername = f_customername;
    this.f_customer_tel = f_customer_tel;
  }
  saveAll() {
    const quotation = {
      f_running: this.f_running,
      f_runningtype: this.f_runningtype,
      f_project: this.f_project,
      f_unit: this.f_unit,
      f_type: this.f_type,
      f_sq_m: this.f_sq_m,
      f_sq_wa: this.f_sq_wa,
      f_downpayment: this.f_downpayment,
      f_booking: this.f_booking,
      f_contact: this.f_contact,
      f_down: this.f_down,
      f_final_payment: this.f_final_payment,
      f_promotion: this.f_promotion,
      f_groupcode: this.f_groupcode,
      f_totalprice: this.f_totalprice,
      f_bankname: this.f_bankname,
      f_number: this.f_number,
      f_branch: this.f_branch,
      f_priceother: this.f_priceother,
      f_pricesum: this.f_pricesum,
      f_datesave: this.f_datesave,
      f_userlogin: this.f_userlogin,
      f_status: this.f_status,
      f_customername: this.f_customername,
      f_customer_tel: this.f_customer_tel,
    };
    return QuotationDB.create(quotation)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return QuotationDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findone(f_code) {
    return QuotationDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return QuotationDB.update(
      {
        f_running: sqlupdate.f_running,
        f_runningtype: sqlupdate.f_runningtype,
        f_project: sqlupdate.f_project,
        f_unit: sqlupdate.f_unit,
        f_type: sqlupdate.f_type,
        f_sq_m: sqlupdate.f_sq_m,
        f_sq_wa: sqlupdate.f_sq_wa,
        f_downpayment: sqlupdate.f_downpayment,
        f_booking: sqlupdate.f_booking,
        f_contact: sqlupdate.f_contact,
        f_down: sqlupdate.f_down,
        f_final_payment: sqlupdate.f_final_payment,
        f_promotion: sqlupdate.f_promotion,
        f_groupcode: sqlupdate.f_groupcode,
        f_totalprice: sqlupdate.f_totalprice,
        f_bankname: sqlupdate.f_bankname,
        f_number: sqlupdate.f_number,
        f_branch: sqlupdate.f_branch,
        f_priceother: sqlupdate.f_priceother,
        f_pricesum: sqlupdate.f_pricesum,
        f_datesave: sqlupdate.f_datesave,
        f_userlogin: sqlupdate.f_userlogin,
        f_status: sqlupdate.f_status,
        f_customername: sqlupdate.f_customername,
        f_customer_tel: sqlupdate.f_customer_tel,
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
    return QuotationDB.destroy({
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
    return QuotationDB.update(
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

module.exports = quotationModel;
