const router = require("express").Router()
const {Review} = require("./models/index.js")

router.get("/", function (req,res) {
    const databaseReviews = await Review.findAll({raw: true})
    res.render('homepage', {allReviews: databaseReviews})
})

router.get('/login', function(req, res) {
    res.render('login');
})

module.exports = router;