const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const department = require("../../schema/tblDepartment/index");
const db = require("../model/index");
const Sequelize = require("sequelize");
const DepartmentDB = db.DepartmentDB;
const Op = db.Sequelize.Op;

class DepartmentModel {
  constructor({
    f_code = "",
    f_departmentname = "",
    f_departmentcode = "",
    f_mobileext = "",
    f_mgrcode = "",
    f_status = "",
  }) {
    this.f_code = f_code;
    this.f_departmentname = f_departmentname;
    this.f_departmentcode = f_departmentcode;
    this.f_mobileext = f_mobileext;
    this.f_mgrcode = f_mgrcode;
    this.f_status = f_status;
  }
  saveAll() {
    const department = {
      f_departmentname: this.f_departmentname,
      f_departmentcode: this.f_departmentcode,
      f_mobileext: this.f_mobileext,
      f_mgrcode: this.f_mgrcode,
      f_status: this.f_status,
    };
    return DepartmentDB.create(department)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findUserAll() {
    return DepartmentDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findUserone(f_code) {
    return DepartmentDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return DepartmentDB.update(
      {
        f_companyname: sqlupdate.f_companyname,
        f_address: sqlupdate.f_address,
        f_tel: sqlupdate.f_tel,
        f_tax: sqlupdate.f_tax,
        f_let: sqlupdate.f_let,
        f_long: sqlupdate.f_long,
        f_website: sqlupdate.f_website,
        f_facebook: sqlupdate.f_facebook,
        f_youtube: sqlupdate.f_youtube,
        f_instagram: sqlupdate.f_instagram,
        f_twitter: sqlupdate.f_twitter,
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
    return DepartmentDB.destroy({
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
    return DepartmentDB.update(
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

module.exports = DepartmentModel;
