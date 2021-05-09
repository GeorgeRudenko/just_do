<template lang="pug">
.content_header
  //- Prev button
  button.prev_link(v-if="prevLink !== ''") #[svgWrapper.icon(icon="arrow")]
  //- Title
  h4.title {{ title }}
  //- Control
  .control_wrapper(v-if="controlPanel === true")
    button.button ⋯
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
      required: true
    },
    /**
     * Prev link
     */
    prevLink: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Control panel view status
     */
    controlPanel: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.content_header
  max-width 100%
  width 100%
  margin-bottom 24px
  df_rss()
  // # Prev page link
  .prev_link
    min-width $size_content_header
    max-width $size_content_header
    width 100%
    min-height $size_content_header
    max-height $size_content_header
    height 100%
    margin-left 16px
    background-color $color_app_dark_light
    border-radius $size_radius_big
    df_rcc()
    transition $transition
    .icon
      max-width 12px
      width 100%
      max-height 12px
      height 100%
      fill $color_app_white
      transform rotate(180deg)
      transition $transition
    // Hover
    &:hover
      background-color $color_app_white
      .icon
        fill $color_app_black
  // # Title
  .title
    text(24px, 600, normal, 1, left)
    margin 4px 0 0 0
    color $color_app_white
  // # Control wrapper
  .control_wrapper
    margin-left auto
    df_rsc()
    .button
      min-width $size_content_header
      max-width $size_content_header
      width 100%
      min-height $size_content_header
      max-height $size_content_header
      height 100%
      text(18px, 700, normal, 0.5, center)
      padding-top 1px
      color $color_app_white
      background-color transparent
      border-radius $size_radius_big
      df_rcc()
      transition $transition
      // Hover
      &:hover
        color $color_app_black
        background-color $color_app_white
</style>
