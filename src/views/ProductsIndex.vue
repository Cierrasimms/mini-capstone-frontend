<template>
  <div class="row">
    <h1>{{ message }}</h1>
    <div
      class="col"
      v-bind:class="{ selected: product === currentProduct }"
      v-for="product in products"
      v-bind:key="product.id"
      v-on:click="currentProduct = product"
    >
      <div class="card" style="width: 18rem">
        <img class="card-img-top" v-bind:src="product.images[0].url" v-bind:alt="product.title" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">{{ product.price }}</p>
          <p class="card-text">{{ product.quantity }}</p>

          <a v-bind:href="`/products/${product.id}`" class="btn btn-primary">More Info</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Please Purchase My Wares",
      products: [],
      currentProduct: {},
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts() {
      axios.get("/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};
</script>

<style>
.selected .card-body {
  color: rgb(78, 24, 186);
  background-color: rgb(233, 198, 246);
}
img {
  max-width: 100%;
  height: auto;
}
</style>
