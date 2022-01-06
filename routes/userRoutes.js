const router = require('express').Router()
const {User} = require("../models/index.js")

router.post('/signup', async (req, res) => {
    const newUserData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }, {raw: true})

    req.session.save(() => {
        console.log("saved a new session, logged in now")
        req.session.user_id = newUserData.id
        res.json({message: "You are now logged in"})
    })
})

router.post('/login', async (req, res) => {
    const userData = await User.findOne({where: {email: req.body.email}})
    console.log("req body password", req.body.password)
    console.log("user data", userData)
    if(!userData){
        res.json({error: "user not found"})
    }

    const validPassword = await userData.checkPassword(req.body.password)
    if(validPassword === false){
        res.json({error: "incorrect password"})
    }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
    })

})

router.get("/logout", async (req, res) => {
    if (req.session.user_id) {
        req.session.destroy(() => {
            res.json({message: "You have been logged out"})
        })
    }
    else {
        res.json({message: "You are already logged out"})
    }
})

module.exports = router;