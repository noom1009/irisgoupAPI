module.exports = (sequelize, Sequelize) => {
  const projectSchema = sequelize.define(
    "tbl_quotation",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_running: {
        type: Sequelize.STRING,
        field: "f_running",
      },
      f_runningtype: {
        type: Sequelize.STRING,
        field: "f_runningtype",
      },
      f_project: {
        type: Sequelize.STRING,
        field: "f_project",
      },
      f_unit: {
        type: Sequelize.STRING,
        field: "f_unit",
      },
      f_type: {
        type: Sequelize.STRING,
        field: "f_type",
      },
      f_sq_m: {
        type: Sequelize.STRING,
        field: "f_sq_m",
      },
      f_sq_wa: {
        type: Sequelize.STRING,
        field: "f_sq_wa",
      },
      f_downpayment: {
        type: Sequelize.STRING,
        field: "f_downpayment",
      },
      f_booking: {
        type: Sequelize.STRING,
        field: "f_booking",
      },
      f_contact: {
        type: Sequelize.STRING,
        field: "f_contact",
      },
      f_down: {
        type: Sequelize.STRING,
        field: "f_down",
      },
      f_final_payment: {
        type: Sequelize.STRING,
        field: "f_final_payment",
      },
      f_promotion: {
        type: Sequelize.STRING,
        field: "f_promotion",
      },
      f_groupcode: {
        type: Sequelize.STRING,
        field: "f_groupcode",
      },
      f_totalprice: {
        type: Sequelize.STRING,
        field: "f_totalprice",
      },
      f_bankname: {
        type: Sequelize.STRING,
        field: "f_bankname",
      },
      f_number: {
        type: Sequelize.STRING,
        field: "f_number",
      },
      f_branch: {
        type: Sequelize.STRING,
        field: "f_branch",
      },
      f_priceother: {
        type: Sequelize.STRING,
        field: "f_priceother",
      },
      f_pricesum: {
        type: Sequelize.STRING,
        field: "f_pricesum",
      },
      f_datesave: {
        type: Sequelize.STRING,
        field: "f_datesave",
      },

      f_userlogin: {
        type: Sequelize.STRING,
        field: "f_userlogin",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_customername: {
        type: Sequelize.STRING,
        field: "f_customername",
      },
      f_customer_tel: {
        type: Sequelize.STRING,
        field: "f_customer_tel",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return projectSchema;
};
