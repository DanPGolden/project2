const Review = require("./review")
const Game = require("./game")
const Console = require ("./console")
const Users = require ("./users")

Review.belongsTo(Game,{
    foreignKey: "review_id"
});

Game.hasMany(Review, {
    foreignKey: "review_id"
});

Console.belongsTo(Game, {
    foreignKey: "game_id"
});

Game.hasMany(Console, {
    foreignKey: "game_id"
});

module.exports = {Review, Game, Console, Users}