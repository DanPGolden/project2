const router = require("express").Router()
const { Review } = require("../models")

router.post("/save", async (req,res) => {
    let saveReview = await Review.create(req.body)
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

router.delete()
module.exports = router;