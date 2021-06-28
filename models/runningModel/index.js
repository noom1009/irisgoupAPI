const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const running = require("../../schema/tblRunning/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const RunningDB = db.RunningDB;
const Op = db.Sequelize.Op;

class RunningModel {
  constructor({
    f_code = "",
    f_running_qutation = "",
    f_running_booking = "",
    f_running_contact = "",
    f_countdownBooking = "",
    f_countdownContact = "",
    f_running_receipt = "",
  }) {
    this.f_code = f_code;
    this.f_running_qutation = f_running_qutation;
    this.f_running_booking = f_running_booking;
    this.f_running_contact = f_running_contact;
    this.f_countdownBooking = f_countdownBooking;
    this.f_countdownContact = f_countdownContact;
    this.f_running_receipt = f_running_receipt;
  }
  saveAll() {
    const running = {
      f_running_qutation: this.f_running_qutation,
      f_running_booking: this.f_running_booking,
      f_running_contact: this.f_running_contact,
      f_countdownBooking: this.f_countdownBooking,
      f_countdownContact: this.f_countdownContact,
      f_running_receipt: this.f_running_receipt,
    };
    return RunningDB.create(running)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return RunningDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findone(f_code) {
    return RunningDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return RunningDB.update(
      {
        f_running_qutation: sqlupdate.f_running_qutation,
        f_running_booking: sqlupdate.f_running_booking,
        f_running_contact: sqlupdate.f_running_contact,
        f_countdownBooking: sqlupdate.f_countdownBooking,
        f_countdownContact: sqlupdate.f_countdownContact,
        f_running_receipt: sqlupdate.f_running_receipt,
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
    return RunningDB.destroy({
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
    return RunningDB.update(
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

module.exports = RunningModel;
