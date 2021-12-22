const Review = require("./review")
const Game = require("./game")
const User = require("./user")

User.hasMany(Review, {
    foreignKey: "user_id"
})

Review.hasOne(Game, {
    foreignKey: "review_id"
})

Game.hasMany(Review, {
    foreignKey: "review_id"
})

// or would a review.belongsTo(User) be better?

module.exports = {Review}