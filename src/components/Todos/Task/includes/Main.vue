<template lang="pug">
//- # Main content
.main_content(:class="[color]")
  //- ## Task status
  .status_checkbox.border_color(:class="{active: completed, bg_color: completed}" @click.prevent="completedEvent()")
    svgWrapper.check(v-if="completed === true" icon="check" :class="[color]")
  //- ## Task title
  strong.title(:class="{completed: completed}") {{ title }}
  //- ## Toggle child task
  button.toggle_child(v-if="childLength > 0" :class="{active: childView}" @click.prevent="childViewEvent()") #[svgWrapper.icon(icon="arrow")]
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'Main',
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
     * Completed status
     */
    completed: {
      type: Boolean,
      required: true
    },
    /**
     * Completed event
     */
    completedEvent: {
      type: Function,
      required: true
    },
    /**
     * Child length
     */
    childLength: {
      type: Number,
      required: true
    },
    /**
     * Child view
     */
    childView: {
      type: Boolean,
      required: true
    },
    /**
     * Child view event
     */
    childViewEvent: {
      type: Function,
      required: true
    },
    /**
     * Color
     */
    color: {
      type: String,
      required: false,
      default: 'pink'
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// # Main content
.main_content
  width 100%
  df_rss()
  // Checkbox
  .status_checkbox
    max-width 26px
    min-width 26px
    width 100%
    max-height 26px
    min-height 26px
    height 100%
    margin-right 16px
    background-color transparent
    border 2px solid $color_app_pink
    border-radius 10px
    df_ccc()
    cursor pointer
    position relative
    .check
      max-width 16px
      width 100%
      max-height 16px
      height 100%
      fill $color_app_dark
    // ## Active
    &.active
      background-color $color_app_pink
  // Title
  .title
    width 100%
    text(16px, 500, normal, 1, left)
    margin 4px 0 0 0
    color $color_app_white
    &.completed
      text-decoration line-through
  // Toggle child task
  .toggle_child
    toggle_icon()
  // # Color schema
  color_schema()
</style>
