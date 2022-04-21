<template>
  <div>
    <h1>New Product</h1>
    <form v-on:submit.prevent="createProduct()">
      <ul>
        <li v-for="error in errors" v-bind:key="error" style="color: red"></li>
      </ul>
      <p>
        Name:
        <input type="text" v-model="newProduct.name" />
      </p>
      <p>
        Description:
        <input type="text" v-model="newProduct.description" />
      </p>
      <p>
        Price:
        <input type="text" v-model="newProduct.price" />
      </p>
      <p>
        Quantity:
        <input type="text" v-model="newProduct.quantity" />
      </p>
      <p>
        Image:
        <input type="text" v-model="newProduct.image" />
      </p>
      <input type="submit" value="Create Product" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newProduct: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createProduct() {
      axios
        .post("/products", this.newProduct)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/products");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>

<style></style>
