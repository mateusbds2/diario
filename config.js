const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    database: "diario",
    username: "root",
    password: null,
    dialect: "mysql"
});

module.exports = sequelize;
