<template lang="pug">
.wrapper
  router-link.control.small(to="/search" active-class="active") #[svgWrapper.icon(icon="search")]
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'SearchControl',
  components: {
    svgWrapper
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.wrapper
  width auto
  df_rcc()
  .control
    header_nav_control_btn()
</style>
