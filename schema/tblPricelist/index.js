module.exports = (sequelize, Sequelize) => {
  const priceListSchema = sequelize.define(
    "tbl_pricelist",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_planno: {
        type: Sequelize.STRING,
        field: "f_planno",
      },
      f_unit: {
        type: Sequelize.STRING,
        field: "f_unit",
      },
      f_type: {
        type: Sequelize.STRING,
        field: "f_type",
      },
      f_sq_wa: {
        type: Sequelize.STRING,
        field: "f_sq_wa",
      },
      f_sq_m: {
        type: Sequelize.STRING,
        field: "f_sq_m",
      },
      f_price2: {
        type: Sequelize.STRING,
        field: "f_price2",
      },
      f_pricemarkup2: {
        type: Sequelize.STRING,
        field: "f_pricemarkup2",
      },
      f_pricesum: {
        type: Sequelize.STRING,
        field: "f_pricesum",
      },
      f_price_promotion: {
        type: Sequelize.STRING,
        field: "f_price_promotion",
      },
      f_booking: {
        type: Sequelize.STRING,
        field: "f_booking",
      },
      f_contact: {
        type: Sequelize.STRING,
        field: "f_contact",
      },

      f_downpayment: {
        type: Sequelize.STRING,
        field: "f_downpayment",
      },
      f_down: {
        type: Sequelize.STRING,
        field: "f_down",
      },
      f_price_down: {
        type: Sequelize.STRING,
        field: "f_price_down",
      },
      f_final_payment: {
        type: Sequelize.STRING,
        field: "f_final_payment",
      },
      f_project: {
        type: Sequelize.STRING,
        field: "f_project",
      },
      f_version: {
        type: Sequelize.STRING,
        field: "f_version",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_discount: {
        type: Sequelize.STRING,
        field: "f_discount",
      },
      f_mg_discount: {
        type: Sequelize.STRING,
        field: "f_mg_discount",
      },
      f_priceother: {
        type: Sequelize.STRING,
        field: "f_priceother",
      },
      f_type_contact: {
        type: Sequelize.STRING,
        field: "f_type_contact",
      },
      f_is_balloon: {
        type: Sequelize.STRING,
        field: "f_is_balloon",
      },
      f_balloonvalue: {
        type: Sequelize.STRING,
        field: "f_balloonvalue",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return priceListSchema;
};
