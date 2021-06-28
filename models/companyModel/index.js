const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const company = require("../../schema/tblCompany/index");
const db = require("../model/index");
const Sequelize = require("sequelize");
const CompanyDB = db.CompanyDB;
const Op = db.Sequelize.Op;

class CompanyModel {
  constructor({
    f_companycode = "",
    f_companyname = "",
    f_address = "",
    f_tel = "",
    f_tax = "",
    f_let = "",
    f_long = "",
    f_website = "",
    f_facebook = "",
    f_youtube = "",
    f_instagram = "",
    f_twitter = "",
    f_status = "",
    f_logo = "",
  }) {
    this.f_companycode = f_companycode;
    this.f_companyname = f_companyname;
    this.f_address = f_address;
    this.f_tel = f_tel;
    this.f_tax = f_tax;
    this.f_let = f_let;
    this.f_long = f_long;
    this.f_website = f_website;
    this.f_facebook = f_facebook;
    this.f_youtube = f_youtube;
    this.f_instagram = f_instagram;
    this.f_twitter = f_twitter;
    this.f_status = f_status;
    this.f_logo = f_logo;
  }
  saveAll() {
    const company = {
      f_companyname: this.f_companyname,
      f_address: this.f_address,
      f_tel: this.f_tel,
      f_tax: this.f_tax,
      f_let: this.f_let,
      f_long: this.f_long,
      f_website: this.f_website,
      f_facebook: this.f_facebook,
      f_youtube: this.f_youtube,
      f_instagram: this.f_instagram,
      f_twitter: this.f_twitter,
      f_status: this.f_status,
    };
    return CompanyDB.create(company)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findUserAll() {
    return CompanyDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findUserone(f_companycode) {
    return CompanyDB.findByPk(f_companycode)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_companycode, sqlupdate) {
    return CompanyDB.update(
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
      { where: { f_companycode: f_code } }
    )
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static delete(f_companycode) {
    return CompanyDB.destroy({
      where: { f_companycode: f_companycode },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static approve(f_companycode) {
    return CompanyDB.update(
      {
        f_status: 1,
      },
      {
        where: { f_companycode: f_companycode },
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

module.exports = CompanyModel;
