<template lang="pug">
.wrapper
  //- Control button
  router-link.control.small(to="/alert" active-class="active") #[svgWrapper.icon(icon="bell")]
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'AlertControl',
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
