module.exports = (sequelize, Sequelize) => {
  const proItemSchema = sequelize.define(
    "tbl_proitem",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_procode: {
        type: Sequelize.STRING,
        field: "f_procode",
      },
      f_detail: {
        type: Sequelize.STRING,
        field: "f_detail",
      },
      f_remark: {
        type: Sequelize.STRING,
        field: "f_remark",
      },
      f_pricepro: {
        type: Sequelize.STRING,
        field: "f_pricepro",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_type: {
        type: Sequelize.STRING,
        field: "f_type",
      },
      f_showitem: {
        type: Sequelize.STRING,
        field: "f_showitem",
      },
      f_shoeproce: {
        type: Sequelize.STRING,
        field: "f_shoeproce",
      },
      f_startdate: {
        type: Sequelize.STRING,
        field: "f_startdate",
      },
      f_enddate: {
        type: Sequelize.STRING,
        field: "f_enddate",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return proItemSchema;
};
