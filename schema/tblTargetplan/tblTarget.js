module.exports = (sequelize, Sequelize) => {
  const targetSchema = sequelize.define(
    "tbl_target",
    {
      f_id: {
        type: Sequelize.INTEGER,
        field: "f_id",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_year: {
        type: Sequelize.STRING,
        field: "f_year",
      },
      f_month: {
        type: Sequelize.STRING,
        field: "f_month",
      },
      f_project: {
        type: Sequelize.STRING,
        field: "f_project",
      },
      f_unit: {
        type: Sequelize.STRING,
        field: "f_unit",
      },
      f_value: {
        type: Sequelize.STRING,
        field: "f_value",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return targetSchema;
};
