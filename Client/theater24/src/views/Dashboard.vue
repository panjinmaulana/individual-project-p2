<template>
   <div class="container">
      <Navbar></Navbar>
      <h1>Top Rated</h1>
      <div class="row justify-content-center">
         <div class="col" v-if="topRatedMovies.length > 0">
            <carousel
               :margin="10"
               :loop="true"
               :center="true"
               :nav="false"
               :autoplay="true"
               :autoplayHoverPause="true"
               :autoWidth="true"
               :dots="false"
               :autoplayTimeout="3000"
            >
               <router-link
                  v-for="topRated in topRatedMovies"
                  :key="topRated.id"
                  :to="`/detail/${topRated.id}`"
                  class="card my-card "
                  style="width: 9.5rem"
               >
                  <img
                     :src="
                        'https://image.tmdb.org/t/p/original' +
                           topRated.poster_path
                     "
                     :alt="topRated.title"
                     class="card-img-top"
                  />
               </router-link>
            </carousel>
         </div>
      </div>
      <h1>Trending Week</h1>
      <div class="row justify-content-center ">
         <div class="col" v-if="trendingWeekMovies.length > 0">
            <carousel
               :margin="10"
               :loop="true"
               :center="true"
               :nav="false"
               :autoplay="true"
               :autoplayHoverPause="true"
               :autoWidth="true"
               :dots="false"
               :autoplayTimeout="3000"
            >
               <router-link
                  v-for="trendingWeek in trendingWeekMovies"
                  :key="trendingWeek.id"
                  :to="`/detail/${trendingWeek.id}`"
                  class="card my-card"
                  style="width: 9.5rem"
               >
                  <img
                     :src="
                        'https://image.tmdb.org/t/p/original' +
                           trendingWeek.poster_path
                     "
                     :alt="trendingWeek.title"
                     class="card-img-top"
                  />
               </router-link>
            </carousel>
         </div>
      </div>
      <h1>Trending Day</h1>
      <div class="row justify-content-center ">
         <div class="col" v-if="trendingDayMovies.length > 0">
            <carousel
               :margin="10"
               :loop="true"
               :center="true"
               :nav="false"
               :autoplay="true"
               :autoplayHoverPause="true"
               :autoWidth="true"
               :dots="false"
               :autoplayTimeout="3000"
            >
               <router-link
                  v-for="trendingDay in trendingDayMovies"
                  :key="trendingDay.id"
                  :to="`/detail/${trendingDay.id}`"
                  class="card my-card"
                  style="width: 9.5rem"
               >
                  <img
                     :src="
                        'https://image.tmdb.org/t/p/original' +
                           trendingDay.poster_path
                     "
                     :alt="trendingDay.title"
                     class="card-img-top"
                  />
               </router-link>
            </carousel>
         </div>
      </div>
      <h1>Upcoming</h1>
      <div class="row justify-content-center ">
         <div class="col" v-if="upcomingMovies.length > 0">
            <carousel
               :margin="10"
               :loop="true"
               :center="true"
               :nav="false"
               :autoplay="true"
               :autoplayHoverPause="true"
               :autoWidth="true"
               :dots="false"
               :autoplayTimeout="3000"
            >
               <router-link
                  v-for="upcoming in upcomingMovies"
                  :key="upcoming.id"
                  :to="`/detail/${upcoming.id}`"
                  class="card my-card"
                  style="width: 9.5rem"
               >
                  <img
                     :src="
                        'https://image.tmdb.org/t/p/original' +
                           upcoming.poster_path
                     "
                     :alt="upcoming.title"
                     class="card-img-top"
                  />
               </router-link>
            </carousel>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios"
import carousel from "vue-owl-carousel"

import Navbar from "../components/Navbar.vue"

const TMDB_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = process.env.VUE_APP_TMDB_TOKEN

export default {
   name: "Dashboard",
   components: { carousel, Navbar },
   data() {
      return {
         topRatedMovies: [],
         trendingWeekMovies: [],
         trendingDayMovies: [],
         upcomingMovies: []
      }
   },
   methods: {
      getTopRated() {
         axios({
            method: "GET",
            url: `${TMDB_URL}/movie/top_rated`,
            headers: {
               Authorization: `Bearer ${TMDB_TOKEN}`
            }
         })
            .then(({ data }) => {
               this.topRatedMovies = data.results
            })
            .catch(err => console.log(err))
      },
      getTrendingWeekMovies() {
         axios({
            method: "GET",
            url: `${TMDB_URL}/trending/movie/week`,
            headers: {
               Authorization: `Bearer ${TMDB_TOKEN}`
            }
         })
            .then(({ data }) => {
               this.trendingWeekMovies = data.results
            })
            .catch(err => console.log(err))
      },
      getTrendingDayMovies() {
         axios({
            method: "GET",
            url: `${TMDB_URL}/trending/movie/day`,
            headers: {
               Authorization: `Bearer ${TMDB_TOKEN}`
            }
         })
            .then(({ data }) => {
               this.trendingDayMovies = data.results
            })
            .catch(err => console.log(err))
      },
      getUpcomingMovies() {
         axios({
            method: "GET",
            url: `${TMDB_URL}/movie/upcoming?api_key=${TMDB_TOKEN}`,
            headers: {
               Authorization: `Bearer ${TMDB_TOKEN}`
            }
         })
            .then(({ data }) => {
               this.upcomingMovies = data.results
            })
            .catch(err => console.log(err))
      }
   },
   mounted() {
      this.getTopRated()
      this.getTrendingWeekMovies()
      this.getTrendingDayMovies()
      this.getUpcomingMovies()
   }
}
</script>

<style scoped>
a.card.my-card:hover {
   border: 5px solid #41b883;
}
</style>
