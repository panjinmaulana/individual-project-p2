const router = require("express").Router()

router.get("/popular", movieController.popular)

module.exports = router
