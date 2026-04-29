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
  <div class="product-container">
    <img
      class="img-mobile"
      :class="toggleSelected()"
      :src="props.product.image.mobile"
      :alt="product.name"
    />
    <img
      class="img-desktop"
      :class="toggleSelected()"
      :src="props.product.image.desktop"
      :alt="product.name"
    />
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
  max-width: 1020px;
  margin-block-start: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    line-height: 1.725rem;
  }
}
.product-btn {
  margin-block-start: -1.5rem;
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
  border: 2px solid var(--red);
  border-radius: 1rem;
}
.img-desktop {
  display: none;
}
@media (min-width: 46rem) {
  .img-desktop {
    display: inline-block;
  }
  .img-mobile {
    display: none;
  }
  .product-container h2 {
    font-size: 1rem;
  }
  .product-category,
  .product-price {
    font-size: 0.825rem;
  }
}
</style>
