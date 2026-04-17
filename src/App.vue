<script setup>
import products from './data.json'
import ProductItem from './components/ProductItem.vue'
import ProductCart from './components/ProductCart.vue'
import ProductOrderModal from './components/ProductOrderModal.vue'
import { state } from './utils/state'

function isOrderConfirmed() {
  return state.value.orderConfirmed
}
</script>

<template>
  <div>
    <h1>Desserts</h1>
    <ProductOrderModal v-if="isOrderConfirmed()"></ProductOrderModal>
    <div class="products-container">
      <ProductItem v-for="(product, idx) in products" :key="idx" :product="product"> </ProductItem>
    </div>
    <ProductCart />
  </div>
</template>

<style scoped>
.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style>
