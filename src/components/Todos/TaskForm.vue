<template lang="pug">
form.form_wrapper(:class="[color]" @submit.prevent="addNewTask")
  // Button for add new task
  button.add_btn.bg_color.main_color(type="submit" :disabled="title === ''") +
  //- Title
  input.input(v-model="title" placeholder="Add a new task" type="text" name="new_task_title" id="new_task_title")
</template>

<script lang="ts">
// Vue
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
// Types
import { Task } from '@/types/todos/interfaces'
import { TodosActionsEnum } from '@/types/todos/types'
// Helpers
import { GetCurrentDate, GetCurrentDateTime } from '@/helpers/date'

export default defineComponent({
  name: 'TaskForm',
  props: {
    /**
     * Category ID
     */
    categoryId: {
      type: Number,
      required: false,
      default: null
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
     * Data
     */
    // Form title
    const title = ref<string>('')
    /**
     * Methods
     */
    // # Add new task
    const addNewTask = (): void => {
      // News task params
      // # ID
      const id = Number(Date.now().toLocaleString().replaceAll(',', ''))
      // News task object
      const newTask: Task = {
        id: id,
        parent_id: null,
        category_id: props.categoryId,
        title: title.value,
        completed: false,
        target_date: GetCurrentDate(),
        created_at: GetCurrentDateTime(),
        deleted_at: null
      }

      store.dispatch(TodosActionsEnum.CreateTask, newTask)
      title.value = ''
    }

    return {
      // Data
      title,
      // Methods
      addNewTask
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.form_wrapper
  width 100%
  padding 12px
  border 1px solid $color_app_dark_light
  border-radius $size_radius_big
  df_rsc()
  // Add new task button
  .add_btn
    min-width 22px
    max-width 22px
    width 100%
    min-height 22px
    max-height 22px
    height 100%
    text(18px, 600, normal, 1, center)
    margin 0 16px 0 0
    color $color_app_dark
    background-color $color_app_pink
    border-radius 6px
    df_rcc()
    transition $transition
    &:disabled
      opacity 0.5
  // Input
  .input
    width 100%
    text(16px, 500, normal, 1, left)
    color $color_app_white
    background-color transparent
    border none
    &::placeholder
      color $color_app_grey
  // # Color schema
  color_schema()
</style>
