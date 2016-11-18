// Export all models as well as db connection itself
const theDbConnection = require('./_db');
const HotelModel = require('./hotel');
const PlaceModel = require('./place');
const RestaurantModel = require('./restaurant');
const ActivityModel = require('./activity');

HotelModel.belongsTo(PlaceModel);
RestaurantModel.belongsTo(PlaceModel);
ActivityModel.belongsTo(PlaceModel);

module.exports = {
    db: theDbConnection,
    Hotel: HotelModel,
    Place: PlaceModel,
    Restaurant: RestaurantModel,
    Activity: ActivityModel
};