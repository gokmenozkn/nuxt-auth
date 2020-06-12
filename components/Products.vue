<template>
  <div class="products">
    <div class="main">
      <div class="card card-width" v-for="product in products" :key="product.id">
        <div class="image card-image">
          <img :src="require(`~/assets/${product.img}`)">
        </div>
        <div class="product-name card-content">
          <p>{{product.name}}</p>
          <span class="price">{{product.price}} $</span>
          <nuxt-link to="" class="margin-button btn-floating btn-medium black right">
            <i class="small material-icons">add_shopping_cart</i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data() {
    return {
      
    }
  },
}
</script>

<style>
  .main {
    display: grid;
    grid-template-columns: 10fr 10fr 10fr;
    grid-auto-rows: 10fr 10fr 10fr;
    grid-gap: 10px;
  }
  .card-width {
    max-width: 500px;
  }
  /* .card-content p {
    margin-bottom: 15px;
  } */
  .margin-button {
    margin-bottom: 10px;
  }
  .product-name {
    text-align: center;
  }
  .product-name p {
    color: rgba(255, 0, 0, 0.603);
    font-size: 23px;
    letter-spacing: 4px;
    font-weight: bold;
  }
  .price {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image img {
    max-width: 270px;
    height: 340px;
  }
</style>