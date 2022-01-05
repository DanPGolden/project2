const Review = require("./review")
const Game = require("./game")
const User = require("./user")
const Console = require("./console")

User.hasMany(Review, {
    foreignKey: "user_id"
})

Review.belongsTo(Game, {
    foreignKey: "review_id"
})

Review.belongsTo(Game,{
    foreignKey: "review_id"
});

module.exports = {Review, Game, User, Console}