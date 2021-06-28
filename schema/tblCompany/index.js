module.exports = (sequelize, Sequelize) => {
  const companySchema = sequelize.define(
    "tbl_company",
    {
      f_companycode: {
        type: Sequelize.INTEGER,
        field: "f_companycode",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_companyname: {
        type: Sequelize.STRING,
        field: "f_companyname",
      },
      f_companyaddress: {
        type: Sequelize.STRING,
        field: "f_companyaddress",
      },
      f_telphone: {
        type: Sequelize.STRING,
        field: "f_telphone",
      },
      f_tax: {
        type: Sequelize.STRING,
        field: "f_tax",
      },
      f_let: {
        type: Sequelize.STRING,
        field: "f_let",
      },
      f_long: {
        type: Sequelize.STRING,
        field: "f_long",
      },
      f_youtbue: {
        type: Sequelize.STRING,
        field: "f_youtbue",
      },
      f_website: {
        type: Sequelize.STRING,
        field: "f_website",
      },
      f_images: {
        type: Sequelize.STRING,
        field: "f_images",
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
  return companySchema;
};
