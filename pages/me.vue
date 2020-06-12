<template>
  <div class="container center">
    <div v-if="user">
      <h1>Email:</h1>
      <p class="blue-text">{{user.email}}</p>
      <p>Logout?</p>
      <button @click="logout" class="btn">Logout</button>
    </div>
    <div v-else class="row">
      <nuxt-link to="/register">Create an account?</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    }
  },
  methods: {
    async logout() {
      try {
        await this.$fireAuth.signOut();
        setTimeout(() => this.$router.push('/'), 3000);
      } catch (e) {
        alert(e);
      }
    }
  },
  created() {
    var user = this.$fireAuth.currentUser;
    if (user) {
      this.user = user;
    } else {
      this.user = null;
    }
  },
}
</script>

<style>

</style>