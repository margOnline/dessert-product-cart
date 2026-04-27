<script setup>
import { icons } from '@/utils/assets'
import {
  findCartProduct,
  computeCartQty,
  computeCartTotal,
  removeCartProduct,
  state,
} from '@/utils/state'

const props = defineProps({ product: Object })
const emit = defineEmits(['addToCart'])

function inCart() {
  return findCartProduct(props.product.name)
}
function productQuantity() {
  return inCart().qty
}
function incrementQuantity() {
  const cartProduct = findCartProduct(props.product.name)
  cartProduct.qty++
  updateCart()
}
function decrementQuantity() {
  const cartProduct = findCartProduct(props.product.name)
  cartProduct.qty--
  if (cartProduct.qty === 0) {
    removeCartProduct(props.product.name)
  }
  updateCart()
}
function updateCart() {
  state.value.cartTotal = computeCartTotal()
  state.value.cartQty = computeCartQty()
}
</script>
<template>
  <button v-if="!inCart()" class="btn" @click="emit('addToCart')" :disabled="state.orderConfirmed">
    <img :src="icons['addToCart']" alt="add to cart" />
    Add to cart
  </button>
  <button v-else class="btn-quantity-amender" :disabled="state.orderConfirmed">
    <span class="btn btn-reverse increment">
      <img :src="icons['decrement']" alt="decrement" @click="decrementQuantity()" />
    </span>
    <div>{{ productQuantity() }}</div>
    <span class="btn btn-reverse decrement">
      <img :src="icons['increment']" alt="increment" @click="incrementQuantity()" />
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: var(--white);
  border: 1px solid var(--red);
}
.btn-reverse {
  background-color: var(--red);
  border: 1px solid var(--white);
}
.btn:hover {
  color: var(--red);
}
.btn-quantity-amender {
  display: flex;
  padding: 0.125rem 0.825rem;
  gap: 0.5rem;
  align-items: center;
  background-color: var(--red);
  border-radius: 2rem;
  border: none;
  color: var(--white);
}
button.amender:hover {
  cursor: pointer;
}
.increment,
.decrement {
  border: 1px solid var(--red);
}
.increment img,
.decrement img {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--white);
  border-radius: 2rem;
}

</style>
