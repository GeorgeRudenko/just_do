<template lang="pug">
.content_wrapper
  TaskComponent(v-if="todos.length > 0" v-for="(todo, key) in todos" :key="key" :task="todo" :color="color" :isGroupTask="true")
  span.empty_title(v-else) Empty :(
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import TaskComponent from '@/components/Todos/Task/index.vue'

export default defineComponent({
  name: 'Content',
  components: {
    TaskComponent
  },
  props: {
    /**
     * Todos array
     */
    todos: {
      type: Array,
      required: true
    },
    /**
     * Todos array
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
.content_wrapper
  width 100%
  background-color $color_app_dark
  df_css()
  .empty_title
    text(16px, 600, normal, 1, center)
    margin auto
    padding 16px
    color $color_app_grey
    df_rcc()
    user-select none
</style>
