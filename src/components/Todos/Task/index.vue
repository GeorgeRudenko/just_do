<template lang="pug">
.wrapper(:class="{group_task: isGroupTask}")
  //- Task drag
  //-.task_drag
    span.dot …
    span.dot …
  //- Task wrapper
  .task_wrapper
    //- # Main content
    Main(
      :title="task.title"
      :completed="task.completed"
      :completedEvent="updateCompletedStatus"
      :childLength="childAllTodos.length"
      :childView="viewChildTodos"
      :childViewEvent="toggleViewChildTodos"
      :color="color"
    )
    //- # Additional content
    Additional(
      :completed="task.completed"
      :targetDate="task.target_date"
      :childLength="childAllTodos.length"
      :childCompletedLength="childCompletedTodos.length"
      :childViewEvent="toggleViewChildTodos"
    )
  //- Child task wrapper
  .task_child_wrapper(v-if="viewChildTodos")
    ChildTask.child(v-for="(childTask, key) in childAllTodos" :key="key" :childTask="childTask" :color="color")
</template>

<script lang="ts">
// Vue
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
// Types
import { TodosGettersEnum, TodosActionsEnum } from '@/types/todos/types'
// Helpers
import { isPastDate, DateFormat } from '@/helpers/date'
// Components
import Main from '@/components/Todos/Task/includes/Main.vue'
import Additional from '@/components/Todos/Task/includes/Additional.vue'
import ChildTask from '@/components/Todos/ChildTask.vue'
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'Task',
  components: {
    Main,
    Additional,
    ChildTask,
    svgWrapper
  },
  props: {
    /**
     * Task
     */
    task: {
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
    },
    /**
     * Is group task
     */
    isGroupTask: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup (props) {
    /**
     * Context
     */
    const store = useStore()
    // Child todos
    const viewChildTodos = ref<boolean>(false)
    // # Get todos
    const childActiveTodos = computed<any>(() => store.getters[TodosGettersEnum.GetChildActiveTodos](props.task.id))
    const childCompletedTodos = computed<any>(() => store.getters[TodosGettersEnum.GetChildCompletedTodos](props.task.id))
    // # All todos
    const childAllTodos = computed(() => [ ...childActiveTodos.value, ...childCompletedTodos.value ])

    /**
     * Methods
     */
    // # Toggle view child todos status
    const toggleViewChildTodos = (): void => {
      viewChildTodos.value = !viewChildTodos.value
    }
    // # Update checked
    const updateCompletedStatus = (): void => {
      // Update view child status
      viewChildTodos.value = false
      // Update task completed status
      store.dispatch(TodosActionsEnum.CompleteTask, props.task.id)
    }

    /**
     * Return
     */
    return {
      // # Data
      viewChildTodos,
      childAllTodos,
      childActiveTodos,
      childCompletedTodos,
      // # Methods
      toggleViewChildTodos,
      updateCompletedStatus,
      DateFormat,
      isPastDate
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Style
.wrapper
  width 100%
  margin 0 0 12px 0
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
  // Task wrapper
  .task_wrapper
    width 100%
    padding 12px
    background-color $color_app_dark_light
    border-radius $size_radius_big
    df_css()
  // Task child wrapper
  .task_child_wrapper
    width 100%
    padding 0 0 0 24px
  // # Group task
  &.group_task
    margin 0
    .task_wrapper
      padding 16px
      background-color transparent
      border-radius 0
    .task_child_wrapper
      padding-bottom 8px
      border-bottom 2px solid $color_app_dark_light
      .child
        margin 0
        padding 8px 24px
</style>
