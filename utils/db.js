const Sequelize = require("sequelize");
const sequelize = new Sequelize("Demo", "root", "", {
  dialect: "mysql",
  host: "localhost",
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Connection has been established successfully...!");
  })
  .catch(function (error) {
    console.log("Unable to connect to the DB : " + error.message);
  });

module.exports = sequelize;
