<template>
  <div class="home">
    <h1>Product Info</h1>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.quantity }}</p>

    <img
      v-if="product && product.images && product.images[0]"
      v-bind:src="product.images[0].url"
      v-bind:alt="product.name"
      style="max-width: 250px"
    />
    <div></div>
    <router-link to="/products">Back to all products</router-link>
    <br />
    <router-link v-bind:to="`/products/${product.id}/edit`">Edit Product</router-link>
    <br />
    <button v-on:click="destroyProduct()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      product: [],
    };
  },
  created: function () {
    this.showProducts();
  },
  methods: {
    showProducts() {
      axios.get(`/products/${this.$route.params.id}`).then((response) => {
        this.product = response.data;
      });
    },
    destroyProduct() {
      axios.delete(`/products/${this.product.id}`).then((response) => {
        console.log(response);
        this.$router.push("/products");
      });
    },
  },
};
</script>

<style>
h1 {
  color: rgb(61, 1, 101);
  text-shadow: 2px 2px #00eeff;
}
h2 {
  color: rgb(0, 0, 0);
}
p {
  color: rgb(0, 0, 0);
}
</style>
