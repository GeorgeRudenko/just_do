<template lang="pug">
.page_control(v-if="links.length > 0")
  router-link.child_link(v-for="(link, key) in links" :key="key" :to="link.to" :class="{active: link.to === routeCurrentPath}") {{ link.name }}
</template>

<script lang="ts">
// Vue
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ChildPageControl',
  props: {
    /**
     * Links array
     */
    links: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  setup () {
    /**
     * Context
     */
    const route = useRoute()

    /**
     * Data
     */
    // # Route current path
    const routeCurrentPath = computed<any>(() => route.fullPath)

    /**
     * Return
     */
    return {
      // Data
      routeCurrentPath
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.page_control
  max-width 100%
  width 100%
  margin 16px 0 24px 0
  df_rss()
  .child_link
    width auto
    min-height 42px
    max-height 42px
    text(16px, 600, normal, 1, center)
    mgPd(0 16px 0 0, 4px 16px)
    color $color_app_grey
    background-color transparent
    border 2px solid $color_app_dark_light
    border-radius 16px
    df_rcc()
    transition $transition
    // # last child
    &:last-child
      margin-right 0
    // # Active & Hover
    &.active,
    &:hover
      background-color $color_app_dark_light
</style>
