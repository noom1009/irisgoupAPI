const con = require("../../config/mysql");
const db = require("../index");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const project = require("../../schema/tblProject/index");
const Sequelize = require("sequelize");
const ProjectDB = db.ProjectDB;
const Op = db.Sequelize.Op;

class projectModel {
  constructor({
    f_codeproject = "",
    f_projectname = "",
    f_projectdetail = "",
    f_building = "",
    f_project = "",
    f_color = "",
    f_let = "",
    f_long = "",
    f_youtbue = "",
    f_foor = "",
    f_website = "",
    f_mobile = "",
    f_total = "",
    f_linenotify = "",
    f_status = "",
    f_booking = "",
    f_contact = "",
    f_tranfer = "",
    f_codelaw = "",
  }) {
    this.f_codeproject = f_codeproject;
    this.f_projectname = f_projectname;
    this.f_projectdetail = f_projectdetail;
    this.f_building = f_building;
    this.f_project = f_project;
    this.f_color = f_color;
    this.f_let = f_let;
    this.f_long = f_long;
    this.f_youtbue = f_youtbue;
    this.f_foor = f_foor;
    this.f_website = f_website;
    this.f_mobile = f_mobile;
    this.f_total = f_total;
    this.f_linenotify = f_linenotify;
    this.f_status = f_status;
    this.f_booking = f_booking;
    this.f_contact = f_contact;
    this.f_tranfer = f_tranfer;
    this.f_codelaw = f_codelaw;
  }
  saveAll() {
    const items = {
      f_projectname: this.f_projectname,
      f_projectdetail: this.f_projectdetail,
      f_building: this.f_building,
      f_project: this.f_project,
      f_color: this.f_color,
      f_let: this.f_let,
      f_long: this.f_long,
      f_youtbue: this.f_youtbue,
      f_foor: this.f_foor,
      f_website: this.f_website,
      f_mobile: this.f_mobile,
      f_total: this.f_total,
      f_linenotify: this.f_linenotify,
      f_status: this.f_status,
      f_booking: this.f_booking,
      f_contact: this.f_contact,
      f_tranfer: this.f_tranfer,
      f_codelaw: this.f_codelaw,
    };
    return ProjectDB.create(items)
      .then((result) => {
        //  console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_codeproject, sqlupdate) {
    return ProjectDB.update(
      {
        f_projectname: sqlupdate.f_projectname,
        f_projectdetail: sqlupdate.f_projectdetail,
        f_building: sqlupdate.f_building,
        f_project: sqlupdate.f_project,
        f_color: sqlupdate.f_color,
        f_let: sqlupdate.f_let,
        f_long: sqlupdate.f_long,
        f_youtbue: sqlupdate.f_youtbue,
        f_foor: sqlupdate.f_foor,
        f_mobile: sqlupdate.f_mobile,
        f_total: sqlupdate.f_total,
        f_linenotify: sqlupdate.f_linenotify,
        f_status: sqlupdate.f_status,
        f_booking: sqlupdate.f_booking,
        f_contact: sqlupdate.f_contact,
        f_tranfer: sqlupdate.f_tranfer,
        f_codelaw: sqlupdate.f_codelaw,
      },
      { where: { f_codeproject: f_codeproject } }
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return ProjectDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findone(f_codeproject) {
    return ProjectDB.findByPk(f_codeproject)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_codeproject) {
    return ProjectDB.destroy({
      where: { f_codeproject: f_codeproject },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static approve(f_codeproject) {
    return ProjectDB.update(
      {
        f_status: 1,
      },
      {
        where: { f_codeproject: f_codeproject },
      }
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = projectModel;
