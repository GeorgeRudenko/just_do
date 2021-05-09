<template lang="pug">
.modal_window
  //- Content
  .content
    //- # Title
    h4.modal_title Add new category
    //- ––––––––––––––––
    //- # Field
    input.modal_field(type="text" v-model="categoryName" name="new-category-name" placeholder="Category name")
    //- ––––––––––––––––
    //- # Design panel
    .design_panel
      //- ## Icon
      ModalSelect(v-model="categoryIcon" select-type="icon" :is-small="true" :active="selectedIcon" :options="allIcons" :icon-color="selectedColor.label")
      //- ## Color
      ModalSelect(v-model="categoryColor" select-type="color" :is-small="true" :active="selectedColor" :options="allColors")
      //- ## Is favourite
      .modal_checkbox_favourite(@click.prevent="toggleFavourite()")
        svgWrapper.icon(:icon="isFavourite ? 'favourite' : 'favouriteEmpty'")
    //- ––––––––––––––––
    //- # Control panel
    .control_panel
      //- ## Create category
      button.modal_btn.colored(v-if="categoryEditID === null" :disabled="categoryName.length === 0" @click.prevent="createCategory()") Create Category
      //- ## Update category
      button.modal_btn.colored(v-else :disabled="categoryName.length === 0" @click.prevent="updateCategory()") Update Category
      //- ## Close modal
      button.modal_btn(@click.prevent="closeModal()") Cancel
    //- ––––––––––––––––
  //- Close area
  .close_area(@click.prevent="closeModal()")
</template>

<script lang="ts">
// Vue
import { ref, computed, onMounted, defineComponent } from 'vue'
import { useStore } from 'vuex'
// Helpers
import { getAllIcons, getIconByID } from '@/helpers/UI/icons'
import { getAllColors, getColorByID } from '@/helpers/UI/colors'
// Interfaces & Types
// # App
import { AppActionsEnum, AppGettersEnum } from '@/types/app/types'
import { CategoriesGettersEnum } from '@/types/categories/types'
// # Category
import { Category } from '@/types/categories/interfaces.ts'
import { CategoriesActionsEnum } from '@/types/categories/types.ts'
// Components
import SvgWrapper from '@/components/elements/svg/index.vue'
import ModalSelect from '@/components/Modal/Select/index.vue'

