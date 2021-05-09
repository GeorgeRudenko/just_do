<template lang="pug">
button.base_button(:type="type" @click.prevent="event()") {{ text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    /**
     * Button type
     */
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    /**
     * Button event
     */
    event: {
      type: Function,
      required: true
    },
    /**
     * Button text
     */
    text: {
      type: String,
      required: false,
      default: 'Base button'
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.base_button
  width auto
  min-height $size_field
  max-height $size_field
  color $color_primary
  background-color transparent
  border 1px solid $color_primary
  border-radius $size_radius
  text(14px, 600, 1, normal, center)
  mgPd($size_margin, $size_padding)
  df_rcc()
  transition $transition
  // # Active & Hover
  &.active,
  &:not(.active):hover,
  &:not(:focus):hover,
  &:not([disabled]):hover
    color $color_white
    background-color $color_primary
  // # Disabled
  &[disabled]
    opacity 0.75
</style>
