const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const targetPlan = require("../../schema/tblTargetplan/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const TargetDB = db.TargetDB;
const Op = db.Sequelize.Op;

class targetModel {
  constructor({
    f_id = "",
    f_projectname = "",
    f_month = "",
    f_target = "",
    f_year = "",
    f_status = "",
  }) {
    this.f_id = f_id;
    this.f_projectname = f_projectname;
    this.f_month = f_month;
    this.f_target = f_target;
    this.f_year = f_year;
    this.f_status = f_status;
  }
  saveAll() {
    const targetPlan = {
      f_projectname: this.f_projectname,
      f_month: this.f_month,
      f_target: this.f_target,
      f_year: this.f_year,
      f_status: this.f_status,
    };
    return TargetDB.create(targetPlan)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_id, sqlupdate) {
    return TargetDB.update(
      {
        f_projectname: sqlupdate.f_projectname,
        f_month: sqlupdate.f_month,
        f_target: sqlupdate.f_target,
        f_year: sqlupdate.f_year,
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
    return TargetDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findOne(f_id) {
    return TargetDB.findByPk(f_id)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_id) {
    return TargetDB.destroy({
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
    return TargetDB.update(
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
