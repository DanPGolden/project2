const Review = require("./review")
const Game = require("./game")

Review.hasOne(Game,{
    foreignKey: "review_id"
});

Game.hasMany(Review, {
    foreignKey: "review_id"
})

module.exports = {Review}