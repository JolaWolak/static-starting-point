const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const Restaurant = dbConnection.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING
        //string of comma separated items
    },
    price: {
        type: Sequelize.INTEGER
        //validation: ensure it's 1-5
    }
});

module.exports = Restaurant;