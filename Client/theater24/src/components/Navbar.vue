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
            </div>
         </div>
      </nav>
   </div>
</template>

<script>
export default {
   name: "Navbar"
}
</script>

<style></style>
