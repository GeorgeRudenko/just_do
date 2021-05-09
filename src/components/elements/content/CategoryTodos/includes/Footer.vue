<template lang="pug">
.footer_wrapper
  router-link.link(:to="`/categories/${id}`") Go to Category
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  props: {
    /**
     * ID
     */
    id: {
      type: Number,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.footer_wrapper
  width 100%
  padding 16px
  background-color $color_app_dark
  border-top 2px solid $color_app_dark_light
  border-radius 0 0 20px 20px
  df_rcc()
  .link
    text(16px, 600, normal, 1, center)
    user-select none
    color $color_app_white
    &:hover
      text-decoration underline
</style>
