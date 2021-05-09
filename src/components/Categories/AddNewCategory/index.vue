<template lang="pug">
.add_new_category
  //- Add new category
  button.control(@click.prevent="openViewModal()") +
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
// Interfaces & Types
import { AppActionsEnum } from '@/types/app/types'

export default defineComponent({
  name: 'AddNewCategory',
  setup () {
    /**
     * Context
     */
    const store = useStore()

    /**
     * Methods
     */
    const openViewModal = (): void => {
      store.dispatch(AppActionsEnum.UpdateModalCategoryAddViewStatus, true)
    }

    /**
     * Return
     */
    return {
      // # Methods
      openViewModal
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.add_new_category
  max-width 194px
  min-width 194px
  width 100%
  height 100%
  margin 0 0 16px 0
  df_ccc()
  // # Control
  .control
    max-width 194px
    min-width 194px
    width 100%
    max-height 96px
    min-height 96px
    height 100%
    text(24px, 600, normal, 1, center)
    color $color_app_grey
    padding 16px
    background-color transparent
    border 3px solid $color_app_dark
    border-radius 20px
    transition $transition
    &:hover
      color $color_app_white
      border-color $color_app_white
</style>
