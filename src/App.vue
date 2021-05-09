<template lang="pug">
//- App navigation
Navigation
//- App control panel
PanelWrapper.panel_wrapper
//- App content
#page_wrapper(:class="{view_control_panel: viewControlPanel}")
  router-view
//- Category modal
CategoryModal(v-if="viewCategoryModal")
</template>

<script lang="ts">
// Vue
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
// Types
import { AppGettersEnum } from '@/types/app/types'
// Components
import Navigation from '@/components/Navigation/index.vue'
import PanelWrapper from '@/components/Navigation/includes/PanelWrapper/index.vue'
import CategoryModal from '@/components/Categories/AddNewCategory/modal.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
    PanelWrapper,
    CategoryModal
  },
  setup () {
    /**
     * Context
     */
    const store = useStore()

    /**
     * Data
     */
    // # View category modal
    const viewCategoryModal = computed<boolean>(() => store.getters[AppGettersEnum.GetModalCategoryAddViewStatus])
    // # View control panel
    const viewControlPanel = computed<boolean>(() => store.getters[AppGettersEnum.GetControlPanelViewStatus])

    /**
     * Return
     */
    return {
      // Data
      viewCategoryModal,
      viewControlPanel
    }
  }
})
</script>

<style lang="stylus">
// Import
// # Base styles
@import '~@/assets/styles/base.styl'
// # Reset
@import '~@/assets/styles/reset.styl'

// Styles
// # App
#app
  max-width 100%
  width 100%
  df_css()
// # Page wrapper
#page_wrapper
  width 100%
  padding 48px 0 0 0
  df_csc()
  transition $transition
  &.view_control_panel
    padding-left 280px
// # Content
#content
  max-width $max_width_small
  width 100%
  padding 0 20px
  df_csc()
</style>
