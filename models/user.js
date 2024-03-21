const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

sequelize
  .sync()
  .then(() => {
    console.log("Synced DB.");
  })
  .catch((err) => {
    console.log("Failed to sync DB: " + err.message);
  });

// sequelize.sync({ force: true });

module.exports = User;
