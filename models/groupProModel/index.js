const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const grouppro = require("../../schema/tblGrouppro/index");
const db = require("../model/index");
const Sequelize = require("sequelize");
const GroupproDB = db.GroupproDB;
const Op = db.Sequelize.Op;

class GroupproModel {
  constructor({
    f_code = "",
    f_groupcode = "",
    f_procode = "",
    f_project = "",
    f_promotion = "",
    f_promotiondetail = "",
    f_startdate = "",
    f_enddate = "",
    f_countdowndate = "",
    f_type = "",
    f_pricepro = "",
    f_status = "",
    f_mgrprice = "",
    f_salemgrpric = "",
    f_unit = "",
    f_agent = "",
    f_acc_code = "",
  }) {
    this.f_code = f_code;
    this.f_groupcode = f_groupcode;
    this.f_procode = f_procode;
    this.f_project = f_project;
    this.f_promotion = f_promotion;
    this.f_promotiondetail = f_promotiondetail;
    this.f_startdate = f_startdate;
    this.f_enddate = f_enddate;
    this.f_countdowndate = f_countdowndate;
    this.f_type = f_type;
    this.f_pricepro = f_pricepro;
    this.f_status = f_status;
    this.f_mgrprice = f_mgrprice;
    this.f_salemgrpric = f_salemgrpric;
    this.f_unit = f_unit;
    this.f_agent = f_agent;
    this.f_acc_code = f_acc_code;
  }
  saveAll() {
    const grouppro = {
      f_groupcode: this.f_groupcode,
      f_procode: this.f_procode,
      f_project: this.f_project,
      f_promotion: this.f_promotion,
      f_promotiondetail: this.f_promotiondetail,
      f_startdate: this.f_startdate,
      f_enddate: this.f_enddate,
      f_countdowndate: this.f_countdowndate,
      f_type: this.f_type,
      f_pricepro: this.f_pricepro,
      f_status: this.f_status,
      f_mgrprice: this.f_mgrprice,
      f_salemgrpric: this.f_salemgrpric,
      f_unit: this.f_unit,
      f_agent: this.f_agent,
      f_acc_code: this.f_acc_code,
    };
    return GroupproDB.create(grouppro)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return GroupproDB.findAll()
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findone(f_code) {
    return GroupproDB.findByPk(f_code)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return GroupproDB.update(
      {
        f_groupcode: sqlupdate.f_groupcode,
        f_procode: sqlupdate.f_procode,
        f_project: sqlupdate.f_project,
        f_promotion: sqlupdate.f_promotion,
        f_promotiondetail: sqlupdate.f_promotiondetail,
        f_startdate: sqlupdate.f_startdate,
        f_enddate: sqlupdate.f_enddate,
        f_countdowndate: sqlupdate.f_countdowndate,
        f_type: sqlupdate.f_type,
        f_pricepro: sqlupdate.f_pricepro,
        f_status: sqlupdate.f_status,
        f_mgrprice: sqlupdate.f_salemgrpric,
        f_salemgrpric: sqlupdate.f_salemgrprice,
        f_unit: sqlupdate.f_unit,
        f_agent: sqlupdate.f_agent,
        f_acc_code: sqlupdate.f_acc_code,
      },
      { where: { f_code: f_code } }
    )
      .then((result) => {
        //console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_code) {
    return GroupproDB.destroy({
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
    return GroupproDB.update(
      {
        f_status: 1,
      },
      {
        where: { f_code: f_code },
      }
    )
      .then((result) => {
        // console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = GroupproModel;
