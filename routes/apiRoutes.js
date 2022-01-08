const router = require("express").Router()
const {Review, User} = require("../models/index")

router.post("/save", async (req,res) => {
    console.log("req.body from save fetch", req.body)
    console.log('session!!!', req.session)
    let saveReview = await Review.create({
      game_name: req.body.game_name,
      game_id: parseInt(req.body.game_id),
      title: req.body.title,
      description: req.body.description,
      author: req.session.userName, 
      user_id: req.session.user_id
    })
    console.log("saved review", saveReview)
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