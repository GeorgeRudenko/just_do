<template lang="pug">
#content
  //- Header
  PageHeader(title="Categories" :control-panel="true")
  //- Control
  ChildPageControl(:links="childPages")
  //- Categories wrapper
  CategoriesWrapper(:categories="categories")
</template>

<script lang="ts">
// Vue
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
// Types
import { CategoriesGettersEnum, GetCategoriesEnum } from '@/types/categories/types'
// Component
import PageHeader from '@/components/elements/content/Header/index.vue'
import ChildPageControl from '@/components/elements/content/ChildPageControl/index.vue'
import CategoriesWrapper from '@/components/Categories/CategoriesWrapper.vue'

export default defineComponent({
  name: 'Categories',
  components: {
    PageHeader,
    ChildPageControl,
    CategoriesWrapper
  },
  setup () {
    /**
     * Context
     */
    const route = useRoute()
    const store = useStore()

    /**
     * Data
     */
    // # Default child pages data
    const childPages = [
      { to: '/categories', name: 'All Categories' },
      { to: '/categories?key=favourites', name: 'Favourites' }
    ]
    // # Route
    // ## Route query key
    const key = computed<any>(() => route.query.key)
    // ## Route current path
    const routeCurrentPath = computed<any>(() => route.fullPath)
    // # Store
    // ## Current categories type
    const currentCategoriesType = computed<any>(() =>(key.value === 'favourites') ? GetCategoriesEnum.Favourites : GetCategoriesEnum.All)
    // ## Categories
    const categories = computed(() => store.getters[CategoriesGettersEnum.GetCategories](currentCategoriesType.value))

    /**
     * Return
     */
    return {
      // Data
      childPages,
      routeCurrentPath,
      categories
    }
  }
})
</script>
