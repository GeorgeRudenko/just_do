<template lang="pug">
.task_wrapper(v-if="todos.length > 0 && emptyView === false")
  //- Title
  h2.title {{ title }}{{ taskLengthView === true ? ` – ${todos.length}` : '' }}
  //- Content
  .content
    TaskComponent(v-for="(todo, key) in todos" :key="key" :task="todo" :color="color")
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import TaskComponent from '@/components/Todos/Task/index.vue'

export default defineComponent({
  name: 'TaskWrapper',
  components: {
    TaskComponent
  },
  props: {
    /**
     * Title for wrapper
     */
    title: {
      type: String,
      required: false,
      default: 'Todos'
    },
    /**
     * Todos array
     */
    todos: {
      type: Array,
      required: true
    },
    /**
     * View task length
     */
    taskLengthView: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Empty view
     */
    emptyView: {
      type: Boolean,
      required: false,
      default: false
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

// Styles
.task_wrapper
  max-width $max_width_small
  width 100%
  margin 32px 0 16px
  df_csc()
  // # Title
  .title
    width 100%
    text(16px, 500, normal, 1.4, left)
    margin-bottom 16px
    color $color_app_white
  // # Content
  .content
    width 100%
    df_css()
</style>
