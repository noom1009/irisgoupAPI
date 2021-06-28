module.exports = (sequelize, Sequelize) => {
  const roomPlanSchema = sequelize.define(
    "tbl_roomplan",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_unit: {
        type: Sequelize.STRING,
        field: "f_unit",
      },
      f_type: {
        type: Sequelize.STRING,
        field: "f_type",
      },
      f_project: {
        type: Sequelize.STRING,
        field: "f_project",
      },
      f_font: {
        type: Sequelize.STRING,
        field: "f_font",
      },
      f_confont: {
        type: Sequelize.STRING,
        field: "f_confont",
      },
      f_color: {
        type: Sequelize.STRING,
        field: "f_color",
      },
      f_grade: {
        type: Sequelize.STRING,
        field: "f_grade",
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
  return roomPlanSchema;
};
