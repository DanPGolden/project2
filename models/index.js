const Review = require("./review")
const Game = require("./game")
const User = require("./user")
const Console = require("./console")

Review.belongsTo(Game, {
    foreignKey: "game_id"
});

Game.hasMany(Review, {
    foreignKey: "game_id"
});

module.exports = {Review, Game, Console, User}

