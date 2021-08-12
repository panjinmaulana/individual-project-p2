const User = require("../models")
const { comparePassword } = require("../helpers/bcrypt")

class UserController {
   static register(req, res, next) {
      const { email, password } = req.body

      User.create({ email, password })
         .then((user) =>
            res.status(201).json({ id: user.id, email: user.email })
         )
         .catch((err) => next(err))
   }

   static login(req, res, next) {
      const { email, password } = req.body

      User.findOne({
         where: {
            email
         }
      })
         .then((user) => {
            if (!user) {
               throw {
                  name: "Unauthenticated"
               }
            }

            const checkPassword = comparePassword(password, user.password)
            if (!checkPassword) {
               throw {
                  name: "Loginfailed"
               }
            }

            return res.status(200).json({
               id: user.id,
               email: user.email,
               access_token: token
            })
         })
         .catch((err) => next(err))
   }
}

module.exports = UserController
