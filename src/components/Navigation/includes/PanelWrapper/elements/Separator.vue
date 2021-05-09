<template lang="pug">
.separator
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Separator'
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.separator
  width 100%
  height 1px
  margin 16px 0
  background-color $color_app_dark
</style>
