const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const finLoan = require("../../schema/tblFinloan/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const FindownDB = db.FindownDB;
const Op = db.Sequelize.Op;

class FinDownModel {
  constructor({
    f_id = "",
    f_bobooking = "",
    f_dudate = "",
    f_downtime = "",
    f_downvalue = "",
    f_datepayment = "",
    f_status = "",
    f_filename = "",
    f_receiptno = "",
  }) {
    this.f_id = f_id;
    this.f_bobooking = f_bobooking;
    this.f_dudate = f_dudate;
    this.f_downtime = f_downtime;
    this.f_downvalue = f_downvalue;
    this.f_datepayment = f_datepayment;
    this.f_status = f_status;
    this.f_filename = f_filename;
    this.f_receiptno = f_receiptno;
  }
  saveAll() {
    const finDown = {
      f_bobooking: this.f_bobooking,
      f_dudate: this.f_dudate,
      f_downtime: this.f_downtime,
      f_downvalue: this.f_downvalue,
      f_datepayment: this.f_datepayment,
      f_status: this.f_status,
      f_filename: this.f_filename,
      f_receiptno: this.f_receiptno,
    };
    return FindownDB.create(finDown)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_id, sqlupdate) {
    return FindownDB.update(
      {
        f_bobooking: sqlupdate.f_bobooking,
        f_dudate: sqlupdate.f_dudate,
        f_downtime: sqlupdate.f_downtime,
        f_downvalue: sqlupdate.f_downvalue,
        f_datepayment: sqlupdate.f_datepayment,
        f_status: sqlupdate.f_status,
        f_filename: sqlupdate.f_filename,
        f_receiptno: sqlupdate.f_receiptno,
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
    return FindownDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_id) {
    return FindownDB.findByPk(f_id)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_id) {
    return FindownDB.destroy({
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
    return FindownDB.update(
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

module.exports = FinDownModel;
