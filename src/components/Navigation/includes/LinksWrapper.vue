<template lang="pug">
.links_wrapper
  router-link.link(to="/" exact active-class="active") #[svgWrapper.icon(icon="dashboard")] Dashboard
  router-link.link(to="/categories" active-class="active") #[svgWrapper.icon(icon="folder")] Categories
  router-link.link(to="/statistics" active-class="active") #[svgWrapper.icon(icon="pieChart")] Statistics
</template>

<script>
// Vue
import { defineComponent } from 'vue'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'LinksWrapper',
  components: {
    svgWrapper
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.links_wrapper
  width auto
  df_rsc()
  .link
    width auto
    min-height $size_header_elements
    max-height $size_header_elements
    height 100%
    padding 2px 16px
    text(16px, 500, normal, 1, left)
    color $color_app_grey
    border-radius $size_radius
    df_rsc()
    transition $transition
    .icon
      max-width 16px
      max-height 16px
      margin-right 12px
      fill $color_app_grey
      transition $transition
    // Child
    &:not(:last-child)
      margin-right 24px
    // Active, hover
    &.active
      background-color $color_app_dark
    &.active,
    &:hover
      color $color_app_white
      .icon
        fill $color_app_white
</style>
