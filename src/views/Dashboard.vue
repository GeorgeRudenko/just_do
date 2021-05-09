<template lang="pug">
#content
  //- Header
  PageHeader(title="Dashboard" :controlPanel="true")
  //- Greeting
  PageGreeting
  //- Control
  ChildPageControl(:links="childPages")
  //- Category todos
  CategoryTodos(v-for="(category, key) in categories" :key="key" :category="category" :is-daily="isDailyTodos")
</template>

<script lang="ts">
// Vue
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
// Interfaces & Types
import { CategoriesGettersEnum } from '@/types/categories/types'
// Component
import PageHeader from '@/components/elements/content/Header/index.vue'
import PageGreeting from '@/components/elements/content/Greeting/index.vue'
import ChildPageControl from '@/components/elements/content/ChildPageControl/index.vue'
import CategoryTodos from '@/components/elements/content/CategoryTodos/index.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    PageHeader,
    PageGreeting,
    ChildPageControl,
    CategoryTodos
  },
  setup () {
    /**
     * Context
     */
    const store = useStore()
    const route = useRoute()

    /**
     * Data
     */
    // # Default child pages data
    const childPages = [
      { to: '/', name: 'All' },
      { to: '/?key=daily', name: 'Daily overview' }
    ]
    // ––––––––––––––––––––
    // Categories
    const categories = computed(() => store.getters[CategoriesGettersEnum.GetAllCategories])
    // Todos type
    const isDailyTodos = computed<boolean>(() => route.query.key === 'daily')
    // View completed todos
    const viewCompletedTodos = ref<boolean>(false)

    return {
      // Data
      categories,
      childPages,
      isDailyTodos,
      viewCompletedTodos
    }
  }
});
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'
</style>
