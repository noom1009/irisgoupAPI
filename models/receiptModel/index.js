const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const targetPlan = require("../../schema/tblReceipt/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const ReceiptDB = db.ReceiptDB;
const Op = db.Sequelize.Op;

class targetModel {
  constructor({
    f_id = "",
    f_bookingbo = "",
    f_status = "",
    f_bookingreceipt = "",
    f_contactreceipt = "",
    f_datebookingreceipt = "",
    f_datecontactreceipt = "",
  }) {
    this.f_id = f_id;
    this.f_bookingbo = f_bookingbo;
    this.f_status = f_status;
    this.f_bookingreceipt = f_bookingreceipt;
    this.f_contactreceipt = f_contactreceipt;
    this.f_datebookingreceipt = f_datebookingreceipt;
    this.f_datecontactreceipt = f_datecontactreceipt;
  }
  saveAll() {
    const receipt = {
      f_bookingbo: this.f_bookingbo,
      f_status: this.f_status,
      f_bookingreceipt: this.f_bookingreceipt,
      f_contactreceipt: this.f_contactreceipt,
      f_datebookingreceipt: this.f_datebookingreceipt,
      f_datecontactreceipt: this.f_datecontactreceipt,
    };
    return ReceiptDB.create(receipt)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_id, sqlupdate) {
    return ReceiptDB.update(
      {
        f_bookingbo: sqlupdate.f_bookingbo,
        f_status: sqlupdate.f_status,
        f_bookingreceipt: sqlupdate.f_bookingreceipt,
        f_contactreceipt: sqlupdate.f_contactreceipt,
        f_datebookingreceipt: sqlupdate.f_datebookingreceipt,
        f_datecontactreceipt: sqlupdate.f_datecontactreceipt,
      },
      { where: { f_id: f_id } }
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
    return ReceiptDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_id) {
    return ReceiptDB.findByPk(f_id)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_id) {
    return ReceiptDB.destroy({
      where: { f_id: f_id },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static approve(f_id) {
    return ReceiptDB.update(
      {
        f_status: 1,
      },
      {
        where: { f_id: f_id },
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

module.exports = targetModel;
