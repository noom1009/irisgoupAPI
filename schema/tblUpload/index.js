module.exports = (sequelize, Sequelize) => {
  const uploadSchema = sequelize.define(
    "tbl_upload",
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
      f_unit: {
        type: Sequelize.STRING,
        field: "f_unit",
      },
      f_userlogin: {
        type: Sequelize.STRING,
        field: "f_userlogin",
      },
      f_dataupload: {
        type: Sequelize.STRING,
        field: "f_dataupload",
      },
      f_fileupload: {
        type: Sequelize.STRING,
        field: "f_fileupload",
      },
      f_datesave: {
        type: Sequelize.STRING,
        field: "f_datesave",
      },
      f_project: {
        type: Sequelize.STRING,
        field: "f_project",
      },
      f_filetype: {
        type: Sequelize.STRING,
        field: "f_filetype",
      },
      f_typeupload: {
        type: Sequelize.STRING,
        field: "f_typeupload",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return uploadSchema;
};
