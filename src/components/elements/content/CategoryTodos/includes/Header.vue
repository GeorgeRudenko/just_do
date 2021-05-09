<template lang="pug">
.header_wrapper(:class="[color]" @click.prevent="event()")
  //- Icon
  .icon_wrapper.small.bg_color
    svgWrapper.icon(:icon="icon" :class="[color]")
  //- Title
  strong.title {{ title }}
  //- Toggle arrow
  button.control(:class="{active: viewStatus}") #[svgWrapper.icon(icon="arrow")]
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'Header',
  components: {
    svgWrapper
  },
  props: {
    /**
     * Title
     */
    title: {
      type: String,
      require: true
    },
    /**
     * Icon
     */
    icon: {
      type: String,
      require: true
    },
    /**
     * Color
     */
    color: {
      type: String,
      require: true
    },
    /**
     * View content status
     */
    viewStatus: {
      type: Boolean,
      require: true
    },
    /**
     * Event (for toggle view content status)
     */
    event: {
      type: Function,
      require: true
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.header_wrapper
  width 100%
  padding 16px
  background-color $color_app_dark_light
  border-radius 20px 20px 0 0
  df_rsc()
  cursor pointer
  // Icon
  .icon_wrapper
    margin-right 12px
    preview_icon()
  // Title
  .title
    text(18px, 600, normal, 1, left)
    user-select none
    color $color_app_white
  // Control
  .control
    margin-left auto
    toggle_icon()
  // # Color schema
  color_schema()
</style>
