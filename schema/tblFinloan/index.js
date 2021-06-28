module.exports = (sequelize, Sequelize) => {
  const finloanSchema = sequelize.define(
    "tbl_finloan",
    {
      f_id: {
        type: Sequelize.INTEGER,
        field: "f_id",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_running: {
        type: Sequelize.STRING,
        field: "f_running",
      },
      f_unit: {
        type: Sequelize.STRING,
        field: "f_unit",
      },
      f_customer: {
        type: Sequelize.STRING,
        field: "f_customer",
      },
      f_contactstart: {
        type: Sequelize.STRING,
        field: "f_contactstart",
      },
      f_dateapply: {
        type: Sequelize.STRING,
        field: "f_dateapply",
      },
      f_bankshortname: {
        type: Sequelize.STRING,
        field: "f_bankshortname",
      },
      f_bankname: {
        type: Sequelize.STRING,
        field: "f_bankname",
      },
      f_bankstatus: {
        type: Sequelize.STRING,
        field: "f_bankstatus",
      },
      f_grade: {
        type: Sequelize.STRING,
        field: "f_grade",
      },
      f_reasonchange: {
        type: Sequelize.STRING,
        field: "f_reasonchange",
      },
      f_dateupdate: {
        type: Sequelize.STRING,
        field: "f_dateupdate",
      },
      f_period: {
        type: Sequelize.STRING,
        field: "f_period",
      },
      f_dateapprove: {
        type: Sequelize.STRING,
        field: "f_dateapprove",
      },
      f_loan: {
        type: Sequelize.STRING,
        field: "f_loan",
      },
      f_loanapprove: {
        type: Sequelize.STRING,
        field: "f_loanapprove",
      },
      f_reasonreject: {
        type: Sequelize.STRING,
        field: "f_reasonreject",
      },
      f_reasoncancle: {
        type: Sequelize.STRING,
        field: "f_reasoncancle",
      },
      f_daterecord: {
        type: Sequelize.STRING,
        field: "f_daterecord",
      },
      f_userlogin: {
        type: Sequelize.STRING,
        field: "f_userlogin",
      },
      f_project: {
        type: Sequelize.STRING,
        field: "f_project",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return finloanSchema;
};
