const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const Place = dbConnection.define('place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING
        //validation: ensure it's <5
    },
    state: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
        //{1123.456, 235463.0987}
    }
});

module.exports = Place;