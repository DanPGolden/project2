const router = require("express").Router()

const homeRoutes = require("./homeRoutes")
const apiRoutes = require("./apiRoutes")
const userRoutes = require("./userRoutes")
const homeRoutes = require("./api/homeRoutes")
const apiRoutes = require("./api/apiRoutes")

router.use("/", homeRoutes)
router.use("/api", apiRoutes)
router.use("/users", userRoutes)

module.exports = router;