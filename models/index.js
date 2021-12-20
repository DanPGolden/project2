const Review = require("./review")
const Game = require("./game")

Review.hasOne(Game,{
    foreignKey: "review_id"
})

module.exports = {Review}