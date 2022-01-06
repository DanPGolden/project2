const router = require("express").Router()
const {Review, Game} = require("../models/index")

router.get("/", async (req, res) => {
    res.render("home")
})

router.get("/gamesMain", async (req, res) => {
    if (req.session.user_id) {
        const databaseGames = await Game.findAll({ raw: true })
        res.render("gamesMain", { allGames: databaseGames })
    }
    else {
        res.redirect("/login")
        console.log("You must be logged in to view this page")
    }
})

router.get("/gameReviews/:id", async (req, res) => {
    if (req.session.user_id) {
        const databaseReviews = await Game.findAll({
            where: {
                 id: req.params.id 
        }, include: [{
            model: Review,
        }, {raw: true}] // may need to change to plain: true if the raw true doesn't work
    })
        res.render("gameReviews", { gameReviews: databaseReviews })
    }
    else {
        res.redirect("/login")
        console.log("You must be logged in to view this page")
    }
})

router.get("/login", async (req, res) => {
    res.render("login")
})

module.exports = router;

// pull from the main, merge into my branch, seed database, and check if the specific routes work
