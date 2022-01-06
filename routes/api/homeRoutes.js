const router = require("express").Router()
const { Game, Review } = require("../../models");
const withAuth = require('../utils/auth');


router.get("/", async (req, res) => {
    const databaseReviews = await Review.findAll({ raw: true })
    res.render('homepage', { allReviews: databaseReviews })
})



router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;