<script setup>
import products from './data.json'
import ProductItem from './components/ProductItem.vue'
import ProductCart from './components/ProductCart.vue'
import ProductOrderModal from './components/ProductOrderModal.vue'
import { state } from './utils/state'
</script>

<template>
  <main>
    <h1>Desserts</h1>
    <ProductOrderModal v-if="state.orderConfirmed" />
    <div class="products-container">
      <ProductItem v-for="(product, idx) in products" :key="idx" :product="product"> </ProductItem>
    </div>
    <ProductCart />
  </main>
</template>

<style scoped>
.products-container {
  margin-top: 2rem;
}
@media (min-width: 46rem) {
  .products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
</style>
