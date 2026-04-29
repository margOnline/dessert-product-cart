<script setup>
import { computeCartQty, findCartProduct, removeCartProduct, state } from '@/utils/state'

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
          <span class="product-qty">{{ cartLineQty() }}x</span>
          <span>@ ${{ props.product.price.toFixed(2) }}</span>
          <span class="total">${{ cartLineAmt() }}</span>
        </p>
      </div>
      <button class="remove" @click="removeItemFromCart()" :disabled="state.orderConfirmed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
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
  .product-qty {
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
  border: 2px solid var(--rose-900);
}
.remove svg:hover path {
  fill: hsl(14, 65%, 9%);
}
</style>
