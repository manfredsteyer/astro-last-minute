<template>
    <div class="island">
      <h2 class="mt0"><img class="fw-logo" src="/assets/vue.png"/>Book now!</h2>
      <h3>{{title}}</h3>
      <button class="mr10 counter" @click="subtract">-</button>
      {{count}} People
      <button class="ml10 counter" @click="add">+</button>
      <span class="ml20">€ {{price}}</span>
      <button @click="checkout" class="ml20 checkout">Checkout!</button>
    </div>
</template>

<script>
import { CHECKOUT_URL } from '../conf';

export default {
  name: "CounterVue",
  props: {
    title: String,
  },
  data() {
    return {
      count: 1,
      price: 1000
    };
  },
  methods: {
    add() {
      this.count++;
      this.price = this.count * 1000;
    },
    subtract() {
      this.count--;
      this.price = this.count * 1000;
    },
    checkout() {
      location.href=CHECKOUT_URL
    }
  },
};
</script>

<style scoped></style>