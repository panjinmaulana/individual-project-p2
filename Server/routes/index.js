const router = require("express").Router()

const userRoutes = require("./userRoutes")
const movieRoutes = require("./movieRoutes")
const { authentification } = require("../middlewares/auth")

router.use("/users", userRoutes)

router.use(authentification)

router.use("/movies", movieRoutes)

module.exports = router
