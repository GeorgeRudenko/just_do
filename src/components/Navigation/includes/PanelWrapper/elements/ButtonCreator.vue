<template lang="pug">
.button_wrapper
  button.button(@click.prevent="openCreateModal()") {{ text }}
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Context
import { useStore } from 'vuex'
// Interfaces & Types
import { AppActionsEnum } from '@/types/app/types.ts'

export default defineComponent({
  name: 'ButtonCreator',
  props: {
    /**
     * Text
     */
    text: {
      type: String,
      required: false,
      default: 'Link'
    }
  },
  setup () {
    /**
     * Context
     */
    const store = useStore()

    /**
     * Methods
     */
    // # Open edit category modal window
    const openCreateModal = (): void => {
      store.dispatch(AppActionsEnum.UpdateModalCategoryAddViewStatus, true)
    }

    /**
     * Return
     */
    return {
      // Methods
      openCreateModal
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.button_wrapper
  width 100%
  min-height $size_panel_elements
  max-height $size_panel_elements
  height 100%
  padding $size_panel_elements_padding
  padding-top 24px
  df_rcc()
  .button
    max-width max-content
    width 100%
    text(16px, 500, normal, 1, center)
    color $color_app_grey
    background none
    transition $transition
    &:hover
      color $color_app_white
</style>
