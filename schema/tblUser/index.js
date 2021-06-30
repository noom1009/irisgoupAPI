module.exports = (sequelize, Sequelize) => {
  const usersSchema = sequelize.define(
    "tbl_users",
    {
      f_acc_code: {
        type: Sequelize.INTEGER,
        field: "f_acc_code",
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
      f_hash_password: {
        type: Sequelize.STRING,
        field: "f_hash_password",
      },
      f_salt_password: {
        type: Sequelize.STRING,
        field: "f_salt_password",
      },
      f_email: {
        type: Sequelize.STRING,
        field: "f_email",
      },
      f_mobile: {
        type: Sequelize.STRING,
        field: "f_mobile",
      },
      f_lineid: {
        type: Sequelize.STRING,
        field: "f_lineid",
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
      f_dateupdate: {
        type: Sequelize.STRING,
        field: "f_dateupdate",
      },
      f_usersupdate: {
        type: Sequelize.STRING,
        field: "f_usersupdate",
      },
      f_pic: {
        type: Sequelize.STRING,
        field: "f_pic",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_admin_status: {
        type: Sequelize.STRING,
        field: "f_admin_status",
      },
      f_accounttype: {
        type: Sequelize.STRING,
        field: "f_accounttype",
      },
      f_activecode: {
        type: Sequelize.STRING,
        field: "f_activecode",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return usersSchema;
};
