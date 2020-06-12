<template>
  <div class="navbar">
    <nav class="blue darken-1">
      <div class="container">
        <nuxt-link to="/" class="brand-logo">Logo</nuxt-link>
        <ul class="right">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/register">Register</nuxt-link></li>
          <li v-if="!isLoggedIn"><nuxt-link to="/login">Login</nuxt-link></li>
          <li v-else><nuxt-link to="/me">Account</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>