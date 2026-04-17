<script setup>
import { convertImgFilename } from '@/utils/assets'

const props = defineProps({
  lineItem: Object,
})

console.log('props:', props.lineItem)
</script>

<template>
  <div class="order-item-container">
    <div class="order-item-details">
      <img :src="convertImgFilename(props.lineItem.image.thumbnail)" alt="" />
      <div class="order-text">
        <h4>{{ props.lineItem.name }}</h4>
        <p>
          {{ props.lineItem.qty }}x <span>${{ props.lineItem.price }}</span>
        </p>
      </div>
    </div>
    <p>{{ props.lineItem.price }}</p>
  </div>
</template>

<style scoped>
.order-item-container {
  display: flex;
  justify-content: space-between;
}
</style>
