const { User } = require("../models")
const { decodeToken } = require("../helpers/jwt")

function authentification(req, res, next) {
   const { access_token } = req.headers

   if (!access_token) {
      return next({ name: "Missing access token" })
   }

   try {
      const userDecoded = decodeToken(access_token)

      User.findByPk(userDecoded.id)
         .then((user) => {
            if (!user) {
               throw {
                  name: "Unauthenticated"
               }
            } else {
               req.currentUser = {
                  id: user.id
               }
               next()
            }
         })
         .catch((err) => next(err))
   } catch (err) {
      return next(err)
   }
}

function authorization(req, res, next) {}

module.exports = {
   authentification,
   authorization
}
