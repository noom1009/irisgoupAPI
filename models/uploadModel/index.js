const con = require("../../config/mysql");
const db = require("../index");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const uploads = require("../../schema/tblUpload/index");
const Sequelize = require("sequelize");
const UploadDB = db.UploadsDB;
const Op = db.Sequelize.Op;

class UploadModel {
  constructor({
    f_code = "",
    f_running = "",
    f_unit = "",
    f_userlogin = "",
    f_dataupload = "",
    f_fileupload = "",
    f_datesave = "",
    f_project = "",
    f_filetype = "",
    f_typeupload = "",
  }) {
    this.f_code = f_code;
    this.f_running = f_running;
    this.f_unit = f_unit;
    this.f_userlogin = f_userlogin;
    this.f_dataupload = f_dataupload;
    this.f_fileupload = f_fileupload;
    this.f_datesave = f_datesave;
    this.f_project = f_project;
    this.f_filetype = f_filetype;
    this.f_typeupload = f_typeupload;
  }
  saveAll() {
    const uploads = {
      f_running: this.f_running,
      f_unit: this.f_unit,
      f_userlogin: this.f_userlogin,
      f_dataupload: this.f_dataupload,
      f_fileupload: this.f_fileupload,
      f_datesave: this.f_datesave,
      f_project: this.f_project,
      f_filetype: this.f_filetype,
      f_typeupload: this.f_typeupload,
    };
    return UploadDB.create(uploads)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return UploadDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findone(f_code) {
    return UploadDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return UploadDB.update(
      {
        f_running: sqlupdate.f_running,
        f_unit: sqlupdate.f_unit,
        f_userlogin: sqlupdate.f_userlogin,
        f_dataupload: sqlupdate.f_dataupload,
        f_fileupload: sqlupdate.f_fileupload,
        f_datesave: sqlupdate.f_datesave,
        f_project: sqlupdate.f_project,
        f_filetype: sqlupdate.f_filetype,
        f_typeupload: sqlupdate.f_typeupload,
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
    return UploadDB.destroy({
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
    return UploadDB.update(
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

module.exports = UploadModel;
