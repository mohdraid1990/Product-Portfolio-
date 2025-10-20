<template>
  <div class="product-card hover-lift" @click="goToProduct">
    <div class="product-card__image">
      <img :src="product.image" :alt="product.title" loading="lazy">
      <div class="product-card__category animate fade-in">{{ product.category }}</div>
      <div class="product-card__overlay">
        <button class="btn btn--primary product-card__quick-view" @click.stop="goToProduct">
          Быстрый просмотр
        </button>
      </div>
    </div>
    <div class="product-card__content">
      <h3 class="product-card__title">{{ product.title }}</h3>
      <p class="product-card__description">{{ product.shortDescription }}</p>
      <div class="product-card__footer">
        <span class="product-card__price">{{ product.price }}</span>
        <button class="btn btn--outline product-card__button" @click.stop="goToProduct">
          Подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Product } from '../store/products'

const props = defineProps<{
  product: Product
}>()

const router = useRouter()

const goToProduct = () => {
  router.push(`/product/${props.product.id}`)
}
</script>

<style scoped lang="scss">
.product-card {
  background: var(--color-background);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  border: 1px solid var(--color-border);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--color-primary);

    .product-card__overlay {
      opacity: 1;
      visibility: visible;
    }

    .product-card__image img {
      transform: scale(1.1);
    }
  }

  &__image {
    position: relative;
    height: 220px;
    overflow: hidden;
    background: #f1f5f9;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
  }

  &__quick-view {
    transform: translateY(10px);
    transition: transform var(--transition-normal);
    
    .product-card:hover & {
      transform: translateY(0);
    }
  }

  &__category {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--color-primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 1;
    box-shadow: var(--shadow-sm);
  }

  &__content {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text);
    transition: color var(--transition-normal);
    
    .product-card:hover & {
      color: var(--color-primary);
    }
  }

  &__description {
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: var(--spacing-lg);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex-grow: 1;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    
    @media (max-width: 576px) {
      flex-direction: column;
      gap: var(--spacing-sm);
      align-items: flex-start;
    }
  }

  &__price {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-primary);
  }

  &__button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    
    @media (max-width: 576px) {
      width: 100%;
    }
  }
}
</style>
