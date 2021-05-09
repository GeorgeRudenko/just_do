<template lang="pug">
.category_wrapper(:class="getColorByID(category.color).label")
  //- Header
    // getIconByID
    // getColorByID
  .header
    //- # Icon
    router-link.preview_icon.bg_color(:to="`/categories/${category.id}`")
      svgWrapper.icon.fill_color(:icon="getIconByID(category.icon).label")
    //- # Edit
    .edit_icon(@click.prevent="openEditModal()")
      svgWrapper.icon(icon="pencil")
    //- # Favourite icon
    .favourite_icon(@click.prevent="toggleFavourite()" :class="{empty: category.is_favourite === false}")
      //- ## Favourite
      svgWrapper.icon(v-if="category.is_favourite" icon="favourite")
      //- ## Not favourite
      svgWrapper.icon(v-else icon="favouriteEmpty")
  //- Content
  .footer
    //- # Data
    .data_wrapper
      //- ## Title
      router-link.title(:to="`/categories/${category.id}`") {{ category.title }}
      //- ## Todos done
      //- ### Part completed
      span.done(v-if="todosLength > 0 && todosLength > completedTodosLength") {{ completedTodosLength }}/{{ todosLength }} done
      //- ### Fully completed
      span.done(v-else-if="todosLength > 0 && todosLength === completedTodosLength") All done!
      //- ### Not exist todo
      span.done(v-else-if="todosLength === 0") Empty :(
    //- # Circle todos done bar
    //- .circle_done C
</template>

<script lang="ts">
// Vue
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
// Helpers
import { getIconByID } from '@/helpers/UI/icons'
import { getColorByID } from '@/helpers/UI/colors'
// Types
// # App
import { AppActionsEnum } from '@/types/app/types'
// # Categories
import { Category } from '@/types/categories/interfaces'
import { CategoriesActionsEnum } from '@/types/categories/types'
// # Todos
import { TodosGettersEnum } from '@/types/todos/types'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'Category',
  components: {
    svgWrapper
  },
  props: {
    /**
     * Category object
     */
    category: {
      type: Object,
      required: true
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
    // # Category
    const category = computed<any>(() => props.category)
    // # Favourite status
    const isFavourite = computed<boolean>(() => props.category.is_favourite)
    // # Get categories todos count
    const todosLength = computed<number>(() => store.getters[TodosGettersEnum.GetAllTodosByCategory](category.value.id).length)
    const completedTodos = computed<number>(() => store.getters[TodosGettersEnum.GetCompletedTodosByCategory](category.value.id).length)
    const completedChildTodos = computed<number>(() => store.getters[TodosGettersEnum.GetChildCompletedTodosByCategory](category.value.id).length)
    // # Todos length
    const completedTodosLength = computed<number>(() => (completedTodos.value + completedChildTodos.value))

    /**
     * Methods
     */
    // # Open edit category modal window
    const openEditModal = (): void => {
      store.dispatch(AppActionsEnum.UpdateModalCategoryEditID, category.value.id)
      store.dispatch(AppActionsEnum.UpdateModalCategoryAddViewStatus, true)
    }
    // # Toggle favourite category status
    const toggleFavourite = (): void => {
      const updateCategory: Category = {
        ...category.value,
        is_favourite: !isFavourite.value
      }

      store.dispatch(CategoriesActionsEnum.UpdateCategoryFavourite, updateCategory)
    }

    /**
     * Return
     */
    return {
      // Helpers
      getIconByID,
      getColorByID,
      // Data
      todosLength,
      completedTodosLength,
      // Methods
      openEditModal,
      toggleFavourite
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.category_wrapper
  max-width 194px
  min-width 194px
  width 100%
  height 100%
  margin 0 16px 16px 0
  padding 16px
  background-color $color_app_dark
  border-radius 20px
  df_css()
  &:nth-child(3n)
    margin-right 0
  //- Header
  .header
    width 100%
    margin 0 0 8px 0
    dFlex(row, space-between, center)
    //- # Icon
    .preview_icon
      preview_icon()
    //- # Edit icon
    .edit_icon
      min-width 24px
      max-width 24px
      width 100%
      min-height 24px
      max-height 24px
      height 100%
      mgPd(0 12px 0 auto, 4px)
      df_rcc()
      display none
      cursor pointer
      .icon
        width 100%
        height 100%
        fill $color_app_white
    //- # Favourite icon
    .favourite_icon
      min-width 24px
      max-width 24px
      width 100%
      min-height 24px
      max-height 24px
      height 100%
      padding 2px
      background-color transparent
      df_rcc()
      cursor pointer
      .icon
        width 100%
        height 100%
        fill $color_app_pink
      // if empty
      &.empty .icon
        display none
  //- Content
  .footer
    width 100%
    dFlex(row, space-between, flex-end)
    //- # Data
    .data_wrapper
      width 100%
      df_css()
      //- ## Title
      .title
        width auto
        min-height 56px
        text(20px, 700, normal, 1.4, left)
        margin 12px 0 4px 0
        color $color_app_white
        df_ces()
        &:hover
          text-decoration underline
      //- ## Todos done
      .done
        width 100%
        text(14px, 600, normal, 1, left)
        color $color_app_grey
    //- # Circle todos done bar
    .circle_done
      min-width 24px
      max-width 24px
      width 100%
      min-height 24px
      max-height 24px
      height 100%
      df_rcc()
  // :hover
  &:hover .header
    .edit_icon,
    .favourite_icon.empty .icon
      display flex
  // # Color schema
  color_schema()
</style>
