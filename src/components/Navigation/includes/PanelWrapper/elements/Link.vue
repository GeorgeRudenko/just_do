<template lang="pug">
router-link.link_wrapper(:to="route" :class="[color, {active: route === routeCurrentPath}]")
  //- Icon
  .icon_wrapper.bg_color
    svgWrapper.icon(:icon="icon" :class="[color]")
  //- Label
  .label {{ text }}
</template>

<script lang="ts">
// Vue
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'Link',
  components: {
    svgWrapper
  },
  props: {
    /**
     * Link route
     */
    route: {
      type: String,
      required: true
    },
    /**
     * Link text
     */
    text: {
      type: String,
      required: false,
      default: 'Link'
    },
    /**
     * Link icon
     */
    icon: {
      type: String,
      required: false,
      default: 'dashboard'
    },
    /**
     * Link color
     */
    color: {
      type: String,
      required: false,
      default: 'mint'
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
      routeCurrentPath
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.link_wrapper
  width 100%
  min-height $size_panel_elements_big
  max-height $size_panel_elements_big
  height 100%
  padding $size_panel_elements_padding
  df_rsc()
  transition $transition
  // Icon
  .icon_wrapper
    margin-right 16px
    preview_icon()
  // Label
  .label
    text(18px, 600, normal, 1, left)
    color $color_app_white
  // Active & Hover
  &.active,
  &:hover
    background-color $color_app_dark
  // # Color schema
  color_schema()
</style>
