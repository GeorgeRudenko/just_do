<template lang="pug">
.checkbox_wrapper
  // Field
  input.field(
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    :name="name"
    :id="id"
    :disabled="disabled"
    :class="{checkbox: type === 'checkbox', toggle: type === 'toggle'}"
    hidden
  )
  // Custom checbox
  label.preview_checkbox(v-if="type === 'checkbox'" :for="id")
    svgWrapper.check(v-if="modelValue === true" icon="check")
  // Custom toggle
  label.preview_toggle(v-if="type === 'toggle'" :for="id")
    span.ball
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// SVG
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'Checkbox',
  components: {
    svgWrapper
  },
  props: {
    /**
     * Input value
     */
    modelValue: {
      type: [String, Number, Boolean],
      required: false,
      default: null
    },
    /**
     * Input type
     * Custom types:
     * – Checkbox
     * – Toggle
     */
    type: {
      type: String,
      required: false,
      default: 'checkbox'
    },
    /**
     * Input name
     */
    name: {
      type: String,
      required: false,
      default: 'base_input'
    },
    /**
     * Input ID
     */
    id: {
      type: String,
      required: false,
      default: 'base_input'
    },
    /**
     * Input required status
     */
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Input disabled status
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.checkbox_wrapper
  width auto
  height auto
  df_rcc()
  // Input
  .field
    display none
    // # Checkbox type
    &.checkbox
      base_checkbox()
    // # Checkbox type
    &.toggle
      // ## Custom checkbox
      & ~ .preview_toggle
        max-width 62px
        min-width 62px
        width 100%
        max-height $size_field_small
        min-height $size_field_small
        height 100%
        background-color transparent
        border 1px solid $color_black
        border-radius 50px
        df_rcc()
        cursor pointer
        overflow hidden
        position relative
        // ## Bg
        &::before
          content ''
          width 100%
          height 100%
          background-color $color_success
          border-radius 50px
          transition $transition
          position absolute
          top 0
          right -100%
          bottom 0
          z-index 0
        // ## Ball
        .ball
          width 23px
          height 23px
          background-color $color_black
          border-radius 50%
          df_ccc()
          transform translateX(-16px)
          transition $transition
          z-index 1
      // ## Active
      &:checked ~ .preview_toggle
        &::before
          right 0%
        .ball
          background-color $color_white
          transform translateX(15px)
</style>
