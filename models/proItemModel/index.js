const con = require("../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const items = require("../schema/items/index");
const item = require("../../schema/tblProitem/index");
const db = require("../model/index");
const Sequelize = require("sequelize");
const ItemsDB = db.ItemsDB;
const Op = db.Sequelize.Op;

class ItemsModel {
  constructor({
    f_code = "",
    f_procode = "",
    f_detail = "",
    f_remark = "",
    f_pricepro = "",
    f_remark = "",
    f_status = "",
    f_type = "",
    f_showitem = "",
    f_shoeproce = "",
    f_startdate = "",
    f_enddate = "",
  }) {
    this.f_code = f_code;
    this.f_procode = f_procode;
    this.f_detail = f_detail;
    this.f_remark = f_remark;
    this.f_pricepro = f_pricepro;
    this.f_remark = f_remark;
    this.f_status = f_status;
    this.f_type = f_type;
    this.f_showitem = f_showitem;
    this.f_shoeproce = f_shoeproce;
    this.f_startdate = f_startdate;
    this.f_enddate = f_enddate;
  }
  saveAll() {
    const items = {
      f_procode: this.f_procode,
      f_detail: this.f_detail,
      f_remark: this.f_remark,
      f_pricepro: this.f_pricepro,
      f_remark: this.f_remark,
      f_status: this.f_status,
      f_type: this.f_type,
      f_showitem: this.f_showitem,
      f_shoeproce: this.f_shoeproce,
      f_startdate: this.f_startdate,
      f_enddate: this.f_enddate,
    };
    return ItemsDB.create(items)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findAll() {
    return ItemsDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findone(f_code) {
    return ItemsDB.findByPk(f_code)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(f_code, sqlupdate) {
    return ItemsDB.update(
      {
        f_procode: sqlupdate.f_procode,
        f_detail: sqlupdate.f_detail,
        f_remark: sqlupdate.f_remark,
        f_pricepro: sqlupdate.f_pricepro,
        f_status: sqlupdate.f_status,
        f_type: sqlupdate.f_type,
        f_showitem: sqlupdate.f_status,
        f_shoeproce: sqlupdate.f_shoeproce,
        f_startdate: sqlupdate.f_startdate,
        f_enddate: sqlupdate.f_enddate,
      },
      { where: { f_code: f_code } }
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(f_code) {
    return ItemsDB.destroy({
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
    return ItemsDB.update(
      {
        f_status: 1,
      },
      {
        where: { f_code: f_code },
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

module.exports = ItemsModel;
