<script setup>
import { computeCartTotal } from '@/utils/state'
</script>

<template>
  <div class="cart-total">
    Order Total <span>${{ computeCartTotal() }}</span>
  </div>
</template>

<style scoped>
.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 2rem;
  span {
    font-weight: 700;
    font-size: 1.75rem;
  }
}
</style>
