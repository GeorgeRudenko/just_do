<template lang="pug">
#navigation
  //- Panel control
  PanelControl.panel_control
  //- Links
  LinksWrapper.links_control
  //- User control
  UserControl.user_control
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import PanelControl from '@/components/Navigation/includes/PanelControl.vue'
import LinksWrapper from '@/components/Navigation/includes/LinksWrapper.vue'
import UserControl from '@/components/Navigation/includes/UserControl/index.vue'

export default defineComponent({
  name: 'Navigation',
  components: {
    PanelControl,
    LinksWrapper,
    UserControl
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
#navigation
  max-width 100vw
  width 100%
  min-height $size_header
  max-height $size_header
  padding 4px 16px
  background-color $color_app_dark_light
  border-bottom 1px solid $color_app_dark
  box-shadow 0 5px 15px 0 rgba(33, 33, 43, 0.5)
  df_rsc()
  position fixed
  top 0
  left 0
  right 0
  z-index $z_control
  // # Panel control
  .panel_control
    margin-right 24px
  // # Panel control
  .links_control
    margin-right 24px
  // # User control
  .user_control
    margin-left auto
</style>
