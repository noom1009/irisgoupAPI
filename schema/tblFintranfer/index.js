module.exports = (sequelize, Sequelize) => {
  const fintranferSchema = sequelize.define(
    "tbl_fintranfer",
    {
      f_running: {
        type: Sequelize.INTEGER,
        field: "f_running",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_unit: {
        type: Sequelize.STRING,
        field: "f_unit",
      },
      f_tranferdate: {
        type: Sequelize.STRING,
        field: "f_tranferdate",
      },
      f_price: {
        type: Sequelize.STRING,
        field: "f_price",
      },
      f_usertranfer1: {
        type: Sequelize.STRING,
        field: "f_usertranfer1",
      },
      f_usertranfer2: {
        type: Sequelize.STRING,
        field: "f_usertranfer2",
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
  return fintranferSchema;
};
