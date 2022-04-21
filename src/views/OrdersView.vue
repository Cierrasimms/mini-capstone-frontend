<template>
  <div>
    <h1>New Order</h1>
    <form v-on:submit.prevent="createOrder()">
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
      <input type="submit" value="Create Order" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newOrder: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createOrder() {
      axios
        .post("/orders", this.newOrder)
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
