<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__title animate fade-in-up">
            Увеличьте продажи с профессиональной
            <span class="hero__title--highlight">генерацией лидов</span>
          </h1>
          <p class="hero__subtitle animate fade-in-up animate--delay-1">
            Мы помогаем компаниям находить качественных клиентов и выстраивать эффективные
            процессы продаж. Более 500 довольных клиентов за 5 лет работы.
          </p>
          <div class="hero__actions animate fade-in-up animate--delay-2">
            <button class="btn btn--primary hero__cta" @click="handlePrimaryCTA">
              Получить консультацию
            </button>
            <button class="btn btn--outline hero__cta" @click="scrollToServices">
              Узнать больше
            </button>
          </div>
          <div class="hero__stats animate fade-in-up animate--delay-3">
            <div class="hero__stat animate scale-in animate--delay-4">
              <div class="hero__stat-value">500+</div>
              <div class="hero__stat-label">Клиентов</div>
            </div>
            <div class="hero__stat animate scale-in animate--delay-5">
              <div class="hero__stat-value">10 000+</div>
              <div class="hero__stat-label">Лидов в месяц</div>
            </div>
            <div class="hero__stat animate scale-in animate--delay-6">
              <div class="hero__stat-value">25%</div>
              <div class="hero__stat-label">Средняя конверсия</div>
            </div>
          </div>
        </div>
        <div class="hero__image animate fade-in-left">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Команда профессионалов"
            loading="lazy"
          >
        </div>
      </div>
    </div>
    <div class="hero__shape hero__shape--1"></div>
    <div class="hero__shape hero__shape--2"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const handlePrimaryCTA = () => {
  alert('Функционал заказа консультации будет добавлен позже')
}

const scrollToServices = () => {
  const servicesSection = document.getElementById('services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Add animation classes when component is mounted
  const animateElements = document.querySelectorAll('.animate')
  animateElements.forEach(element => {
    element.classList.add('animate')
  })
})
</script>

<style scoped lang="scss">
.hero {
  padding: 8rem 0 5rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-alt) 100%);
  
  @media (max-width: 768px) {
    padding: 7rem 0 4rem;
  }
  
  &__content {
    display: flex;
    align-items: center;
    gap: 3rem;
    
    @media (max-width: 992px) {
      flex-direction: column;
      text-align: center;
    }
  }
  
  &__text {
    flex: 1;
    max-width: 600px;
    
    @media (max-width: 992px) {
      max-width: 100%;
    }
  }
  
  &__title {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 800;
    
    @media (max-width: 1200px) {
      font-size: 3rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 576px) {
      font-size: 2rem;
    }
    
    &--highlight {
      color: var(--color-primary);
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0.2em;
        left: 0;
        width: 100%;
        height: 0.3em;
        background-color: rgba(59, 130, 246, 0.2);
        z-index: -1;
        border-radius: 2px;
      }
    }
  }
  
  &__subtitle {
    font-size: 1.25rem;
    color: var(--color-text-light);
    margin-bottom: 2rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
  
  &__actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    
    @media (max-width: 992px) {
      justify-content: center;
    }
    
    @media (max-width: 576px) {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  &__cta {
    padding: 0.875rem 1.75rem;
    font-size: 1.125rem;
    
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  
  &__stats {
    display: flex;
    gap: 2.5rem;
    
    @media (max-width: 992px) {
      justify-content: center;
    }
    
    @media (max-width: 576px) {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
  
  &__stat {
    text-align: center;
    
    &-value {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-primary);
      line-height: 1;
      margin-bottom: 0.5rem;
    }
    
    &-label {
      font-size: 1rem;
      color: var(--color-text-light);
      font-weight: 500;
    }
  }
  
  &__image {
    flex: 1;
    max-width: 500px;
    
    img {
      width: 100%;
      height: auto;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-xl);
      transform: perspective(1000px) rotateY(-5deg);
      transition: transform var(--transition-normal);
      
      &:hover {
        transform: perspective(1000px) rotateY(0);
      }
    }
    
    @media (max-width: 992px) {
      max-width: 100%;
      
      img {
        transform: none;
        max-width: 500px;
        margin: 0 auto;
      }
    }
  }
  
  &__shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.5;
    z-index: -1;
    
    &--1 {
      width: 300px;
      height: 300px;
      background-color: rgba(59, 130, 246, 0.3);
      top: -100px;
      right: -100px;
      animation: float 8s ease-in-out infinite;
    }
    
    &--2 {
      width: 200px;
      height: 200px;
      background-color: rgba(16, 185, 129, 0.3);
      bottom: -50px;
      left: -50px;
      animation: float 6s ease-in-out infinite reverse;
    }
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
}


</style>
