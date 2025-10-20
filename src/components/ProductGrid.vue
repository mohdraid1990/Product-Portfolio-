<template>
  <section id="products" class="product-grid">
    <div class="container">
      <div class="product-grid__header">
        <h2 class="product-grid__title">Наши услуги</h2>
        <p class="product-grid__subtitle">
          Выберите подходящее решение для вашего бизнеса
        </p>
      </div>
      <div class="product-grid__items">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductsStore } from '../store/products'
import ProductCard from './ProductCard.vue'

const productsStore = useProductsStore()
const products = computed(() => productsStore.products)
</script>

<style scoped lang="scss">
.product-grid {
  padding: 80px 0;
  background: white;

  &__header {
    text-align: center;
    margin-bottom: 4rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  &__subtitle {
    font-size: 1.25rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
