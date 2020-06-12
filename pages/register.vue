<template>
  <div class="signin center">
    <h1>Register Page</h1>
    <form class="form container" @submit.prevent="submit">
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
      <button class="btn left">Signup</button>
    </form>
  </div>
</template>

<script>
// import firebase from './../plugins/firebase';

export default {
  data() {
    return {
      title: 'Register',
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
    async submit() {
      // firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      //   .then(user => {
      //     // console.log(user);
      //     this.$router.push('/login');
      //   }).catch(e => {

      //     this.errorMessage = e;

      //   });

      try {
        await this.$fireAuth.createUserWithEmailAndPassword(this.email, this.password);
        await this.$router.push('/login');
      } catch (e) {
        console.log(e.message);
        this.errorMessage = e.message;
      }
    },
  },
}
</script>

<style>

</style>