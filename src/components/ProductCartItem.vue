<script setup>
import { computeCartQty, findCartProduct, removeCartProduct, state } from '@/utils/state'
import { icons } from '@/utils/assets'
const props = defineProps({
  product: Object,
})

const cartLineQty = () => {
  const cartLineProduct = findCartProduct(props.product.name)
  return cartLineProduct.qty
}
const cartLineAmt = () => {
  return `${(cartLineQty() * props.product.price).toFixed(2)}`
}
const removeItemFromCart = () => {
  removeCartProduct(props.product.name)
  state.value.cartQty = computeCartQty()
}
</script>

<template>
  <div class="cart-item">
    <h4>{{ props.product.name }}</h4>
    <div class="cart-item-price-container">
      <div class="cart-item-cost">
        <p class="item-total">
          <span class="quantity">{{ cartLineQty() }}x</span>
          <span>@ ${{ props.product.price }}</span>
          <span class="total">${{ cartLineAmt() }}</span>
        </p>
      </div>
      <button class="remove" @click="removeItemFromCart()">
        <img :src="icons['removeFromCart']" alt="remove" />
      </button>
    </div>
  </div>
</template>

<style>
.cart-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 0.5rem;
  margin-block: 0.5rem;
  border-bottom: 1px solid var(--rose-300);
}
.cart-item-price-container {
  display: flex;
  justify-content: space-between;
  padding-block: 0.75rem;
}
.cart-item-cost {
  display: flex;
  justify-content: flex-start;
}
.item-total {
  color: var(--rose-400);
  .quantity {
    color: var(--red);
    font-weight: 700;
    margin-inline-end: 1rem;
  }
  .total {
    font-weight: 700;
    margin-inline-start: 0.5rem;
  }
}
.remove {
  padding: 0;
  border: 2px solid var(--rose-300);
  background-color: white;
  font-weight: 700;
  height: 25px;
  width: 25px;
  align-self: self-end;
}
.remove:hover {
  cursor: pointer;
}
</style>
