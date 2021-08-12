// axios.<method> will now provide autocomplete and parameter typings
const axios = require("axios").default
const TMDB_URL = "https://api.themoviedb.org/3/movie"
const TMDB_TOKEN = process.env.TMDB_TOKEN
class MovieController {
   static popular(req, res, next) {
      axios({
         method: "GET",
         url: `${TMDB_URL}/popular`,
         headers: {
            Authorization: `Bearer ${TMDB_TOKEN}`
         }
      })
         .then(({ data }) => res.status(200).json({ success: true, data }))
         .catch((err) => next(err))
   }
}

module.exports = MovieController
