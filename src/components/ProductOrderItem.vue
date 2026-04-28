<script setup>
const props = defineProps({
  lineItem: Object,
})
</script>

<template>
  <div class="order-item-container">
    <img :src="props.lineItem.image.thumbnail" alt="" />
    <div class="order-item-details">
      <h4>{{ props.lineItem.name }}</h4>
      <p class="product-price">
        <span class="product-qty"> {{ props.lineItem.qty }}x</span>@ ${{
          props.lineItem.price.toFixed(2)
        }}
      </p>
    </div>
    <p class="product-item-total">${{ props.lineItem.price.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
.order-item-container {
  padding: 2rem 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 6fr 1fr;
  img {
    max-width: 75px;
  }
  .product-item-total {
    justify-self: end;
    align-self: center;
  }
}
.order-item-details {
  border-bottom: 1px solid var(--rose-100);
  margin-block-start: 1rem;
  .product-qty {
    color: var(--red);
    font-weight: 700;
    margin-inline-end: 1rem;
  }
  .product-price {
    margin-block-start: 1rem;
    color: var(--rose-500);
  }
}
img {
  border-radius: 0.5rem;
}
</style>
