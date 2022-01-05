const router = require("express").Router()
const {Review} = require("./models/index.js")

router.get("/", async (req,res) => {
    const databaseReviews = await Review.findAll({raw: true})
    res.render(/*handlebars page name here*/ {allReviews: databaseReviews})
})

router.get("/login", async (req,res) => {
    res.render("login")
    res.render('homepage', {allReviews: databaseReviews})
})

module.exports = router;