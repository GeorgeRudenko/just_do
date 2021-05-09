<template lang="pug">
.categories_wrapper
  //- Categories
  Category(v-for="(category, key) in categories" :key="key" :category="category")
  //- Add new category
  AddNewCategory
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import Category from '@/components/Categories/Category.vue'
import AddNewCategory from '@/components/Categories/AddNewCategory/index.vue'

export default defineComponent({
  name: 'CategoriesWrapper',
  components: {
    Category,
    AddNewCategory
  },
  props: {
    /**
     * Categories array
     */
    categories: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.categories_wrapper
  max-width 100%
  width 100%
  dFlex(row, flex-start, stretch)
  flex-wrap wrap
</style>
