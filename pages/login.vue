<template>
  <div class="signin center">
    <h1>{{title}} Page</h1>
    <form class="form container" @submit.prevent="loginUser">
      <div class="card" v-if="errorMessage">
        <div class="card-content red">
          <p class="white-text">{{errorMessage}}</p>
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <label for="email">Email</label>
          <input type="email" v-model="email">
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input type="password" v-model="password">
        </div>
      </div>
      <button class="btn left">Login</button>
    </form>
  </div>
</template>

<script>
// import firebase from './../plugins/firebase';

export default {
  data() {
    return {
      title: 'Login',
      user: null,
      email: '',
      password: '',
      errorMessage: null,
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    async loginUser() {
      // firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      //   .then(user => {
      //     console.log(user);
      //     setTimeout(() => this.$router.push('/me'), 3000);
      //   }).catch(e => {

      //     console.log(e);
      //     this.errorMessage = e.message;
      //     setTimeout(() => this.$router.push('/register'), 3000);

      //   });

      try {
        await this.$fireAuth.signInWithEmailAndPassword(this.email, this.password);
        var user = await this.$fireAuth.currentUser;
        console.log(user);
        setTimeout(() => this.$router.push('/'), 3000);
      } catch (e) {
        console.log(e);
        if (e) {
          this.errorMessage = e.message;
          setTimeout(() => this.$router.push('/register'), 3000);
        }
      }
    },
  },
}
</script>

<style>

</style>