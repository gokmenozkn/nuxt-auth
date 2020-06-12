<template>
  <div class="container">
    <products :products="products" />
  </div>
</template>

<script>
import Products from './../components/Products'

export default {
  components: {
    products: Products
  },
  data() {
    return {
      title: 'Home'
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>
