module.exports = (sequelize, Sequelize) => {
  const groupUserSchema = sequelize.define(
    "tbl_group",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_goupcode: {
        type: Sequelize.STRING,
        field: "f_goupcode",
      },
      f_goupname: {
        type: Sequelize.STRING,
        field: "f_goupname",
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
  return groupUserSchema;
};
