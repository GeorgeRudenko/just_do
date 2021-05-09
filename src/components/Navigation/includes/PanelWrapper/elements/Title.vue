<template lang="pug">
h4.title {{ text }}
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.title
  width 100%
  min-height $size_panel_elements
  max-height $size_panel_elements
  height 100%
  padding $size_panel_elements_padding
  text(18px, 600, normal, 1, left)
  color $color_app_white
  df_rsc()
</style>
