<template lang="pug">
//- # Additional content
.additional_content
  //- ## Child counter
  .element.child_counter(v-if="childLength > 0" @click.prevent="childViewEvent()")
    svgWrapper.icon(icon="structure")
    strong.label {{ childCompletedLength }}/{{ childLength }}
  //- ## Target day
  .element.target_day(v-if="targetDate !== null" :class="{red: (isPastDate(targetDate) && completed === false), grey: completed}")
    svgWrapper.icon(icon="calendar")
    strong.label {{ DateFormat(targetDate, false) }}
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Helpers
import { isPastDate, DateFormat } from '@/helpers/date'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'


export default defineComponent({
  name: 'Additional',
  components: {
    svgWrapper
  },
  props: {
    /**
     * Task completed status
     */
    completed: {
      type: Boolean,
      required: true
    },
    /**
     * Task target date
     */
    targetDate: {
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
     * Child completed length
     */
    childCompletedLength: {
      type: Number,
      required: true
    },
    /**
     * Child view event
     */
    childViewEvent: {
      type: Function,
      required: true
    }
  },
  setup () {
    /**
     * Return
     */
    return {
      // # Methods
      DateFormat,
      isPastDate
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

//- # Additional content
.additional_content
  width 100%
  margin 4px 0 0 0
  padding 0 0 0 44px
  df_rss()
  //- ## Element
  .element
    df_rsc()
    cursor pointer
    // ### Icon
    .icon
      max-width 16px
      min-width 16px
      width 100%
      max-height 16px
      min-height 16px
      height 100%
      margin 0 6px 0 0
      fill $color_app_green
    // ### Label
    .label
      text(14px, 600, normal, 1, left)
      color $color_app_green
    // Margin
    &:not(:last-child)
      margin-right 16px
  //- ## Child counter
  .child_counter
    .icon
      fill $color_app_grey
    .label
      color $color_app_grey
  //- ## Target day
  .target_day
    .icon
      fill $color_app_green
    .label
      color $color_app_green
    // # Red
    &.red
      .icon
        fill $color_app_red
      .label
        color $color_app_red
    // # Grey
    &.grey
      .icon
        fill $color_app_grey
      .label
        color $color_app_grey
</style>
