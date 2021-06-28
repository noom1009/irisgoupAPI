module.exports = (sequelize, Sequelize) => {
  const projectSchema = sequelize.define(
    "tbl_project",
    {
      f_codeproject: {
        type: Sequelize.INTEGER,
        field: "f_codeproject",
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      f_projectname: {
        type: Sequelize.STRING,
        field: "f_projectname",
      },
      f_projectdetail: {
        type: Sequelize.STRING,
        field: "f_projectdetail",
      },
      f_building: {
        type: Sequelize.STRING,
        field: "f_building",
      },
      f_project: {
        type: Sequelize.STRING,
        field: "f_project",
      },
      f_color: {
        type: Sequelize.STRING,
        field: "f_color",
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
      f_foor: {
        type: Sequelize.STRING,
        field: "f_foor",
      },
      f_website: {
        type: Sequelize.STRING,
        field: "f_website",
      },
      f_mobile: {
        type: Sequelize.STRING,
        field: "f_mobile",
      },
      f_total: {
        type: Sequelize.STRING,
        field: "f_total",
      },
      f_linenotify: {
        type: Sequelize.STRING,
        field: "f_linenotify",
      },
      f_status: {
        type: Sequelize.STRING,
        field: "f_status",
      },
      f_booking: {
        type: Sequelize.STRING,
        field: "f_booking",
      },
      f_contact: {
        type: Sequelize.STRING,
        field: "f_contact",
      },
      f_tranfer: {
        type: Sequelize.STRING,
        field: "f_tranfer",
      },
      f_codelaw: {
        type: Sequelize.STRING,
        field: "f_codelaw",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return projectSchema;
};
