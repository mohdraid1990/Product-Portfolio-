import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import productsData from '../data/products.json'

export interface Product {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  moreDetails: string
  category: string
  price: string
  image: string
}

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>(productsData)

  const getProductById = computed(() => {
    return (id: string) => products.value.find(p => p.id === id)
  })

  const getProductsByCategory = computed(() => {
    return (category: string) => products.value.filter(p => p.category === category)
  })

  return {
    products,
    getProductById,
    getProductsByCategory
  }
})
