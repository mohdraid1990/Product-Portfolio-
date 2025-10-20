<template>
  <footer id="contacts" class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__column">
          <h3 class="footer__logo">DirectLine</h3>
          <p class="footer__description">
            Профессиональная генерация лидов и настройка отделов продаж для вашего бизнеса.
          </p>
        </div>

        <div class="footer__column">
          <h4 class="footer__title">Навигация</h4>
          <ul class="footer__links">
            <li><a href="#home">Главная</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#products">Продукты</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <h4 class="footer__title">Услуги</h4>
          <ul class="footer__links">
            <li><a href="#products">Генерация лидов</a></li>
            <li><a href="#products">Холодные звонки</a></li>
            <li><a href="#products">CRM-системы</a></li>
            <li><a href="#products">Обучение</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <h4 class="footer__title">Контакты</h4>
          <ul class="footer__contacts">
            <li>📧 sergejhummedov@gmail.com</li>
            <li>📞 +7 960 348-84-11</li>
            <li>📍 г. Саратов, ул. Московская 43</li>
            <li>📍 г. Саратов, ул. Международная 2А</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} DirectLine. Все права защищены.
        </p>
        <div class="footer__social">
         
          <a href="#">Telegram: @business_Direct_Line</a>
          <a href="#">Telegram-канал: @directlain </a>


          <a href="#">WhatsApp: +7 960 348-84-11</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped lang="scss">
.footer {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  padding: 60px 0 30px;

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-bottom: 3rem;

    @media (max-width: 968px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
  }

  &__logo {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__description {
    color: #94a3b8;
    line-height: 1.7;
  }

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }

  &__links,
  &__contacts {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      color: #94a3b8;
      line-height: 1.6;
    }

    a {
      color: #94a3b8;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #60a5fa;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 576px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__copyright {
    color: #94a3b8;
    font-size: 0.9rem;
  }

  &__social {
    display: flex;
    gap: 1rem;
  }

  &__social-link {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.3s ease;

    &:hover {
      background: #3b82f6;
      transform: translateY(-3px);
    }
  }
}
</style>
