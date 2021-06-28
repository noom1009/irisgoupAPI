const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const roomPlan = require("../../schema/tblRoomplan/index");
const db = require("../models/index");
const Sequelize = require("sequelize");
const RoomplanDB = db.RoomplanDB;
const Op = db.Sequelize.Op;

class roomPlanModel {
  constructor({
    f_code = "",
    f_unit = "",
    f_type = "",
    f_project = "",
    f_font = "",
    f_confont = "",
    f_color = "",
    f_grade = "",
    f_status = "",
  }) {
    this.f_code = f_code;
    this.f_unit = f_unit;
    this.f_type = f_type;
    this.f_project = f_project;
    this.f_font = f_font;
    this.f_confont = f_confont;
    this.f_color = f_color;
    this.f_grade = f_grade;
    this.f_status = f_status;
  }
  saveAll() {
    const roomPlan = {
      f_unit: this.f_unit,
      f_type: this.f_type,
      f_project: this.f_project,
      f_font: this.f_font,
      f_confont: this.f_confont,
      f_color: this.f_color,
      f_grade: this.f_grade,
      f_status: this.f_status,
    };
    return RoomplanDB.create(roomPlan)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return RoomplanDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findone(f_code) {
    return RoomplanDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return RoomplanDB.update(
      {
        f_unit: sqlupdate.f_unit,
        f_type: sqlupdate.f_type,
        f_project: sqlupdate.f_project,
        f_font: sqlupdate.f_font,
        f_confont: sqlupdate.f_confont,
        f_color: sqlupdate.f_color,
        f_grade: sqlupdate.f_grade,
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

  static delete(f_code) {
    return RoomplanDB.destroy({
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
    return RoomplanDB.update(
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

module.exports = roomPlanModel;