export default defineComponent({
  name: 'CategoryModal',
  components: {
    ModalSelect,
    SvgWrapper
  },
  setup () {
    /**
     * Context
     */
    const store = useStore()

    /**
     * Helpers
     */
    // # Helpers data
    const allIcons = getAllIcons()
    const selectedIcon = computed<any>(() => getIconByID(categoryIcon.value))
    // ## Colors
    const allColors = getAllColors()
    const selectedColor = computed<any>(() => getColorByID(categoryColor.value))

    /**
     * Data
     */
    // # Category edit ID
    const categoryEditID = computed<number | null>(() => store.getters[AppGettersEnum.GetModalCategoryEditID])
    // # Category name
    const categoryName = ref<string>('')
    // # Category icon
    const categoryIcon = ref<number>(1)
    // # Category color
    const categoryColor = ref<number>(1)
    // # Category favourite status
    const isFavourite = ref<boolean>(false)

    /**
     * Methods
     */
    // # Toggle favourite status
    const toggleFavourite = (value?: boolean): void => {
      // If argument is exist
      if (value) {
        isFavourite.value = value
      } else {
        isFavourite.value = !isFavourite.value
      }
    }
    // # Close modal
    const closeModal = (): void => {
      store.dispatch(AppActionsEnum.UpdateModalCategoryAddViewStatus, false)
      store.dispatch(AppActionsEnum.UpdateModalCategoryEditID, null)
    }
    // # Create category
    const createCategory = (): void => {
      // Data
      const _id = new Date(Date.now()).getTime()
      // New category
      const newCategory: Category = {
        id: _id,
        title: categoryName.value,
        icon: categoryIcon.value,
        color: categoryColor.value,
        is_favourite: isFavourite.value,
        deleted_at: null
      }

      // # Create new category
      store.dispatch(CategoriesActionsEnum.CreateCategory, newCategory)
      // Close modal window
      store.dispatch(AppActionsEnum.UpdateModalCategoryAddViewStatus, false)
    }
    // # Update category
    const updateCategory = (): void => {
      // Data
      const ctgEditID = categoryEditID.value

      // Condition: if category edit id is exists
      if (ctgEditID) {
        // New category
        const newCategoryValues: Category = {
          id: ctgEditID,
          title: categoryName.value,
          icon: categoryIcon.value,
          color: categoryColor.value,
          is_favourite: isFavourite.value,
          deleted_at: null
        }

        // # Update category
        store.dispatch(CategoriesActionsEnum.UpdateCategory, newCategoryValues)
      }
      // Close modal window
      store.dispatch(AppActionsEnum.UpdateModalCategoryAddViewStatus, false)
    }

    /**
     * Lifecycle
     */
    onMounted(() => {
      // Data
      const ctgEditID = categoryEditID.value

      // Condition: if category edit id is exists
      if (ctgEditID) {
        // # Get category by id
        const getCategory = store.getters[CategoriesGettersEnum.GetCategory](ctgEditID)

        // # Update data
        categoryName.value = getCategory.title
        categoryIcon.value = getCategory.icon
        categoryColor.value = getCategory.color
        isFavourite.value = getCategory.is_favourite
      }
    })

    /**
     * Return
     */
    return {
      // Helpers
      allIcons,
      selectedIcon,
      allColors,
      selectedColor,
      // Data
      categoryEditID,
      categoryName,
      categoryIcon,
      categoryColor,
      isFavourite,
      // Methods
      toggleFavourite,
      closeModal,
      createCategory,
      updateCategory
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.modal_window
  min-width 100vw
  max-width 100vw
  width 100%
  min-height 100vw
  max-height 100vw
  height 100%
  padding 150px 10px 10px 10px
  dFlex(column, flex-start, center)
  position fixed
  top 0
  left 0
  right 0
  z-index $z_modal
  // Close area
  .close_area
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.5)
    position absolute
    top 0
    left 0
    right 0
    z-index 0
  // Content
  .content
    max-width 480px
    width 100%
    padding 32px 24px
    background-color $color_app_dark
    border-radius $size_radius_large
    dFlex(column, flex-start, flex-start)
    z-index 1
    // # Design panel
    .design_panel
      width 100%
      margin-bottom 24px
      dFlex(row, flex-start, center, wrap)
    // # Control panel
    .control_panel
      width 100%
      dFlex(row, flex-start, center, wrap)
    // # Modal title
    .modal_title
      width auto
      text(16px, 700, normal, 1.4, left)
      margin-bottom 12px
      color $color_app_white
    // # Modal field
    .modal_field
      width 100%
      min-height 48px
      max-height 48px
      height 100%
      text(18px, 600, normal, 1, left)
      mgPd(0 0 12px 0, 12px)
      color $color_app_white
      background transparent
      border 2px solid $color_app_dark_grey
      border-radius $size_radius_big
    // # Modal select
    .modal_select
      width auto
      min-height 48px
      max-height 48px
      height 100%
      padding 4px 12px
      color $color_app_white
      background transparent
      border 2px solid $color_app_dark_grey
      border-radius $size_radius_big
      dFlex(column, flex-start, flex-start)
      &.small
        min-height 36px
        max-height 36px
    // # Modal checkbox
    .modal_checkbox_favourite
      min-width 36px
      max-width 36px
      width 100%
      min-height 36px
      max-height 36px
      height 100%
      padding 4px
      dFlex(row, center, center)
      cursor pointer
      // ## Icon
      .icon, svg
        width 100%
        height 100%
        fill $color_app_pink
    // # Modal button
    .modal_btn
      width auto
      min-height 48px
      max-height 48px
      height 100%
      mgPd(0 24px 0 0, 6px 24px)
      text(16px, 700, normal, 1, center)
      color $color_app_white
      background-color $color_app_dark_grey
      border-radius $size_radius_big
      dFlex(row, center, center)
      // ! Colored
      &.colored
        background-color $color_app_pink
      // ! Margin
      &:last-child
        margin-right 0
</style>
