<template>
  <div class="home">
    <Hero />

    <section id="services" class="services">
      <div class="container">
        <div class="services__header">
          <h2 class="services__title">Что мы предлагаем</h2>
          <p class="services__subtitle">
            Комплексные решения для роста вашего бизнеса
          </p>
        </div>
        <div class="services__grid">
          <ServiceCard
            title="Генерация лидов"
            description="Находим целевых клиентов и передаем вам готовые контакты с высокой конверсией в продажи."
            @learn-more="scrollToProducts"
          >
            <template #icon>🎯</template>
          </ServiceCard>

          <ServiceCard
            title="Холодные звонки"
            description="Профессиональный обзвон потенциальных клиентов с использованием проверенных скриптов."
            @learn-more="scrollToProducts"
          >
            <template #icon>📞</template>
          </ServiceCard>

          <ServiceCard
            title="CRM и автоматизация"
            description="Внедрение и настройка систем управления клиентами для повышения эффективности продаж."
            @learn-more="scrollToProducts"
          >
            <template #icon>⚙️</template>
          </ServiceCard>

          <ServiceCard
            title="Обучение команды"
            description="Практические тренинги по продажам, переговорам и работе с возражениями клиентов."
            @learn-more="scrollToProducts"
          >
            <template #icon>📚</template>
          </ServiceCard>
        </div>
      </div>
    </section>

    <ProductGrid />

    <section class="cta-section">
      <div class="container">
        <div class="cta-section__content">
          <h2 class="cta-section__title">
            Готовы увеличить продажи?
          </h2>
          <p class="cta-section__text">
            Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
          </p>
          <button class="cta-section__button" @click="handleCTA">
            Заказать консультацию
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'
import ServiceCard from '../components/ServiceCard.vue'
import ProductGrid from '../components/ProductGrid.vue'

const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  productsSection?.scrollIntoView({ behavior: 'smooth' })
}

const handleCTA = () => {
  alert('Функционал заказа консультации будет добавлен позже')
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
}

.services {
  padding: 80px 0;
  background: #f8fafc;

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

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
}

.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }

  &__content {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  &__text {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 700px;
    margin: 0 auto 2.5rem;
    line-height: 1.7;
  }

  &__button {
    background: white;
    color: #1e3a8a;
    border: none;
    padding: 1.25rem 3rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.125rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
