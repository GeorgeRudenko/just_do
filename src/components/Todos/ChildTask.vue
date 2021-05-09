<template lang="pug">
//- Child task wrapper
.task_wrapper(:class="[color]")
  //- Task drag
  //-.task_drag
    span.dot …
    span.dot …
  //- # Main content
  .main_content
    //- ## Task status
    .status_checkbox.border_color(:class="{active: childTask.completed, bg_color: childTask.completed}" @click.prevent="updateCompletedStatus()")
      svgWrapper.check(v-if="childTask.completed === true" icon="check" :class="[color]")
    //- ## Task title
    strong.title(:class="{completed: childTask.completed}") {{ childTask.title }}
</template>

<script lang="ts">
// Vue
import { defineComponent, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
// Types
import { TodosActionsEnum } from '@/types/todos/types'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'Task',
  components: {
    svgWrapper
  },
  props: {
    /**
     * Child task
     */
    childTask: {
      type: Object,
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
  },
  setup (props) {
    /**
     * Context
     */
    const store = useStore()

    /**
     * Methods
     */
    // # Update checked
    const updateCompletedStatus = (): void => {
      store.dispatch(TodosActionsEnum.CompleteTask, props.childTask.id)
    }

    /**
     * Return
     */
    return {
      // # Methods
      updateCompletedStatus
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Style
.task_wrapper
  width 100%
  margin 8px 0 0 0
  padding 12px
  background-color $color_app_dark_light
  border-radius $size_radius_big
  df_css()
  position relative
  // ! Hover
  &:not(:hover)
    .task_drag
      opacity 0
  // Task drag
  .task_drag
    width 24px
    height 24px
    dFlex(row, center, center)
    cursor pointer
    opacity 0.5
    transition $transition
    position absolute
    top 12px
    left -30px
    // ! Hover
    &:hover
      opacity 1
    // @Dot
    .dot
      width 24px
      height 12px
      text(18px, 700, normal, 1, center)
      color $color_app_white
      dFlex(row, center, center)
      transform rotate(90deg)
      position absolute
      &:nth-child(1)
        left 0
      &:nth-child(2)
        right -8px
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
      min-width 24px
      max-width 24px
      width 100%
      min-height 24px
      max-height 24px
      height 100%
      background none
      df_rcc()
      .icon
        max-width 14px
        width 100%
        max-height 14px
        height 100%
        fill $color_app_grey
        transition $transition
  //- # Additional content
  .additional_content
    width 100%
    margin 4px 0 0 0
    padding 0 0 0 44px
    df_rss()
    //- ## Element
    .element
      df_rsc()
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
  //- # Color schema
  color_schema()
</style>
