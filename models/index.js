const Review = require("./review")
const Game = require("./game")
const User = require("./user")

Review.belongsTo(Game, {
    foreignKey: "game_id"
});

Game.hasMany(Review, {
    foreignKey: "game_id"
});

module.exports = {Review, Game, User}

