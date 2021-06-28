module.exports = (sequelize, Sequelize) => {
  const runningSchema = sequelize.define(
    "tbl_running",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_running_qutation: {
        type: Sequelize.STRING,
        field: "f_running_qutation",
      },
      f_running_booking: {
        type: Sequelize.STRING,
        field: "f_running_booking",
      },
      f_running_contact: {
        type: Sequelize.STRING,
        field: "f_running_contact",
      },
      f_countdownBooking: {
        type: Sequelize.STRING,
        field: "f_countdownBooking",
      },
      f_countdownContact: {
        type: Sequelize.STRING,
        field: "f_countdownContact",
      },
      f_running_receipt: {
        type: Sequelize.STRING,
        field: "f_running_receipt",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return runningSchema;
};
