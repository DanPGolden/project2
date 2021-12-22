const Review = require("./review")
const Game = require("./game")

Review.hasOne(Game,{
    foreignKey: "review_id"
});

Game.hasMany(Review, {
    foreignKey: "review_id"
});

Console.hasOne(Game, {
    foreignKey: "game_id"
});

Game.hasMany(Console, {
    foreignKey: "game_id"
});

module.exports = {Review}