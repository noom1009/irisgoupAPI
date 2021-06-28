module.exports = (sequelize, Sequelize) => {
  const receiptSchema = sequelize.define(
    "tbl_receipt",
    {
      f_id: {
        type: Sequelize.INTEGER,
        field: "f_id",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_bookingbo: {
        type: Sequelize.STRING,
        field: "f_bookingbo",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_bookingreceipt: {
        type: Sequelize.STRING,
        field: "f_bookingreceipt",
      },
      f_contactreceipt: {
        type: Sequelize.STRING,
        field: "f_contactreceipt",
      },
      f_datebookingreceipt: {
        type: Sequelize.STRING,
        field: "f_datebookingreceipt",
      },
      f_datecontactreceipt: {
        type: Sequelize.STRING,
        field: "f_datecontactreceipt",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return receiptSchema;
};
