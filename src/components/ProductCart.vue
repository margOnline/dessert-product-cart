<script setup>
import { icons } from '@/utils/assets'
import { state } from '@/utils/state'
import ProductCartItem from './ProductCartItem.vue'
import OrderTotal from './OrderTotal.vue'
import ProductCartMessage from './ProductCartMessage.vue'

function cartIsEmpty() {
  return state.value.cartQty === 0
}
function confirmOrder() {
  state.value.orderConfirmed = true
}
</script>

<template>
  <div class="cart-container">
    <h3>Your Cart ({{ state.cartQty }})</h3>

    <div v-if="cartIsEmpty()" class="img-container">
      <img :src="icons['emptyCart']" alt="" />
      <p>Your added items will appear here</p>
    </div>

    <div v-else>
      <ProductCartItem
        v-for="(product, idx) in state.cartProducts"
        class="cart-item-container"
        :key="idx"
        :product="product"
      />
      <OrderTotal />
      <ProductCartMessage />
      <button @click="confirmOrder()" :disabled="state.orderConfirmed">Confirm Order</button>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  margin-block: 2rem;
  background-color: var(--white);
  padding: 1rem;
  border-radius: 1rem;
}
h3 {
  font-size: 1.5rem;
  color: var(--red);
  font-weight: 700;
}
.img-container {
  display: grid;
  img {
    justify-self: center;
  }
  p {
    font-size: 0.75rem;
    text-align: center;
  }
}
button {
  width: 100%;
  padding-block: 1rem;
  background-color: var(--red);
  border: 1px solid var(--red);
  color: var(--white);
  font-weight: 700;
}
button:hover {
  cursor: pointer;
  background-color: var(--red-dark);
  border: 1px solid var(--red-dark);
}
</style>
