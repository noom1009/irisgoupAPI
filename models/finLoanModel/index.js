const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const finLoan = require("../../schema/tblFinloan/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const FinloanDB = db.FinloanDB;
const Op = db.Sequelize.Op;

class FinloanModel {
  constructor({
    f_id = "",
    f_running = "",
    f_unit = "",
    f_customer = "",
    f_contactstart = "",
    f_dateapply = "",
    f_bankshortname = "",
    f_unit = "",
    f_bankname = "",
    f_bankstatus = "",
    f_grade = "",
    f_reasonchange = "",
    f_dateupdate = "",
    f_period = "",
    f_dateapprove = "",
    f_loan = "",
    f_loanapprove = "",
    f_reasonreject = "",
    f_reasoncancle = "",
    f_daterecord = "",
    f_userlogin = "",
    f_project = "",
    f_status = "",
  }) {
    this.f_id = f_id;
    this.f_running = f_running;
    this.f_unit = f_unit;
    this.f_customer = f_customer;
    this.f_contactstart = f_contactstart;
    this.f_dateapply = f_dateapply;
    this.f_bankshortname = f_bankshortname;
    this.f_unit = f_unit;
    this.f_bankname = f_bankname;
    this.f_bankstatus = f_bankstatus;
    this.f_grade = f_grade;
    this.f_reasonchange = f_reasonchange;
    this.f_dateupdate = f_dateupdate;
    this.f_period = f_period;
    this.f_dateapprove = f_dateapprove;
    this.f_loan = f_loan;
    this.f_loanapprove = f_loanapprove;
    this.f_reasonreject = f_reasonreject;
    this.f_reasoncancle = f_reasoncancle;
    this.f_daterecord = f_daterecord;
    this.f_userlogin = f_userlogin;
    this.f_project = f_project;
    this.f_status = f_status;
  }
  saveAll() {
    const finOther = {
      f_running: this.f_running,
      f_unit: this.f_unit,
      f_customer: this.f_customer,
      f_contactstart: this.f_contactstart,
      f_dateapply: this.f_dateapply,
      f_bankshortname: this.f_bankshortname,
      f_bankname: this.f_bankname,
      f_bankstatus: this.f_bankstatus,
      f_grade: this.f_grade,
      f_reasonchange: this.f_reasonchange,
      f_dateupdate: this.f_dateupdate,
      f_period: this.f_period,
      f_dateapprove: this.f_dateapprove,
      f_loan: this.f_loan,
      f_loanapprove: this.f_loanapprove,
      f_reasonreject: this.f_reasonreject,
      f_reasoncancle: this.f_reasoncancle,
      f_daterecord: this.f_daterecord,
      f_userlogin: this.f_userlogin,
      f_project: this.f_project,
      f_status: this.f_status,
    };
    return FinloanDB.create(finOther)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_id, sqlupdate) {
    return FinloanDB.update(
      {
        f_running: sqlupdate.f_running,
        f_unit: sqlupdate.f_unit,
        f_customer: sqlupdate.f_customer,
        f_contactstart: sqlupdate.f_contactstart,
        f_dateapply: sqlupdate.f_dateapply,
        f_bankshortname: sqlupdate.f_bankshortname,
        f_bankname: sqlupdate.f_bankname,
        f_bankstatus: sqlupdate.f_bankstatus,
        f_grade: sqlupdate.f_grade,
        f_reasonchange: sqlupdate.f_reasonchange,
        f_dateupdate: sqlupdate.f_dateupdate,
        f_period: sqlupdate.f_period,
        f_dateapprove: sqlupdate.f_dateapprove,
        f_loan: sqlupdate.f_loan,
        f_loanapprove: sqlupdate.f_loanapprove,
        f_reasonreject: sqlupdate.f_reasonreject,
        f_reasoncancle: sqlupdate.f_reasoncancle,
        f_daterecord: sqlupdate.f_daterecord,
        f_userlogin: sqlupdate.f_userlogin,
        f_project: sqlupdate.f_project,
        f_status: sqlupdate.f_status,
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
    return FinloanDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_id) {
    return FinloanDB.findByPk(f_id)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_id) {
    return FinloanDB.destroy({
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
    return FinloanDB.update(
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

module.exports = FinloanModel;
