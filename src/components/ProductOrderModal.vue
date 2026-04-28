<script setup>
import { icons } from '@/utils/assets'
import { state } from '@/utils/state'
import ProductOrderItem from './ProductOrderItem.vue'
import OrderTotal from './OrderTotal.vue'

// function isOrderConfirmed() {
//   return !state.value.orderConfirmed
// }
function resetState() {
  state.value.cartProducts = []
  state.value.cartQty = 0
  state.value.cartTotal = 0
  state.value.orderConfirmed = false
}
</script>

<template>
  <div :class="state.orderConfirmed ? 'overlay' : 'hidden'">
    <div class="modal-container">
      <img :src="icons['orderConfirmed']" alt="checkmark" />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <div class="product-order-container">
        <ul>
          <li role="list" v-for="(lineItem, idx) in state.cartProducts" :key="idx">
            <ProductOrderItem :lineItem="lineItem" />
          </li>
        </ul>

        <OrderTotal />
      </div>
      <button class="btn btn-reverse" @click="resetState()">Start New Order</button>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 100%;
}
p {
  color: var(--rose-500);
}
ul {
}
.modal-container {
  width: 100%;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 50px;
  background-color: var(--white);
  padding: 1rem;
  border-radius: 1rem;
  z-index: 100;
}
.product-order-container {
  background-color: var(--rose-50);
  margin-block: 1.5rem;
  padding: 0;
  border-radius: 1rem;
}
.btn-reverse {
  background-color: var(--red);
  color: var(--white);
  border: 1px solid var(--red);
}
.btn-reverse:hover {
  background-color: var(--red-dark);
  border: 1px solid var(--red-dark);
}
.btn-full-width {
  width: 100%;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 50% black */
  backdrop-filter: blur(3px); /* Optional: blurs background */
  z-index: 100; /* Must be below the modal */
}
.hidden {
  display: none !important;
}

@media (min-width: 48rem) {
  .modal-container {
    width: 80%;
    top: 25%;
    left: 10%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
