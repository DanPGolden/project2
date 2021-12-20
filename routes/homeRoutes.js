const router = require("express").Router()
const {Review} = require("../models/index")

router.get("/", async (req,res) => {
    const databaseReviews = await Review.findAll({raw: true})
    res.render(/*handlebars page name here*/, {allReviews: databaseReviews})
})

module.exports = router;