const util = require("util");
const Sequelize = require("sequelize");
const env = require("../config/env");
const con = require("../config/mysql");

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
db.BankDB = require("../schema/tblBank/index")(sequelize, Sequelize);
db.BookingDB = require("../schema/tblbooking/index")(sequelize, Sequelize);
db.FindownDB = require("../schema/tblFindown/index")(sequelize, Sequelize);
db.FinloanDB = require("../schema/tblFinloan/index")(sequelize, Sequelize);
db.FinotherDB = require("../schema/tblFinloan/index")(sequelize, Sequelize);
db.GroupUserDB = require("../schema/tblFinloan/index")(sequelize, Sequelize);
db.GroupProDB = require("../schema/tblGrouppro/index")(sequelize, Sequelize);
db.PositionDB = require("../schema/tblPosition/index")(sequelize, Sequelize);
db.PricelistDB = require("../schema/tblPricelist/index")(sequelize, Sequelize);
db.ProitemDB = require("../schema/tblProitem/index")(sequelize, Sequelize);
db.QuotationDB = require("../schema/tblquotation/index")(sequelize, Sequelize);
db.ReceiptDB = require("../schema/tblReceipt/index")(sequelize, Sequelize);
db.RoomplanDB = require("../schema/tblRoomplan/index")(sequelize, Sequelize);
db.RunningDB = require("../schema/tblRunning/index")(sequelize, Sequelize);
db.UploadDB = require("../schema/tblUpload/index")(sequelize, Sequelize);
db.TargetDB = require("../schema/tblTargetplan/tblTarget")(
  sequelize,
  Sequelize
);
db.TargetplanDB = require("../schema/tblTargetplan/tblTargetplan")(
  sequelize,
  Sequelize
);
db.FintranferDB = require("../schema/tblFintranfer/index")(
  sequelize,
  Sequelize
);
db.DepartmentDB = require("../schema/tblDepartment/index")(
  sequelize,
  Sequelize
);
module.exports = db;
