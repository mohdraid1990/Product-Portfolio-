<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container">
      <div class="header__content">
        <router-link to="/" class="header__logo animate fade-in-left">
          <span class="header__logo-text">DirectLine</span>
        </router-link>

        <nav class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }">
          <a href="#home" class="header__link animate fade-in-down animate--delay-1" @click="closeMobileMenu">Главная</a>
          <a href="#services" class="header__link animate fade-in-down animate--delay-2" @click="closeMobileMenu">Услуги</a>
          <a href="#contacts" class="header__link animate fade-in-down animate--delay-3" @click="closeMobileMenu">Контакты</a>
        </nav>

        <button class="header__cta btn btn--primary animate fade-in-right" @click="handleCTA">
          Заказать консультацию
        </button>

        <button
          class="header__mobile-toggle"
          @click="toggleMobileMenu"
          :aria-label="isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent scrolling when mobile menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleCTA = () => {
  alert('Функционал заказа консультации будет добавлен позже')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check scroll position on initial load
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all var(--transition-normal);
  background-color: transparent;
  border-bottom: 1px solid transparent;
  
  &--scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-md);
    padding: 0.75rem 0;
    border-bottom-color: var(--color-border-light);
  }
  
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &__logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    
    &-text {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--color-primary);
      letter-spacing: -0.5px;
    }
  }
  
  &__nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    
    @media (max-width: 992px) {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      max-width: 400px;
      height: 100vh;
      background-color: var(--color-background);
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      box-shadow: var(--shadow-lg);
      transition: right var(--transition-normal);
      z-index: 1001;
      
      &--open {
        right: 0;
      }
    }
  }
  
  &__link {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 600;
    position: relative;
    padding: 0.5rem 0;
    transition: color var(--transition-normal);
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-primary);
      transition: width var(--transition-normal);
    }
    
    &:hover {
      color: var(--color-primary);
      
      &::after {
        width: 100%;
      }
    }
    
    @media (max-width: 992px) {
      font-size: 1.25rem;
      padding: 1rem 0;
    }
  }
  
  &__cta {
    @media (max-width: 992px) {
      display: none;
    }
  }
  
  &__mobile-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1002;
    
    span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--color-text);
      transition: all var(--transition-normal);
    }
    
    @media (max-width: 992px) {
      display: flex;
    }
  }
}

// Mobile menu animation
.header__nav--open + .header__mobile-toggle {
  span {
    &:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
}
</style>

<style lang="scss">
.header {
  &--scrolled {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    border-bottom-color: rgba(0, 0, 0, 0.05);
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0;
  }

  &__logo {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e3a8a;
    transition: color 0.3s ease;

    &:hover {
      color: #3b82f6;
    }
  }

  &__nav {
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background: white;
      flex-direction: column;
      justify-content: center;
      box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
      transition: right 0.3s ease;

      &--open {
        right: 0;
      }
    }
  }

  &__link {
    color: #334155;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #3b82f6;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #3b82f6;

      &::after {
        width: 100%;
      }
    }
  }

  &__cta {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;

    span {
      width: 25px;
      height: 3px;
      background: #1e3a8a;
      transition: all 0.3s ease;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
}
</style>
