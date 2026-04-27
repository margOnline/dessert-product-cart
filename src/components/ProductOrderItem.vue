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
  padding: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 4fr 1fr;
  .product-item-total {
    justify-self: end;
    align-self: center;
  }
}
.order-item-details {
  /* display: grid;
 
  /* align-items: center; */
  border-bottom: 1px solid var(--rose-100);
  margin-block-start: 1rem;
  /* padding: 1rem;
  color: var(--rose-900);
  .order-item-text {
    margin-inline-start: 1rem;
    display: flex;
    flex-direction: column;
  } */
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
