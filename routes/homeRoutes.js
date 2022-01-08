const router = require("express").Router()
const {Review, Game} = require("../models/index")

router.get("/", async (req, res) => {
    res.render("home")
})

router.get("/gamesMain", async (req, res) => {
    console.log('IN GAMES MAIN! ROUTE!!', req.session)
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
        const databaseReviews = await Review.findAll({
            where: {
                 game_id: req.params.id 
        },
        raw: true,
    })
        res.render("gameReviews", {gameReviews: databaseReviews})
    }
    else {
        res.redirect("/login")
        console.log("You must be logged in to view this page")
    }
})

router.get("/myReviews", async (req, res) => {
    console.log('MY REVIEW ROUTE!!!', req.session, req.params)
    if (req.session.user_id) {
        const databaseReviews = await Review.findAll({
            where: {
                user_id: req.session.user_id
            },
            raw: true,
        })
        if(databaseReviews.length > 0) {
            res.render("myReviews", {myReviews: databaseReviews})
        } else {
            res.redirect('/newReview')
        }
    }
    else {
        res.redirect("/newReview")
        console.log("Make a new review!")
    }
})

router.get("/login", async (req, res) => {
    res.render("login")
})

router.get("/newReview", async (req, res) => {
    if (req.session.user_id) {
        const databaseGames = await Game.findAll({ raw: true })
        res.render("newReview", { allGames: databaseGames })
    }
    else {
        res.redirect("/login")
        console.log("You must be logged in to view this page")
    }
})

router.get("/signup", async (req, res) => {
    res.render("signup")
})

module.exports = router;