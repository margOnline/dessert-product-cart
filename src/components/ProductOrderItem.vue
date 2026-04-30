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
  padding: 0.5rem 1rem;
  align-items: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 6fr 1fr;
  img {
    width: 3rem;
  }
  .product-item-total {
    justify-self: end;
    align-self: center;
  }
}
.order-item-details {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--rose-100);
  .product-qty {
    color: var(--red);
    font-weight: 700;
    margin-inline-end: 1rem;
  }
  .product-price {
    color: var(--rose-500);
  }
}
img {
  border-radius: 0.5rem;
}
</style>
