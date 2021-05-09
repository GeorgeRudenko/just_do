<template lang="pug">
.category_todo_wrapper(v-if="activeTodos.length > 0 || (activeTodos.length === 0 && emptyViewStatus === true)")
  //- Category header
  Header(:icon="getIconByID(category.icon).label" :color="getColorByID(category.color).label" :title="category.title" :viewStatus="viewContentStatus" :event="toggleViewContentStatus")
  //- Category content
  Content(v-if="viewContentStatus" :todos="activeTodos" :color="getColorByID(category.color).label")
  //- Category footer
  Footer(:id="category.id")
</template>

<script lang="ts">
// Vue
import {computed, defineComponent, ref} from 'vue'
import { useStore } from 'vuex'
// Helpers
import { GetCurrentDate } from '@/helpers/date'
import { getIconByID } from '@/helpers/UI/icons'
import { getColorByID } from '@/helpers/UI/colors'
// Types
import { TodosGettersEnum } from '@/types/todos/types'
// Components
import Header from '@/components/elements/content/CategoryTodos/includes/Header.vue'
import Content from '@/components/elements/content/CategoryTodos/includes/Content.vue'
import Footer from '@/components/elements/content/CategoryTodos/includes/Footer.vue'

export default defineComponent({
  name: 'CategoryTodos',
  components: {
    Header,
    Content,
    Footer
  },
  props: {
    /**
     * Category
     */
    category: {
      type: Object,
      required: true
    },
    /**
     * Category
     */
    emptyViewStatus: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Is daily todos
     */
    isDaily: {
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

    /**
     * Data
     */
    // View content status
    const viewContentStatus = ref<boolean>(false)
    // Active todos
    const activeTodos = computed(() => props.isDaily ? store.getters[TodosGettersEnum.GetActiveTodosByCategoryAndDate](props.category.id, GetCurrentDate()) : store.getters[TodosGettersEnum.GetActiveTodosByCategory](props.category.id))

    /**
     * Methods
     */
    const toggleViewContentStatus = (): void => {
      viewContentStatus.value = !viewContentStatus.value
    }

    /**
     * Return
     */
    return {
      // Helpers
      getIconByID,
      getColorByID,
      // Data
      viewContentStatus,
      activeTodos,
      // Methods
      toggleViewContentStatus
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.category_todo_wrapper
  width 100%
  margin 0 0 24px 0
  df_css()
</style>
