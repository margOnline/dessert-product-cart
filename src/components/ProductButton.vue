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
  <button v-if="!inCart()" class="btn" @click="emit('addToCart')">
    <img :src="icons['addToCart']" alt="add to cart" />
    Add to cart
  </button>
  <div v-else class="btn-quantity-amender">
    <button class="btn btn-reverse increment">
      <img :src="icons['decrement']" alt="decrement" @click="decrementQuantity()" />
    </button>
    <div>{{ productQuantity() }}</div>
    <button class="btn btn-reverse decrement">
      <img :src="icons['increment']" alt="increment" @click="incrementQuantity()" />
    </button>
  </div>
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
  gap: 0.5rem;
  align-items: center;
  background-color: var(--red);
  border-radius: 2rem;
  color: var(--white);
}
button.amender:hover {
  cursor: pointer;
}
</style>
