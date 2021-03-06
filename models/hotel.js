const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const Hotel = dbConnection.define('hotel', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER
        //validation: ensure it's <5
    },
    amenities: {
        type: Sequelize.STRING
        //string of comma separated items
    }
});

module.exports = Hotel;