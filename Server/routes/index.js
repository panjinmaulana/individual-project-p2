const router = require("express").Router()

const userRoutes = require("./userRoutes")
const movieRoutes = require("./movieRoutes")
const { authentification } = require("../middlewares/auth")

router.use("/users", userRoutes)
router.use("/movies", movieRoutes)

router.use(authentification)

module.exports = router
