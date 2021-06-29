module.exports = (sequelize, Sequelize) => {
  const positionSchema = sequelize.define(
    "tbl_position",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_positionname: {
        type: Sequelize.STRING,
        field: "f_positionname",
      },
      f_positioncode: {
        type: Sequelize.STRING,
        field: "f_positioncode",
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
  return positionSchema;
};
