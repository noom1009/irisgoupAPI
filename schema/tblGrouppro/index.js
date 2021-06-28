module.exports = (sequelize, Sequelize) => {
  const groupProSchema = sequelize.define(
    "tbl_grouppro",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_groupcode: {
        type: Sequelize.STRING,
        field: "f_groupcode",
      },
      f_procode: {
        type: Sequelize.STRING,
        field: "f_procode",
      },
      f_project: {
        type: Sequelize.STRING,
        field: "f_project",
      },
      f_promotion: {
        type: Sequelize.STRING,
        field: "f_promotion",
      },
      f_promotiondetail: {
        type: Sequelize.STRING,
        field: "f_promotiondetail",
      },
      f_startdate: {
        type: Sequelize.STRING,
        field: "f_startdate",
      },
      f_enddate: {
        type: Sequelize.STRING,
        field: "f_enddate",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_countdowndate: {
        type: Sequelize.STRING,
        field: "f_countdowndate",
      },
      f_type: {
        type: Sequelize.STRING,
        field: "f_type",
      },
      f_pricepor: {
        type: Sequelize.STRING,
        field: "f_pricepor",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return groupProSchema;
};
