module.exports = (sequelize, Sequelize) => {
  const targetPlanSchema = sequelize.define(
    "tbl_targetplan",
    {
      f_id: {
        type: Sequelize.INTEGER,
        field: "f_id",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_projectname: {
        type: Sequelize.STRING,
        field: "f_projectname",
      },
      f_month: {
        type: Sequelize.STRING,
        field: "f_month",
      },
      f_target: {
        type: Sequelize.STRING,
        field: "f_target",
      },
      f_year: {
        type: Sequelize.STRING,
        field: "f_year",
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
  return targetPlanSchema;
};
