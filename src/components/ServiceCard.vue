<template>
  <div class="service-card">
    <div class="service-card__icon">
      <slot name="icon"></slot>
    </div>
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__description">{{ description }}</p>
    <button class="service-card__button" @click="$emit('learn-more')">
      Подробнее
      <span class="service-card__arrow">→</span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()

defineEmits<{
  'learn-more': []
}>()
</script>

<style scoped lang="scss">
.service-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    border-color: #3b82f6;
  }

  &__icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    color: #3b82f6;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  &__description {
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  &__button {
    background: none;
    border: none;
    color: #3b82f6;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    transition: all 0.3s ease;

    &:hover {
      gap: 1rem;
    }
  }

  &__arrow {
    transition: transform 0.3s ease;
  }

  &:hover &__arrow {
    transform: translateX(4px);
  }
}
</style>
