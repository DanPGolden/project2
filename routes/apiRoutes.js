const router = require("express").Router()
const {Review, User} = require("../models/index")

router.post("/save", async (req,res) => {
    console.log("req.body from save fetch", req.body)
    let saveReview = await Review.create({
      game_name: req.body.game_name,
      title: req.body.title,
      description: req.body.description,
      author: req.session.user_id, // insetad of user_id, how do i get the user that's logged in userName property?
      user_id: req.session.user_id
    })
    res.json(saveReview)
})

router.delete("/delete/:id", async (req,res) => {
    const deleteReview = await Review.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(deleteReview)
})

module.exports = router;