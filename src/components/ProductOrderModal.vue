<script setup>
import { icons } from '@/utils/assets'
import { state } from '@/utils/state'
import OrderItem from './OrderItem.vue'
import OrderTotal from './OrderTotal.vue'
</script>

<template>
  <div class="modal-container">
    <img :src="icons['orderConfirmed']" alt="checkmark" />
    <h2>Order Confirmed</h2>
    <p>We hope you enjoy your food!</p>
    <ul>
      <li role="list" v-for="(lineItem, idx) in state.cartProducts" :key="idx">
        <OrderItem :lineItem="lineItem" />
      </li>
    </ul>

    <OrderTotal />
  </div>
</template>

<style scoped>
.modal-container {
}
</style>
