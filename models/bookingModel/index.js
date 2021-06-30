const con = require("../../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const company = require("../../schema/tblBooking/index");
const db = require("../index");
const Sequelize = require("sequelize");
const BookingDB = db.BookingDB;
const Op = db.Sequelize.Op;

class BookingModel {
  constructor({
    f_code = "",
    f_running = "",
    f_customer = "",
    f_mobile = "",
    f_cardid = "",
    f_birthdate = "",
    f_address = "",
    f_mail_address = "",
    f_email = "",
    f_line = "",
    f_nation = "",
    f_gent = "",
    f_bud = "",
    f_promotion = "",
    f_groupcode = "",
    f_totalprice = "",
    f_bankname = "",
    f_name = "",
    f_number = "",
    f_branch = "",
    f_bookingdate = "",
    f_pricesum = "",
    f_status = "",
    f_userlogin = "",
    f_project = "",
    f_unit = "",
    f_type = "",
    f_sq_m = "",
    f_sq_wa = "",
    f_downpayment = "",
    f_booking = "",
    f_contact = "",
    f_down = "",
    f_final_payment = "",
    f_datesave = "",
    f_cashdiscount = "",
    f_type_contact = "",
    f_contactnumber = "",
    f_ref = "",
    f_grade = "",
    f_datetranfer = "",
    f_datecancle = "",
    f_contacetranfer = "",
    f_datefollow = "",
    f_datecancletimestamp = "",
    f_contacetranfertimestamp = "",
  }) {
    this.f_code = f_code;
    this.f_running = f_running;
    this.f_customer = f_customer;
    this.f_mobile = f_mobile;
    this.f_cardid = f_cardid;
    this.f_birthdate = f_birthdate;
    this.f_address = f_address;
    this.f_mail_address = f_mail_address;
    this.f_email = f_email;
    this.f_line = f_line;
    this.f_nation = f_nation;
    this.f_gent = f_gent;
    this.f_bud = f_bud;
    this.f_promotion = f_promotion;
    this.f_groupcode = f_groupcode;
    this.f_totalprice = f_totalprice;
    this.f_bankname = f_bankname;
    this.f_name = f_name;
    this.f_number = f_number;
    this.f_branch = f_branch;
    this.f_bookingdate = f_bookingdate;
    this.f_pricesum = f_pricesum;
    this.f_status = f_status;
    this.f_userlogin = f_userlogin;
    this.f_project = f_project;
    this.f_unit = f_unit;
    this.f_sq_m = f_sq_m;
    this.f_sq_wa = f_sq_wa;
    this.f_downpayment = f_downpayment;
    this.f_booking = f_booking;
    this.f_contact = f_contact;
    this.f_down = f_down;
    this.f_final_payment = f_final_payment;
    this.f_datesave = f_datesave;
    this.f_cashdiscount = f_cashdiscount;
    this.f_type_contact = f_type_contact;
    this.f_contactnumber = f_contactnumber;
    this.f_ref = f_ref;
    this.f_grade = f_grade;
    this.f_datetranfer = f_datetranfer;
    this.f_datecancle = f_datecancle;
    this.f_contacetranfer = f_contacetranfer;
    this.f_datefollow = f_datefollow;
    this.f_datecancletimestamp = f_datecancletimestamp;
    this.f_contacetranfertimestamp = f_contacetranfertimestamp;
  }
  saveAll() {
    const booking = {
      f_running: this.f_running,
      f_customer: this.f_customer,
      f_mobile: this.f_mobile,
      f_cardid: this.f_cardid,
      f_birthdate: this.f_birthdate,
      f_address: this.f_address,
      f_mail_address: this.f_mail_address,
      f_email: this.f_email,
      f_line: this.f_line,
      f_nation: this.f_nation,
      f_gent: this.f_gent,
      f_bud: this.f_bud,
      f_promotion: this.f_promotion,
      f_groupcode: this.f_groupcode,
      f_totalprice: this.f_totalprice,
      f_bankname: this.f_bankname,
      f_name: this.f_name,
      f_branch: this.f_branch,
      f_bookingdate: this.f_bookingdate,
      f_pricesum: this.f_pricesum,
      f_status: this.f_status,
      f_userlogin: this.f_userlogin,
      f_project: this.f_project,
      f_unit: this.f_unit,
      f_type: this.f_type,
      f_sq_m: this.f_sq_m,
      f_sq_wa: this.f_sq_wa,
      f_downpayment: this.f_downpayment,
      f_booking: this.f_booking,
      f_contact: this.f_contact,
      f_down: this.f_down,
      f_final_payment: this.f_final_payment,
      f_datesave: this.f_datesave,
      f_cashdiscount: this.f_cashdiscount,
      f_type_contact: this.f_type_contact,
      f_contactnumber: this.f_contactnumber,
      f_ref: this.f_ref,
      f_grade: this.f_grade,
      f_datetranfer: this.f_datetranfer,
      f_datecancle: this.f_datecancle,
      f_contacetranfer: this.f_contacetranfer,
      f_datefollow: this.f_datefollow,
      f_datecancletimestamp: this.f_datecancletimestamp,
      f_contacetranfertimestamp: this.f_contacetranfertimestamp,
    };
    return BookingDB.create(booking)
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
        f_running: sqlupdate.f_running,
        f_customer: sqlupdate.f_customer,
        f_mobile: sqlupdate.f_mobile,
        f_cardid: sqlupdate.f_cardid,
        f_birthdate: sqlupdate.f_birthdate,
        f_address: sqlupdate.f_address,
        f_mail_address: sqlupdate.f_mail_address,
        f_email: sqlupdate.f_email,
        f_line: sqlupdate.f_line,
        f_nation: sqlupdate.f_nation,
        f_gent: sqlupdate.f_gent,
        f_bud: sqlupdate.f_bud,
        f_promotion: sqlupdate.f_promotion,
        f_groupcode: sqlupdate.f_groupcode,
        f_totalprice: sqlupdate.f_totalprice,
        f_bankname: sqlupdate.f_bankname,
        f_name: sqlupdate.f_name,
        f_number: sqlupdate.f_number,
        f_branch: sqlupdate.f_branch,
        f_bookingdate: sqlupdate.f_bookingdate,
        f_pricesum: sqlupdate.f_pricesum,
        f_status: sqlupdate.f_status,
        f_userlogin: sqlupdate.f_userlogin,
        f_project: sqlupdate.f_project,
        f_unit: sqlupdate.f_unit,
        f_type: sqlupdate.f_type,
        f_sq_m: sqlupdate.f_sq_m,
        f_sq_wa: sqlupdate.f_sq_wa,
        f_downpayment: sqlupdate.f_downpayment,
        f_booking: sqlupdate.f_booking,
        f_contact: sqlupdate.f_contact,
        f_down: sqlupdate.f_down,
        f_final_payment: sqlupdate.f_final_payment,
        f_datesave: sqlupdate.f_datesave,
        f_cashdiscount: sqlupdate.f_cashdiscount,
        f_type_contact: sqlupdate.f_type_contact,
        f_contactnumber: sqlupdate.f_contactnumber,
        f_ref: sqlupdate.f_ref,
        f_grade: sqlupdate.f_grade,
        f_datetranfer: sqlupdate.f_datetranfer,
        f_datecancle: sqlupdate.f_datecancle,
        f_contacetranfer: sqlupdate.f_contacetranfer,
        f_datefollow: sqlupdate.f_datefollow,
        f_datecancletimestamp: sqlupdate.f_datecancletimestamp,
        f_contacetranfertimestamp: sqlupdate.f_contacetranfertimestamp,
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

module.exports = BookingModel;
