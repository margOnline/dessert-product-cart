<script setup>
import { icons } from '@/utils/assets'
import { state } from '@/utils/cartStore'
import ProductOrderItem from './ProductOrderItem.vue'
import OrderTotal from './OrderTotal.vue'

// function isOrderConfirmed() {
//   return !state.value.orderConfirmed
// }
function resetState() {
  state.value.cartProducts = []
  state.value.cartQty = 0
  state.value.cartTotal = 0
  state.value.orderConfirmed = false
}
</script>

<template>
  <div :class="state.orderConfirmed ? 'overlay' : 'hidden'">
    <div class="modal-container">
      <div class="modal-actions">
        <img :src="icons['orderConfirmed']" alt="order confirmed" />
        <div class="close-modal" @click="resetState()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </div>
      </div>
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <div class="product-order-container">
        <ul>
          <li role="list" v-for="(lineItem, idx) in state.cartProducts" :key="idx">
            <ProductOrderItem :lineItem="lineItem" />
          </li>
        </ul>

        <OrderTotal />
      </div>
      <button class="btn btn-reverse" @click="resetState()">Start New Order</button>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 100%;
  background-color: var(--red);
  color: var(--white);
  border: 1px solid var(--red);
}
p {
  color: var(--rose-500);
}
.modal-container {
  width: 100%;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 50px;
  background-color: var(--white);
  padding: 1rem;
  border-radius: 1rem;
  z-index: 100;
  img {
    width: 3rem;
  }
}
.modal-actions {
  display: flex;
  justify-content: space-between;
}
.close-modal:hover {
  cursor: pointer;
}
.close-modal svg:hover path {
  fill: hsl(14, 65%, 9%);
}
.product-order-container {
  background-color: var(--rose-50);
  margin-block: 1.5rem;
  padding-inline: 1rem;
  border-radius: 1rem;
}
.btn-reverse:hover {
  background-color: var(--red-dark);
  border: 1px solid var(--red-dark);
}
.btn-full-width {
  width: 100%;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 50% black */
  backdrop-filter: blur(3px); /* Optional: blurs background */
  z-index: 100; /* Must be below the modal */
}
.hidden {
  display: none !important;
}

@media (min-width: 46rem) {
  .modal-container {
    width: 80%;
    top: 3rem;
    left: 10%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
