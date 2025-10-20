<template>
  <div v-if="product" class="product-view">
    <div class="product-view__hero">
      <div class="container">
        <button class="product-view__back" @click="goBack">
          ← Назад
        </button>
        <div class="product-view__hero-content">
          <div class="product-view__hero-image">
            <img :src="product.image" :alt="product.title">
            <div class="product-view__category">{{ product.category }}</div>
          </div>
          <div class="product-view__hero-text">
            <h1 class="product-view__title">{{ product.title }}</h1>
            <p class="product-view__short-desc">{{ product.shortDescription }}</p>
            <div class="product-view__price">{{ product.price }}</div>
            <button class="product-view__cta" @click="handleOrder">
              Заказать услугу
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="product-view__content">
      <div class="container">
        <div class="product-view__section">
          <h2 class="product-view__section-title">Описание услуги</h2>
          <p class="product-view__text">{{ product.longDescription }}</p>
        </div>

        <Transition name="expand">
          <div v-if="showMore" class="product-view__section product-view__section--highlight">
            <h2 class="product-view__section-title">Что входит в услугу</h2>
            <p class="product-view__text">{{ product.moreDetails }}</p>
          </div>
        </Transition>

        <div class="product-view__actions">
          <button
            class="product-view__toggle"
            @click="showMore = !showMore"
          >
            {{ showMore ? 'Скрыть детали' : 'Показать ещё' }}
            <span class="product-view__toggle-icon" :class="{ 'product-view__toggle-icon--open': showMore }">
              ▼
            </span>
          </button>
        </div>

        <div class="product-view__cta-section">
          <h2>Заинтересовала услуга?</h2>
          <p>Свяжитесь с нами для получения подробной консультации</p>
          <button class="product-view__cta product-view__cta--large" @click="handleOrder">
            Заказать консультацию
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="product-view product-view--not-found">
    <div class="container">
      <h1>Услуга не найдена</h1>
      <button class="product-view__back" @click="goBack">
        ← Вернуться на главную
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useProductsStore } from '../store/products'

const router = useRouter()
const route = useRoute()
const productsStore = useProductsStore()

const showMore = ref(false)

const product = computed(() => {
  const id = route.params.id as string
  return productsStore.getProductById(id)
})

const goBack = () => {
  router.push('/')
}

const handleOrder = () => {
  alert('Функционал заказа услуги будет добавлен позже')
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<style scoped lang="scss">
.product-view {
  padding-top: 80px;
  min-height: 100vh;

  &--not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 2rem;
      color: #1e293b;
      margin-bottom: 2rem;
    }
  }

  &__hero {
    background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
    padding: 3rem 0 4rem;
  }

  &__back {
    background: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    color: #1e3a8a;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateX(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  &__hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__hero-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);

    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      display: block;

      @media (max-width: 968px) {
        height: 300px;
      }
    }
  }

  &__category {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    color: #1e3a8a;
    font-size: 1rem;
  }

  &__hero-text {
    padding: 1rem 0;
  }

  &__title {
    font-size: 3rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 1.5rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  &__short-desc {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  &__price {
    font-size: 2rem;
    font-weight: 800;
    color: #1e3a8a;
    margin-bottom: 2rem;
  }

  &__cta {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    border: none;
    padding: 1.25rem 3rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.125rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
    }

    &--large {
      padding: 1.5rem 4rem;
      font-size: 1.25rem;
    }
  }

  &__content {
    padding: 4rem 0;
  }

  &__section {
    margin-bottom: 3rem;

    &--highlight {
      background: #f8fafc;
      padding: 2.5rem;
      border-radius: 16px;
      border-left: 4px solid #3b82f6;
    }
  }

  &__section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }

  &__text {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #475569;
  }

  &__actions {
    text-align: center;
    margin: 3rem 0;
  }

  &__toggle {
    background: white;
    border: 2px solid #3b82f6;
    color: #3b82f6;
    padding: 1rem 2.5rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;

    &:hover {
      background: #3b82f6;
      color: white;
    }
  }

  &__toggle-icon {
    transition: transform 0.3s ease;
    display: inline-block;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__cta-section {
    text-align: center;
    padding: 4rem 0;
    margin-top: 4rem;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-radius: 20px;

    h2 {
      font-size: 2rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      color: #64748b;
      margin-bottom: 2rem;
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease;
  max-height: 500px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-20px);
}
</style>
