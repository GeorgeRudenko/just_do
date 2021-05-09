<template lang="pug">
#content
  //- Header
  PageHeader(:title="category.title" :controlPanel="true")
  //- Form
  TaskForm(:color="getColorByID(category.color).label" :categoryId="category.id")
  //- Active task
  TaskWrapper(title="Tasks" :todos="activeTodos" :color="getColorByID(category.color).label")
  //- Completed task
  TaskWrapper(v-if="viewCompletedTodos" title="Completed" :todos="completedTodos" :color="getColorByID(category.color).label")
</template>

<script lang="ts">
// Vue
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
// Helpers
import { getColorByID } from '@/helpers/UI/colors'
// Interfaces & Types
import { TodosGettersEnum } from '@/types/todos/types'
import { CategoriesGettersEnum } from '@/types/categories/types'
// Component
import PageHeader from '@/components/elements/content/Header/index.vue'
import TaskWrapper from '@/components/Todos/TaskWrapper.vue'
import TaskForm from '@/components/Todos/TaskForm.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    PageHeader,
    TaskWrapper,
    TaskForm
  },
  setup () {
    /**
     * Context
     */
    const store = useStore()
    const route = useRoute()

    /**
     * Data
     */
    // Category
    const category = computed(() => store.getters[CategoriesGettersEnum.GetCategory](Number(route.params.id)))
    // ––––––––––––––––––––
    // View completed todos
    const viewCompletedTodos = ref<boolean>(true)
    // Active todos
    const activeTodos = computed(() => store.getters[TodosGettersEnum.GetActiveTodosByCategory](category.value.id))
    // Completed todos
    const completedTodos = computed(() => viewCompletedTodos.value ? store.getters[TodosGettersEnum.GetCompletedTodosByCategory](category.value.id) : [])

    return {
      // Helpers
      getColorByID,
      // Data
      category,
      viewCompletedTodos,
      activeTodos,
      completedTodos
    }
  }
});
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'
</style>
