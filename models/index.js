const util = require("util");
const Sequelize = require("sequelize");
const env = require("../config/env");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  logging: false,
  freezeTableName: true,
  operatorsAliases: 0,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.UserDB = require("../schema/tblAccount/index")(sequelize, Sequelize);
db.AuthenDB = require("../schema/tblAccount/auth")(sequelize, Sequelize);
db.CompanyDB = require("../schema/tblCompany/index")(sequelize, Sequelize);
db.BankDB = require("../schema/tblbank/index")(sequelize, Sequelize);
db.BookingDB = require("../schema/tblbooking/index")(sequelize, Sequelize);
db.FindownDB = require("../schema/tblFindown/index")(sequelize, Sequelize);
db.FinloanDB = require("../schema/tblFinloan/index")(sequelize, Sequelize);
db.DepartmentDB = require("../schema/tblDepartment/index")(
  sequelize,
  Sequelize
);
module.exports = db;
