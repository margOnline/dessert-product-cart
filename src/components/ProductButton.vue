<script setup>
import { icons } from '@/utils/assets'
import {
  findCartProduct,
  computeCartQty,
  computeCartTotal,
  removeCartProduct,
  state,
} from '@/utils/cartStore'

const props = defineProps({ product: Object })
const emit = defineEmits(['addToCart'])

function inCart() {
  return findCartProduct(props.product.name)
}
function productQuantity() {
  return inCart()?.qty
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
  <button v-else class="btn-quantity-amender btn-reverse" :disabled="state.orderConfirmed">
    <span class="decrement" @click="decrementQuantity()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 2">
        <path d="M0 .375h10v1.25H0V.375Z" />
      </svg>
    </span>
    <div>{{ productQuantity() }}</div>
    <span class="increment" @click="incrementQuantity()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
        <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
      </svg>
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
  img {
    width: 20px;
  }
}
.btn-reverse {
  background-color: var(--red);
}
.btn:hover {
  color: var(--red);
}
.btn-quantity-amender {
  width: 9rem;
  padding: 1.2rem 1rem;
  height: 2rem;
  border-radius: 2rem;
  border: none;
  background: var(--red);
  margin: 0 auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.increment svg,
.decrement svg {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 2px;
  cursor: pointer;
  fill: #fff;
  transition: background 0.2s ease-out;
}
.increment svg:hover,
.decrement svg:hover {
  background: var(--white);
  fill: var(--red);
  cursor: pointer;
}
</style>
