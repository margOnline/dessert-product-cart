<script setup>
import ProductButton from './ProductButton.vue'
import { state, findCartProduct } from '@/utils/state'

const props = defineProps({
  product: Object,
})
function toggleSelected() {
  return findCartProduct(props.product.name) ? 'selected' : ''
}
function handleAddToCart() {
  state.value.cartProducts.push({ ...props.product, qty: 1 })
  state.value.cartQty += 1
}
</script>

<template>
  <div class="product-container" :class="toggleSelected()">
    <img :src="props.product.image.mobile" :alt="product.name" />
    <div class="product-btn">
      <ProductButton @add-to-cart="handleAddToCart" :product="props.product" />
    </div>
    <p class="product-category">{{ props.product.category }}</p>
    <h2>{{ props.product.name }}</h2>
    <p class="product-price">${{ props.product.price.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
img {
  display: inline-block;
  border-radius: 1rem;
}
.product-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.product-btn {
  margin-block-start: -1rem;
  align-self: center;
}
.product-category {
  color: var(--rose-500);
}
.product-price {
  color: var(--red);
  font-weight: 400;
}
.selected {
  border: 1px solid var(--red);
  border-radius: 1rem;
}
</style>
