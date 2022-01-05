const Review = require("./review")
const Game = require("./game")

Review.belongsTo(Game, {
    foreignKey: "game_id"
});

Game.hasMany(Review, {
    foreignKey: "game_id"
});


module.exports = { Review }