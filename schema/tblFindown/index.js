module.exports = (sequelize, Sequelize) => {
  const findownSchema = sequelize.define(
    "tbl_findown",
    {
      f_id: {
        type: Sequelize.INTEGER,
        field: "f_id",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_bobooking: {
        type: Sequelize.STRING,
        field: "f_bobooking",
      },
      f_dudate: {
        type: Sequelize.STRING,
        field: "f_dudate",
      },
      f_downtime: {
        type: Sequelize.STRING,
        field: "f_downtime",
      },
      f_downvalue: {
        type: Sequelize.STRING,
        field: "f_downvalue",
      },
      f_datepayment: {
        type: Sequelize.STRING,
        field: "f_datepayment",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_filename: {
        type: Sequelize.STRING,
        field: "f_filename",
      },
      f_receiptno: {
        type: Sequelize.STRING,
        field: "f_receiptno",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return findownSchema;
};
