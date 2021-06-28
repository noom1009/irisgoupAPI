module.exports = (sequelize, Sequelize) => {
  const departmentSchema = sequelize.define(
    "tbl_department",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_departmentname: {
        type: Sequelize.STRING,
        field: "f_departmentname",
      },
      f_departmentcode: {
        type: Sequelize.STRING,
        field: "f_departmentcode",
      },
      f_mobileext: {
        type: Sequelize.STRING,
        field: "f_mobileext",
      },
      f_mgrcode: {
        type: Sequelize.STRING,
        field: "f_mgrcode",
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
  return departmentSchema;
};
