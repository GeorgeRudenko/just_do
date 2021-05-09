<template lang="pug">
button.panel_control(:class="{active: toggleStatus}" @click.prevent="togglePanel()")
  span.line.l_1
  span.line.l_2
  span.line.l_3
</template>

<script lang="ts">
// Vue
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
// Types
import { AppActionsEnum, AppGettersEnum } from '@/types/app/types.ts'

export default defineComponent({
  name: 'PanelControl',
  setup () {
    /**
     * Context
     */
    const store = useStore()

    /**
     * Data
     */
    const toggleStatus = ref<boolean>(store.getters[AppGettersEnum.GetControlPanelViewStatus])

    /**
     * Methods
     */
    const togglePanel = (): void => {
      // Update local value
      toggleStatus.value = !toggleStatus.value
      // Update value in store
      store.dispatch(AppActionsEnum.UpdateControlPanelViewStatus, toggleStatus.value)
    }

    /**
     * Return
     */
    return {
      // Data
      toggleStatus,
      // Methods
      togglePanel
    }
  }
})
</script>

<style lang="stylus" scoped>
// Imports
@import '~@/assets/styles/base.styl'

// Styles
.panel_control
  min-width $size_header_elements
  max-width $size_header_elements
  width 100%
  min-height $size_header_elements
  max-height $size_header_elements
  height 100%
  background-color transparent
  border-radius $size_radius
  df_ccc()
  transition $transition
  position relative
  z-index 2
  .line
    width 22px
    height 2px
    background-color $color_app_white
    border-radius 4px
    transition $transition
    position absolute
    top 18px
    &.l_1
      top 11px
    &.l_3
      top 25px
  // Active
  &.active
    background-color $color_app_dark
    .line
      top 18px !important
      &.l_2
        transform rotate(45deg)
      &.l_1,
      &.l_3
        transform rotate(-45deg)
</style>
