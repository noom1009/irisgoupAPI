module.exports = (sequelize, Sequelize) => {
  const authenSchema = sequelize.define(
    "tbl_account",
    {
      f_acc_id: {
        type: Sequelize.INTEGER,
        field: "f_acc_id",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_name: {
        type: Sequelize.STRING,
        field: "f_name",
      },
      f_lastname: {
        type: Sequelize.STRING,
        field: "f_lastname",
      },
      f_login_name: {
        type: Sequelize.STRING,
        field: "f_login_name",
      },
      f_login_password: {
        type: Sequelize.STRING,
        field: "f_login_password",
      },
      f_email: {
        type: Sequelize.STRING,
        field: "f_email",
      },
      f_company: {
        type: Sequelize.STRING,
        field: "f_company",
      },
      f_department: {
        type: Sequelize.STRING,
        field: "f_department",
      },
      f_position: {
        type: Sequelize.STRING,
        field: "f_position",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_admin_status: {
        type: Sequelize.STRING,
        field: "f_admin_status",
      },
      f_pic: {
        type: Sequelize.STRING,
        field: "f_pic",
      },
      f_authentication: {
        type: Sequelize.STRING,
        field: "f_authentication",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return authenSchema;
};
