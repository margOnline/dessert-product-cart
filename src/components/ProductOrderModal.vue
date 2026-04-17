<script setup>
import { icons } from '@/utils/assets'
import { state } from '@/utils/state'
import OrderItem from './OrderItem.vue'
import OrderTotal from './OrderTotal.vue'

function resetState() {
  state.value.cartProducts = []
  state.value.cartQty = 0
  state.value.cartTotal = 0
  state.value.orderConfirmed = false
}
</script>

<template>
  <div class="modal-container">
    <img :src="icons['orderConfirmed']" alt="checkmark" />
    <h2>Order Confirmed</h2>
    <p>We hope you enjoy your food!</p>
    <ul>
      <li role="list" v-for="(lineItem, idx) in state.cartProducts" :key="idx">
        <OrderItem :lineItem="lineItem" />
      </li>
    </ul>

    <OrderTotal />
    <button class="btn btn-reverse" @click="resetState()">Start New Order</button>
  </div>
</template>

<style scoped>
button {
  width: 100%;
}
.modal-container {
  background-color: var(--white);
  padding: 1rem;
  border-radius: 1rem;
}
.btn-reverse {
  background-color: var(--red);
  color: var(--white);
  border: 1px solid var(--red);
}
.btn-full-width {
  width: 100%;
}
</style>
