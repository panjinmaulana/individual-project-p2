<template>
   <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
               THEATER24
            </router-link>
            <button
               class="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     <router-link to="/account/profile" class="nav-link">
                        My Account
                     </router-link>
                  </li>
               </ul>
               <form class="d-flex">
                  <input
                     class="form-control me-2"
                     type="search"
                     placeholder="Search"
                     aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                     Search
                  </button>
               </form>
               <!-- Button trigger modal -->
               <button
                  v-show="!loginSuccess"
                  type="button"
                  class="btn btn-primary ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
               >
                  Login
               </button>
            </div>
         </div>
      </nav>

      <!-- Modal -->
      <div
         class="modal fade"
         id="exampleModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
      >
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                  <button
                     type="button"
                     class="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                  ></button>
               </div>
               <div class="modal-body">
                  <form>
                     <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                           Email address
                        </label>
                        <input
                           v-model="email"
                           type="email"
                           class="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" class="form-text">
                           We'll never share your email with anyone else.
                        </div>
                     </div>
                     <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                           Password
                        </label>
                        <input
                           v-model="password"
                           type="password"
                           class="form-control"
                           id="exampleInputPassword1"
                        />
                     </div>
                     <button
                        id="successLogin"
                        @click.prevent="login"
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                     >
                        Login
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios"

const baseURL = "http://localhost:3000"

export default {
   name: "Navbar",
   data() {
      return {
         email: "",
         password: "",
         loginSuccess: ""
      }
   },
   methods: {
      login() {
         axios({
            method: "POST",
            url: `${baseURL}/users/login`,
            data: {
               email: this.email,
               password: this.password
            }
         })
            .then(({ data }) => {
               localStorage.setItem("id", data.id)
               localStorage.setItem("email", data.email)
               localStorage.setItem("role", data.role)
               localStorage.setItem("access_token", data.access_token)

               this.$router.push("/account/profile")
            })
            .catch(err => console.log(err))
      }
   },
   created() {
      this.loginSuccess = localStorage.getItem("access_token")
   }
}
</script>

<style></style>
