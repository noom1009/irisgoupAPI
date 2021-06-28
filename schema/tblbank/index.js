module.exports = (sequelize, Sequelize) => {
  const bankSchema = sequelize.define(
    "tbl_bank",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_bankname: {
        type: Sequelize.STRING,
        field: "f_bankname",
      },
      f_branch: {
        type: Sequelize.STRING,
        field: "f_branch",
      },
      f_name: {
        type: Sequelize.STRING,
        field: "f_name",
      },
      f_number: {
        type: Sequelize.STRING,
        field: "f_number",
      },
      f_codebank: {
        type: Sequelize.STRING,
        field: "f_codebank",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_logo: {
        type: Sequelize.STRING,
        field: "f_logo",
      },
      f_defalut: {
        type: Sequelize.STRING,
        field: "f_defalut",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return bankSchema;
};
