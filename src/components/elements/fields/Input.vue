<template lang="pug">
.wrapper
  // Field
  input.field(
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :class="{pd_right: clearButtonState === true, pd_left: icon !== null}"
  )
  // Clear button
  button.clear_button(v-if="clearButtonState === true" type="button") &times;
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    /**
     * Input types
     * ––––––––––––––––––
     * text, number, password, search
     */
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    /**
     * Input value
     */
    modelValue: {
      type: [String, Number, Boolean],
      required: false,
      default: null
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
     * Input placeholder
     */
    placeholder: {
      type: String,
      required: false,
      default: 'Enter text'
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
    },
    /**
     * Clear button state for input
     */
    clearButtonState: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Icon in input
     */
    icon: {
      type: String,
      required: false,
      default: null
    },
  },
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.wrapper
  width auto
  min-height $size_field
  max-height $size_field
  height auto
  df_rsc()
  position relative
  // Clear button
  .clear_button
    width 32px
    height 32px
    text(20px, 600, normal, 1, center)
    color $color_danger
    background-color transparent
    border-radius $size_radius_small
    transition $transition
    position absolute
    right 7px
    top 3px
    z-index 1
    // # Hover
    &:hover
      color $color_white
      background-color $color_danger
  // Field
  .field
    width 100%
    min-height $size_field
    max-height $size_field
    height 100%
    text(14px, 500, normal, 1, left, none, none)
    mgPd($size_margin, $size_padding)
    color $color_dark
    background-color $color_white
    border 1px solid $color_dark
    border-radius $size_radius
    transition $transition
    // # Placeholder
    &::placeholder
      transition $transition
    // # For clear button
    &.pd_right
      padding-right 36px
    // # Active & Focus
    &.active,
    &:focus
      border-color $color_primary
  /* Conditions */
  .field:not(:valid) ~ .clear_button
    display none
</style>
