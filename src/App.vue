<script setup>
import products from './data.json'
import ProductItem from './components/ProductItem.vue'
import ProductCart from './components/ProductCart.vue'
import ProductOrderModal from './components/ProductOrderModal.vue'
import { state } from './utils/cartStore'
import { toCamelCase } from './utils/helpers'

</script>

<template>
  <main>
    <div class="content-container">
      <h1>Desserts</h1>
      <ProductOrderModal v-if="state.orderConfirmed" />
      <div class="products-container">
        <ProductItem
          v-for="product in products"
          :key="toCamelCase(product.name)"
          :product="product"
        >
        </ProductItem>
      </div>
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
@media (min-width: 61rem) {
  main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-block-start: 1rem;
  }
}
</style>
