const router = require("express").Router()

const movieControllers = require("../controllers/movieControllers")

router.get("/popular", movieControllers.popular)

module.exports = router
