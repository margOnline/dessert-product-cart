<script setup>
import { icons } from '@/utils/assets'
</script>

<template>
  <div class="carbon-neutral">
    <img :src="icons['carbonNeutral']" alt="green tree" />
    <p>This is a <span>carbon-neutral </span>delivery</p>
  </div>
</template>

<style scoped>
.carbon-neutral {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-block: 1.5rem;
  padding: 1rem 2rem;
  background-color: var(--color-background);
  border-radius: 1rem;
  span {
    font-weight: 700;
  }
  img {
    width: 1rem;
  }
}
</style>
