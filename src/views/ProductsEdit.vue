<template>
  <div class="home">
    <h1>Edit Product</h1>
    <form v-on:submit.prevent="editProduct()">
      <ul>
        <li v-for="error in errors" v-bind:key="error" style="color: red">
          {{ error }}
        </li>
      </ul>
      <p>
        Name:
        <input type="text" v-model="product.name" />
      </p>
      <p>
        Description:
        <input type="text" v-model="product.description" />
      </p>
      <p>
        Price:
        <input type="text" v-model="product.price" />
      </p>
      <p>
        Quantity:
        <input type="text" v-model="product.quantity" />
      </p>
      <p>
        Image:
        <input type="text" v-model="product.image" />
      </p>
      <input type="submit" value="Edit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      product: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/products/${this.$route.params.id}`).then((response) => {
      this.product = response.data;
    });
  },
  methods: {
    editProduct() {
      axios
        .patch(`/products/${this.product.id}`, this.product)
        .then((response) => {
          this.product = response.data;
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
