const Review = require("./review")
const Game = require("./game")
const User = require("./user")

Review.belongsTo(Game, {
    foreignKey: "game_id"
});

Game.hasMany(Review, {
    foreignKey: "game_id"
});

Review.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Review, {
    foreignKey: "user_id"
});

module.exports = {Review, Game, User}

