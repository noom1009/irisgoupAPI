module.exports = (sequelize, Sequelize) => {
  const fintranferSchema = sequelize.define(
    "tbl_fintranfer",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_codeproject: {
        type: Sequelize.STRING,
        field: "f_codeproject",
      },
      f_projectname: {
        type: Sequelize.STRING,
        field: "f_projectname",
      },
      f_typehome: {
        type: Sequelize.STRING,
        field: "f_typehome",
      },
      f_detail: {
        type: Sequelize.STRING,
        field: "f_detail",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return fintranferSchema;
};
