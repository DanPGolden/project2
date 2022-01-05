const router = require("express").Router()
const {Review} = require("../../models/index.js")

router.get("/", async (req,res) => {
    const databaseReviews = await Review.findAll({raw: true})
    res.render('homepage', {allReviews: databaseReviews})
})

module.exports = router;